# Portfolio videos

Drop your vertical **9:16 .mp4** clips here, then reference them in
`lib/content.ts` on each gallery item, e.g.:

```ts
{
  title: "Secret Beach Villa",
  location: "El Nido, Palawan",
  poster: "/images/secret-beach.jpg", // shown as the thumbnail
  video: "/videos/secret-beach.mp4",  // autoplays muted on hover
}
```

Tips for fastest loading:
- Keep clips short (5–10s loops) and compressed (H.264, ~720x1280, <3 MB).
- Always provide a `poster` image — it shows instantly and is the fallback
  on mobile / reduced-motion, before the video loads.
- Items with no `video` simply show the poster image.
