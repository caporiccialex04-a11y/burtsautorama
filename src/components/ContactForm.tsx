"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("ready");
  }

  return (
    <form onSubmit={onSubmit} className="surface-card p-6 md:p-8" noValidate={false}>
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Name (Required)
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Name (Required)"
            className="min-h-12 rounded-md border border-line bg-paper px-3 py-2 font-normal text-ink outline-none transition focus:border-brand"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Email (Required)
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="Email (Required)"
            className="min-h-12 rounded-md border border-line bg-paper px-3 py-2 font-normal text-ink outline-none transition focus:border-brand"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Message
          <textarea
            name="message"
            rows={7}
            placeholder="Message"
            className="rounded-md border border-line bg-paper px-3 py-2 font-normal text-ink outline-none transition focus:border-brand"
          />
        </label>
        <button type="submit" className="btn btn-primary w-full sm:w-auto">
          Send Message
        </button>
        {status === "ready" ? (
          <p className="text-sm text-ink-soft" role="status">
            Your email app should open with this message addressed to{" "}
            {site.email}. If it does not, please call us at {site.phone}.
          </p>
        ) : (
          <p className="text-sm text-ink-soft">
            {/* [WIRE FORM BACKEND] Currently opens the visitor’s email client via mailto. */}
            Prefer to talk? Call{" "}
            <a href={site.phoneHref} className="font-semibold text-brand-deep underline">
              {site.phone}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
