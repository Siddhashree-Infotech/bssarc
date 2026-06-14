import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} for security and facility services inquiries.`,
};

export default function ContactPage() {
  const fullAddress = `${site.address.line1}, ${site.address.line2}, ${site.address.city} – ${site.address.pin}`;

  return (
    <>
      <section className="border-b border-brand-100 bg-white py-14">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Get in touch"
            description="Reach out for service inquiries, site assessments or partnership discussions."
          />
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-semibold text-brand-900">Corporate office</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{fullAddress}</p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-semibold text-brand-900">Direct contact</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>
                  <span className="font-medium text-slate-800">Phone: </span>
                  <a href={site.phoneHref} className="text-brand-700 hover:underline">
                    {site.phone}
                  </a>
                </li>
                <li>
                  <span className="font-medium text-slate-800">Email: </span>
                  <a href={`mailto:${site.email}`} className="text-brand-700 hover:underline">
                    {site.email}
                  </a>
                </li>
                <li>
                  <span className="font-medium text-slate-800">Leadership: </span>
                  {site.leadership.name}, {site.leadership.title}
                </li>
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-semibold text-brand-900">Locations</h2>
              <p className="mt-3 text-sm text-slate-600">
                {site.stats.locations.join(" • ")} • Pan India expansion
              </p>
            </article>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-brand-900">Send an inquiry</h2>
            <p className="mt-2 text-sm text-slate-600">
              Fill in the form and our team will respond as soon as possible.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
