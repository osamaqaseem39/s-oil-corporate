import type { Metadata } from "next";
import { company } from "@/data/company";
import { PageHero } from "@/components/ui";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${company.name}. Contact our sales, technical support, or distributor teams.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We're here to help. Reach out for product inquiries, technical support, or partnership opportunities."
        breadcrumb={[{ label: "Contact" }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
                <p className="mt-3 text-muted leading-relaxed">
                  Have a question about our products or want to become a distributor?
                  Fill out the form and our team will respond within 24–48 hours.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    label: "Phone",
                    value: company.phone,
                    href: `tel:${company.phone}`,
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    ),
                  },
                  {
                    label: "Email",
                    value: company.email,
                    href: `mailto:${company.email}`,
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    ),
                  },
                  {
                    label: "WhatsApp",
                    value: "Chat with us",
                    href: `https://wa.me/${company.whatsapp}`,
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    ),
                  },
                  {
                    label: "Address",
                    value: company.address,
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    ),
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {item.icon}
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.label === "WhatsApp" ? "_blank" : undefined}
                          rel={item.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                          className="text-sm text-muted hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 rounded-xl bg-white p-8 shadow-lg border border-border">
              <h2 className="text-xl font-bold text-foreground mb-6">Send a Message</h2>
              <ContactForm type="contact" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-0">
        <div className="mx-auto max-w-7xl px-4 pb-20">
          <div className="rounded-xl overflow-hidden border border-border h-80 bg-surface flex items-center justify-center">
            <div className="text-center text-muted">
              <svg className="mx-auto h-12 w-12 text-muted/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="mt-3 font-medium">{company.address}</p>
              <p className="mt-1 text-sm">Map integration — add Google Maps embed URL here</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
