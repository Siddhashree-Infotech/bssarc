import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { processSteps, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "How We Work",
  description: `Learn about ${site.name}'s service delivery model from assessment to continuous improvement.`,
};

export default function HowWeWorkPage() {
  return (
    <>
      <section className="border-b border-brand-100 bg-white py-14">
        <Container>
          <SectionHeading
            eyebrow="Process"
            title="Our service delivery model"
            description="A structured approach designed for reliability, compliance and measurable outcomes."
          />
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <article
                key={step.step}
                className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[120px_1fr]"
              >
                <div className="flex items-start">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-700 text-lg font-bold text-white">
                    {step.step}
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-brand-900">{step.title}</h2>
                  <p className="mt-3 leading-relaxed text-slate-600">{step.description}</p>
                  {index < processSteps.length - 1 ? (
                    <p className="mt-4 text-sm font-medium text-brand-700">
                      Next: {processSteps[index + 1].title}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-50 py-14">
        <Container className="text-center">
          <h2 className="text-2xl font-bold text-brand-900">Start with an assessment</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Deployment is planned based on a site survey and your operational requirements.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-xl bg-brand-700 px-6 py-3 text-sm font-semibold text-white"
          >
            Schedule a Consultation
          </Link>
        </Container>
      </section>
    </>
  );
}
