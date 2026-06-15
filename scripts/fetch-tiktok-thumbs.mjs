// Fetches a poster image + caption for every TikTok in lib/content.ts via the
// public oEmbed endpoint, saves posters to /public/images/thumbs/<id>.jpg, and
// writes captions to lib/tiktok-meta.json. This lets the portfolio render fast
// static posters (no iframes) until a visitor clicks play.
//
// Run with:  npm run thumbs
import { writeFile, mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const HANDLE = "herconstellation";
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const content = await readFile(path.join(ROOT, "lib/content.ts"), "utf8");

  // Parse the one-line tiktoks entries: { category: "...", id: "123", photo: true }
  const items = [];
  const seen = new Set();
  for (const line of content.split(/\r?\n/)) {
    if (!line.includes("category:")) continue;
    const idm = line.match(/id:\s*"(\d+)"/);
    if (!idm || seen.has(idm[1])) continue;
    seen.add(idm[1]);
    items.push({ id: idm[1], photo: /photo:\s*true/.test(line) });
  }
  console.log(`Found ${items.length} TikToks.`);

  const thumbDir = path.join(ROOT, "public/images/thumbs");
  await mkdir(thumbDir, { recursive: true });

  const meta = {};
  let ok = 0;
  let miss = 0;

  for (const item of items) {
    const kind = item.photo ? "photo" : "video";
    const url = `https://www.tiktok.com/@${HANDLE}/${kind}/${item.id}`;
    try {
      const res = await fetch(
        `https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`,
        { headers: { "User-Agent": UA } }
      );
      const data = await res.json(); // throws on the empty body photo posts return
      if (data.thumbnail_url) {
        const img = await fetch(data.thumbnail_url, {
          headers: { "User-Agent": UA },
        });
        const buf = Buffer.from(await img.arrayBuffer());
        await writeFile(path.join(thumbDir, `${item.id}.jpg`), buf);
        meta[item.id] = { title: data.title ?? "", thumb: true };
        ok++;
        console.log(`  ✓ ${item.id}`);
      } else {
        meta[item.id] = { title: data.title ?? "", thumb: false };
        miss++;
        console.log(`  – ${item.id} (no thumbnail)`);
      }
    } catch {
      meta[item.id] = { title: "", thumb: false };
      miss++;
      console.log(`  – ${item.id} (oembed failed — likely a photo post)`);
    }
    await sleep(150);
  }

  await writeFile(
    path.join(ROOT, "lib/tiktok-meta.json"),
    JSON.stringify(meta, null, 2) + "\n"
  );
  console.log(`\nDone. ${ok} posters saved, ${miss} without a poster.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
