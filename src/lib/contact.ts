export type ContactFields = { name: string; email: string; subject: string; message: string };
export function validateContact(fields: ContactFields): Partial<Record<keyof ContactFields, string>> {
  const errors: Partial<Record<keyof ContactFields, string>> = {};
  if (!fields.name.trim()) errors.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!fields.subject.trim()) errors.subject = 'Please add a subject.';
  if (!fields.message.trim()) errors.message = 'Please enter your message.';
  return errors;
}
// Email fallback: opens a draft, and never reports delivery without a provider.
export function createEmailDraft(fields: ContactFields) {
  const body = `${fields.message.trim()}\n\nFrom: ${fields.name.trim()}\nEmail: ${fields.email.trim()}`;
  return `mailto:aakashit289@gmail.com?subject=${encodeURIComponent(fields.subject.trim())}&body=${encodeURIComponent(body)}`;
}
