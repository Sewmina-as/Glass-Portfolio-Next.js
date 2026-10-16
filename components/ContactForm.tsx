"use client";
import { useState, type FormEvent } from "react";
import Icon from "./Icon";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    // TODO: POST to your API route / email service here.
    setSent(true);
    form.reset();
  };
  return (
    <form className="form glass" onSubmit={onSubmit}>
      <div className="row">
        <input name="name" placeholder="Your Name" aria-label="Your name" required />
        <input name="email" type="email" placeholder="Your Email" aria-label="Your email" required />
      </div>
      <select name="project" aria-label="Project type" defaultValue="">
        <option value="" disabled>Your Project</option>
        <option>Product Design</option><option>UI/UX Design</option>
        <option>Design System</option><option>User Research</option>
      </select>
      <textarea name="message" rows={4} placeholder="Your Message" aria-label="Your message" required />
      <button className="btn btn-dark wide" type="submit">Send Message <Icon name="send" size={15} /></button>
      <p className="sent" role="status">{sent ? "Thanks — your message is in. I'll reply within two working days." : ""}</p>
    </form>
  );
}
