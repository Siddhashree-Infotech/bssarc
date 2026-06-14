import Link from "next/link";

type LogoProps = {
  className?: string;
  showText?: boolean;
};

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 ${className}`}>
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-700 text-white shadow-sm"
        aria-hidden
      >
        <svg viewBox="0 0 40 40" className="h-7 w-7" fill="none">
          <path
            d="M20 4L6 10v10c0 8.5 6 14.5 14 16 8-1.5 14-7.5 14-16V10L20 4Z"
            fill="currentColor"
            opacity="0.95"
          />
          <path
            d="M14 24V16h5v8M21 24V12h5v12M28 24v-6h5v6"
            stroke="#BFDBFE"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M24 8l4 4-4 4"
            stroke="#FBBF24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {showText ? (
        <span className="leading-tight">
          <span className="block text-lg font-bold tracking-tight text-brand-900">
            B-SSARC
          </span>
          <span className="block text-xs font-medium uppercase tracking-wider text-brand-600">
            Ventures
          </span>
        </span>
      ) : null}
    </Link>
  );
}
