import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  const fullAddress = `${site.address.line1}, ${site.address.line2}, ${site.address.city} – ${site.address.pin}`;

  return (
    <footer className="mt-auto border-t border-brand-100 bg-brand-950 text-brand-100">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo showText className="[&_span]:text-white [&_span:last-child]:text-brand-200" />
            <p className="text-sm leading-relaxed text-brand-200">{site.motto}</p>
            <p className="text-sm text-brand-300">{site.tagline}</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-200 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-brand-200">
              <li>
                <a href={site.phoneHref} className="hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li>{fullAddress}</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Compliance
            </h3>
            <ul className="flex flex-wrap gap-2">
              {site.compliance.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-brand-700 bg-brand-900 px-3 py-1 text-xs text-brand-100"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-brand-800 pt-6 text-sm text-brand-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>{site.domain.replace("https://", "")}</p>
        </div>
      </Container>
    </footer>
  );
}
