import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="py-20">
      <Container className="max-w-2xl text-center">
        <div className="rounded-3xl border border-green-200 bg-green-50 p-10">
          <h1 className="text-3xl font-bold text-green-950">Thank you</h1>
          <p className="mt-4 text-slate-700">
            Your inquiry has been sent to the {site.name} team. We will get back to you shortly.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-xl bg-brand-700 px-6 py-3 text-sm font-semibold text-white"
          >
            Back to Home
          </Link>
        </div>
      </Container>
    </section>
  );
}
