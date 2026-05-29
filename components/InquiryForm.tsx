"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { inquirySchema, type InquiryInput } from "@/lib/inquiry-schema";
import { siteConfig } from "@/lib/site.config";

export default function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryInput>({ resolver: zodResolver(inquirySchema) });

  async function onSubmit(values: InquiryInput) {
    setStatus("sending");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      reset();
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-lg border border-sand-200 bg-white/70 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-accent";
  const errText = "mt-1 text-xs text-red-700";

  return (
    <section id="contact" className="bg-sand-50 py-24">
      <div className="container-lux grid gap-12 md:grid-cols-2">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="section-heading mt-3">{siteConfig.hero.primaryCta}</h2>
          <p className="mt-4 max-w-md text-ink-700">
            Tell me about your property and what you&rsquo;re looking for. I read
            every inquiry personally and reply within a few days.
          </p>
          <p className="mt-6 text-sm text-ink-700">
            Prefer email?{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-accent underline-offset-4 hover:underline"
            >
              {siteConfig.contact.email}
            </a>
          </p>
        </div>

        {status === "sent" ? (
          <div className="flex items-center rounded-2xl border border-sand-200 bg-white/70 p-8">
            <div>
              <h3 className="font-serif text-2xl text-ink-900">
                Thank you — message sent.
              </h3>
              <p className="mt-2 text-ink-700">
                Your inquiry is on its way to my inbox. I&rsquo;ll be in touch
                soon.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="btn-outline mt-6"
              >
                Send another
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 rounded-2xl border border-sand-200 bg-white/40 p-8"
            noValidate
          >
            {/* Honeypot: hidden from humans, tempting to bots */}
            <div className="hidden" aria-hidden="true">
              <label>
                Company website
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  {...register("company_website")}
                />
              </label>
            </div>

            <div>
              <input
                placeholder="Your name"
                className={field}
                {...register("name")}
              />
              {errors.name && <p className={errText}>{errors.name.message}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email address"
                className={field}
                {...register("email")}
              />
              {errors.email && <p className={errText}>{errors.email.message}</p>}
            </div>
            <div>
              <input
                placeholder="Property or company name"
                className={field}
                {...register("property")}
              />
              {errors.property && (
                <p className={errText}>{errors.property.message}</p>
              )}
            </div>
            <div>
              <input
                placeholder="Preferred dates (optional)"
                className={field}
                {...register("dates")}
              />
            </div>
            <div>
              <textarea
                placeholder="Tell me about your property and goals"
                rows={4}
                className={field}
                {...register("message")}
              />
              {errors.message && (
                <p className={errText}>{errors.message.message}</p>
              )}
            </div>

            {status === "error" && (
              <p className="text-sm text-red-700">
                Something went wrong sending your message. Please try again or
                email me directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary w-full disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send inquiry"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
