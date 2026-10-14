import { useState } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactFields, createEmailDraft, validateContact } from '@/lib/contact';

export default function ContactForm() {
  const [fields, setFields] = useState<ContactFields>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFields, string>>>({});
  const [draftReady, setDraftReady] = useState(false);
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContact(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      const first = Object.keys(nextErrors)[0];
      event.currentTarget.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      setDraftReady(false);
      return;
    }
    setDraftReady(true);
    window.location.href = createEmailDraft(fields);
  }
  return (
    <form onSubmit={submit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        {(['name', 'email'] as const).map(key => <div key={key}>
          <label htmlFor={`contact-${key}`} className="block text-sm font-medium mb-2">{key === 'name' ? 'Your name' : 'Email address'} <span className="text-muted-foreground">*</span></label>
          <input id={`contact-${key}`} name={key} type={key === 'email' ? 'email' : 'text'} autoComplete={key} required maxLength={200} value={fields[key]} placeholder={key === 'name' ? 'Your name' : 'you@example.com'} className="contact-input" aria-invalid={!!errors[key]} aria-describedby={errors[key] ? `${key}-error` : undefined} onChange={e => { setFields({ ...fields, [key]: e.target.value }); setDraftReady(false); }} />
          {errors[key] && <p id={`${key}-error`} className="text-destructive text-xs mt-2">{errors[key]}</p>}
        </div>)}
      </div>
      {(['subject', 'message'] as const).map(key => <div key={key}>
        <label htmlFor={`contact-${key}`} className="block text-sm font-medium mb-2">{key === 'subject' ? 'Subject' : 'Your message'} <span className="text-muted-foreground">*</span></label>
        {key === 'subject' ? <input id="contact-subject" name={key} required maxLength={200} className="contact-input" placeholder="What would you like to discuss?" value={fields[key]} aria-invalid={!!errors[key]} aria-describedby={errors[key] ? `${key}-error` : undefined} onChange={e => { setFields({ ...fields, [key]: e.target.value }); setDraftReady(false); }} /> : <textarea id="contact-message" name={key} required maxLength={5000} className="contact-input resize-y min-h-32" rows={4} placeholder="Tell me a little about your opportunity or idea…" value={fields[key]} aria-invalid={!!errors[key]} aria-describedby={errors[key] ? `${key}-error` : undefined} onChange={e => { setFields({ ...fields, [key]: e.target.value }); setDraftReady(false); }} />}
        {errors[key] && <p id={`${key}-error`} className="text-destructive text-xs mt-2">{errors[key]}</p>}
      </div>)}
      <Button size="lg" type="submit" className="w-full sm:w-auto">Create email draft <ArrowUpRight /></Button>
      <p className="text-xs text-muted-foreground flex gap-2 leading-relaxed"><Mail size={14} className="shrink-0 mt-0.5" />This opens your email app. Review and send the message there; nothing is sent automatically.</p>
      {draftReady && <p role="status" className="text-sm text-primary">Your draft is ready. If your email app did not open, <a className="underline" href={createEmailDraft(fields)}>open the draft again</a> or email aakashit289@gmail.com directly.</p>}
    </form>
  );
}
