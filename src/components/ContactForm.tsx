import { site } from "@/lib/site";

export function ContactForm() {
  return (
    <form
      action={`https://formsubmit.co/${site.email}`}
      method="POST"
      className="space-y-5"
    >
      <input type="hidden" name="_subject" value="New inquiry from bssarc.com" />
      <input type="hidden" name="_next" value={`${site.domain}/contact/thank-you`} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Name</span>
          <input
            required
            name="name"
            type="text"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none ring-brand-500 transition focus:ring-2"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Phone</span>
          <input
            required
            name="phone"
            type="tel"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none ring-brand-500 transition focus:ring-2"
            placeholder="+91 ..."
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
        <input
          required
          name="email"
          type="email"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none ring-brand-500 transition focus:ring-2"
          placeholder="you@company.com"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">Service of interest</span>
        <select
          name="service"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none ring-brand-500 transition focus:ring-2"
        >
          <option>Security Services</option>
          <option>Facility Management</option>
          <option>Technical Services</option>
          <option>Food & Beverage Services</option>
          <option>Real Estate Services</option>
          <option>Multiple / Not sure</option>
        </select>
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none ring-brand-500 transition focus:ring-2"
          placeholder="Tell us about your requirements..."
        />
      </label>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-xl bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800 sm:w-auto"
      >
        Send Inquiry
      </button>
    </form>
  );
}
