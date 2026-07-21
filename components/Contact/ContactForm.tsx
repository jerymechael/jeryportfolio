"use client";

import { useState, FormEvent, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, XCircle, Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";
import {
  ContactFormValues,
  ContactFormErrors,
  validateName,
  validateEmail,
  validatePhone,
  validateMessage,
  validateContactForm,
  hasErrors,
} from "@/lib/validation";

const initialState: ContactFormValues = { name: "", email: "", phone: "", message: "" };

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormValues>(initialState);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleChange(field: keyof ContactFormValues, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleBlur(field: keyof ContactFormValues) {
    const value = form[field];
    let error: string | undefined;

    switch (field) {
      case "name":
        error = validateName(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "phone":
        error = validatePhone(value);
        break;
      case "message":
        error = validateMessage(value);
        break;
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
  }

  function showToast(nextStatus: "success" | "error", message = "") {
    setStatus(nextStatus);
    setErrorMessage(message);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setStatus("idle"), 4500);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const validationErrors = validateContactForm(form);
    setErrors(validationErrors);

    if (hasErrors(validationErrors)) {
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        if (data.errors) {
          setErrors(data.errors);
        }
        showToast("error");
        return;
      }

      setForm(initialState);
      setErrors({});
      showToast("success");
    } catch (error) {
      console.error("Contact form submit error:", error);
      showToast("error");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <div className="relative w-full h-full">
      <form
        onSubmit={handleSubmit}
        noValidate
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
            onBlur={() => handleBlur("name")}
            error={errors.name}
            required
          />
          <Field
            label="Email"
            id="email"
            type="email"
            value={form.email}
            onChange={(v) => handleChange("email", v)}
            onBlur={() => handleBlur("email")}
            error={errors.email}
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
            onBlur={() => handleBlur("phone")}
            error={errors.phone}
            required
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
            onBlur={() => handleBlur("message")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`rounded-2xl border bg-background/60 px-4 py-3 text-sm outline-none transition-colors resize-none w-full ${
              errors.message
                ? "border-red-400 focus:border-red-500"
                : "border-border focus:border-lavender-400"
            }`}
            placeholder="Tell me a bit about the opportunity..."
          />
          {errors.message && (
            <p id="message-error" className="text-xs font-medium text-red-500">
              {errors.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          icon={
            isSubmitting ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Send size={16} />
            )
          }
          className="mt-1 w-full sm:w-64"
        >
          {isSubmitting ? "Sending..." : "Send message"}
        </Button>
      </form>

      {/* Toast notification */}
      <AnimatePresence>
        {(status === "success" || status === "error") && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 350, damping: 26 }}
            role="status"
            aria-live="polite"
            className={`absolute left-1/2 -translate-x-1/2 -top-4 sm:-top-6 z-20 w-[calc(100%-2rem)] sm:w-auto sm:max-w-md rounded-2xl border px-5 py-4 shadow-card flex items-start gap-3 ${
              status === "success"
                ? "bg-emerald-50 border-emerald-200"
                : "bg-red-50 border-red-200"
            }`}
          >
            {status === "success" ? (
              <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <XCircle size={20} className="text-red-500 shrink-0 mt-0.5" />
            )}
            <div className="text-left">
              <p
                className={`text-sm font-semibold ${
                  status === "success" ? "text-emerald-700" : "text-red-600"
                }`}
              >
                {status === "success" ? "Message sent successfully." : "Failed to send message."}
              </p>
              <p className="text-xs text-muted-2 mt-0.5">
                {status === "success"
                  ? "Thank you for reaching out. I'll get back to you as soon as possible."
                  : errorMessage || "Please try again later."}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface FieldProps {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  type?: string;
  required?: boolean;
  error?: string;
}

function Field({ label, id, value, onChange, onBlur, type = "text", required, error }: FieldProps) {
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
        onBlur={onBlur}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`rounded-2xl border bg-background/60 px-4 py-3 text-sm outline-none transition-colors w-full ${
          error ? "border-red-400 focus:border-red-500" : "border-border focus:border-lavender-400"
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="text-xs font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}