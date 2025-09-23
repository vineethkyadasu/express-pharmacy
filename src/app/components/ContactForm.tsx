// src/app/components/ContactForm.tsx
"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<null | "idle" | "sending" | "sent" | "error">(null);

  function updateField(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus(null), 4000);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input
          name="name"
          value={form.name}
          onChange={updateField}
          required
          placeholder="Your name"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          name="email"
          value={form.email}
          onChange={updateField}
          required
          type="email"
          placeholder="Email address"
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <input
        name="phone"
        value={form.phone}
        onChange={updateField}
        placeholder="Phone (optional)"
        className="w-full px-4 py-2 border rounded-lg"
      />

      <textarea
        name="message"
        value={form.message}
        onChange={updateField}
        required
        placeholder="How can we help you?"
        className="w-full px-4 py-2 border rounded-lg min-h-[120px]"
      />

      <div className="flex items-center gap-4">
        <button
          type="submit"
          className="bg-blue-900 text-white px-5 py-2 rounded-lg font-semibold"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        <div>
          {status === "sent" && <span className="text-green-600">Message sent — we will contact you soon.</span>}
          {status === "error" && <span className="text-red-600">Error sending message. Try again later.</span>}
        </div>
      </div>
    </form>
  );
}