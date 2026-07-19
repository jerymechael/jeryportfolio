"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbx877YikUCbaFz_bpePd6v4goPEpeeqR01NRuU4jkk_Rw2ZlMRIukU2ILjDBvQaE9wt/exec";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialState: FormState = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      setStatus("success");
      setForm(initialState);
      setTimeout(() => setStatus("idle"), 3500);

    } catch (error) {
      console.error("Error:", error);
      setStatus("idle");
      alert("Failed to send message. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-3xl border border-border bg-white p-7 sm:p-9 shadow-card text-center items-center w-full h-full justify-between"
    >
      <div className="mb-1 w-full">
        <h3 className="text-xl font-bold text-foreground tracking-tight">Send me a note</h3>
        <p className="text-sm text-muted-2 mt-1">I&apos;ll get back to you soon</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-left">
        <Field
          label="Name"
          id="name"
          value={form.name}
          onChange={(v) => handleChange("name", v)}
          required
        />
        <Field
          label="Email"
          id="email"
          type="email"
          value={form.email}
          onChange={(v) => handleChange("email", v)}
          required
        />
      </div>

      <div className="w-full text-left">
        <Field
          label="Phone Number"
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(v) => handleChange("phone", v)}
        />
      </div>

      <div className="flex flex-col gap-2 w-full text-left">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className="rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-lavender-400 resize-none w-full"
          placeholder="Tell me a bit about the opportunity..."
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        icon={status === "success" ? <CheckCircle2 size={18} /> : <Send size={16} />}
        className="mt-1 w-full sm:w-64"
      >
        {status === "submitting"
          ? "Sending..."
          : status === "success"
            ? "Message sent"
            : "Send message"}
      </Button>

      {status === "success" && (
        <motion.p
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm font-medium text-emerald-600 mt-1"
        >
          Thanks! I&apos;ll get back to you within a day.
        </motion.p>
      )}
    </form>
  );
}

interface FieldProps {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}

function Field({ label, id, value, onChange, type = "text", required }: FieldProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-lavender-400 w-full"
      />
    </div>
  );
}