"use client";

import { useState, type FormEvent } from "react";

interface ContactFormProps {
  type?: "contact" | "partner" | "career";
  idPrefix?: string;
}

export default function ContactForm({ type = "contact", idPrefix = "" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const fieldId = (name: string) => (idPrefix ? `${idPrefix}-${name}` : name);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl bg-green-50 border border-green-200 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-green-800">Thank you!</h3>
        <p className="mt-2 text-green-700">
          Your message has been received. Our team will get back to you within 24–48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={fieldId("name")} className="block text-sm font-medium text-foreground mb-1.5">
            Full Name *
          </label>
          <input
            id={fieldId("name")}
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor={fieldId("email")} className="block text-sm font-medium text-foreground mb-1.5">
            Email Address *
          </label>
          <input
            id={fieldId("email")}
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={fieldId("phone")} className="block text-sm font-medium text-foreground mb-1.5">
            Phone Number
          </label>
          <input
            id={fieldId("phone")}
            name="phone"
            type="tel"
            className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="+92 300 0000000"
          />
        </div>
        {type === "partner" && (
          <div>
            <label htmlFor={fieldId("company")} className="block text-sm font-medium text-foreground mb-1.5">
              Company Name *
            </label>
            <input
              id={fieldId("company")}
              name="company"
              type="text"
              required
              className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="Your company"
            />
          </div>
        )}
        {type === "career" && (
          <div>
            <label htmlFor={fieldId("position")} className="block text-sm font-medium text-foreground mb-1.5">
              Position Applied For *
            </label>
            <input
              id={fieldId("position")}
              name="position"
              type="text"
              required
              className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="e.g. Sales Executive"
            />
          </div>
        )}
        {type === "contact" && (
          <div>
            <label htmlFor={fieldId("subject")} className="block text-sm font-medium text-foreground mb-1.5">
              Subject
            </label>
            <select
              id={fieldId("subject")}
              name="subject"
              className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option>General Inquiry</option>
              <option>Product Information</option>
              <option>Technical Support</option>
              <option>Distributor Inquiry</option>
              <option>Other</option>
            </select>
          </div>
        )}
      </div>

      {type === "partner" && (
        <div>
          <label htmlFor={fieldId("city")} className="block text-sm font-medium text-foreground mb-1.5">
            City / Region *
          </label>
          <input
            id={fieldId("city")}
            name="city"
            type="text"
            required
            className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Your city or region"
          />
        </div>
      )}

      <div>
        <label htmlFor={fieldId("message")} className="block text-sm font-medium text-foreground mb-1.5">
          Message *
        </label>
        <textarea
          id={fieldId("message")}
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
          placeholder={
            type === "partner"
              ? "Tell us about your business and distribution network..."
              : "How can we help you?"
          }
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
      >
        {type === "partner" ? "Submit Partnership Inquiry" : type === "career" ? "Submit Application" : "Send Message"}
      </button>
    </form>
  );
}
