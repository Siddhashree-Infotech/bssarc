import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Explore integrated security, facility, technical, F&B and real estate services from ${site.name}.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-brand-100 bg-white py-14">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Integrated service portfolio"
            description="Single-window solutions covering security, facilities, technical support, F&B and real estate."
          />
        </Container>
      </section>

      <section className="py-16">
        <Container className="space-y-8">
          {services.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className={`grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1fr_1.2fr] ${
                index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                  Service {index + 1}
                </p>
                <h2 className="mt-2 text-3xl font-bold text-brand-900">{service.title}</h2>
                <p className="mt-4 leading-relaxed text-slate-600">{service.summary}</p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-brand-50 px-4 py-3 text-sm text-slate-700"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-brand-900 py-14 text-white">
        <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold">Need a tailored service plan?</h2>
            <p className="mt-2 text-brand-200">
              We assess your site and design deployment around your operational needs.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand-900"
          >
            Request a Quote
          </Link>
        </Container>
      </section>
    </>
  );
}
