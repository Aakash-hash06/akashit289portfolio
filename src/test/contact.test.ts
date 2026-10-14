import { describe, expect, it } from 'vitest';
import { createEmailDraft, validateContact } from '../lib/contact';
const valid = { name: 'Recruiter', email: 'recruiter@example.com', subject: 'Interview & opportunity', message: 'Hello Aakash' };
describe('contact email fallback', () => {
  it('requires a name, valid email, subject, and message', () => {
    expect(Object.keys(validateContact({ name: ' ', email: 'bad', subject: '', message: '' }))).toEqual(['name', 'email', 'subject', 'message']);
    expect(validateContact(valid)).toEqual({});
  });
  it('addresses the real email and safely encodes the supplied content', () => {
    const draft = createEmailDraft(valid);
    expect(draft.startsWith('mailto:aakashit289@gmail.com?')).toBe(true);
    const params = new URLSearchParams(draft.split('?')[1]);
    expect(params.get('subject')).toBe('Interview & opportunity');
    expect(params.get('body')).toBe('Hello Aakash\n\nFrom: Recruiter\nEmail: recruiter@example.com');
  });
});
