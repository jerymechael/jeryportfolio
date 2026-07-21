export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Menerima format: 08xxxxxxxxxx, +628xxxxxxxxxx, 628xxxxxxxxxx
const PHONE_REGEX = /^(\+62|62|0)8[1-9][0-9]{6,10}$/;

export function validateName(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return "Name is required.";
  if (trimmed.length < 2) return "Name is too short.";
  return undefined;
}

export function validateEmail(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return "Email is required.";
  if (!EMAIL_REGEX.test(trimmed)) return "Please enter a valid email address.";
  return undefined;
}

export function validatePhone(value: string): string | undefined {
  const cleaned = value.trim().replace(/[\s-]/g, "");
  if (!cleaned) return "Phone number is required.";
  if (!PHONE_REGEX.test(cleaned)) return "Please enter a valid phone number.";
  return undefined;
}

export function validateMessage(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return "Message is required.";
  if (trimmed.length < 10) return "Message should be at least 10 characters.";
  return undefined;
}

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const nameError = validateName(values.name);
  const emailError = validateEmail(values.email);
  const phoneError = validatePhone(values.phone);
  const messageError = validateMessage(values.message);

  if (nameError) errors.name = nameError;
  if (emailError) errors.email = emailError;
  if (phoneError) errors.phone = phoneError;
  if (messageError) errors.message = messageError;

  return errors;
}

export function hasErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}