import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  MessageSquareText,
  Clock,
  ExternalLink
} from "lucide-react";
import { COMPANY } from "../lib/site";
import { InquiryForm } from "../components/InquiryForm";

export const Contact: React.FC = () => {
  const nearbyClusters = [
    { name: "Morbi Ceramic & Sanitaryware Cluster", dist: "65 km", time: "1 hr 15 min" },
    { name: "Jamnagar Brass & Hardware Cluster", dist: "85 km", time: "1 hr 30 min" },
    { name: "Shapar-Veraval Engineering Belt", dist: "18 km", time: "25 min" },
    { name: "Deendayal Port (Kandla)", dist: "210 km", time: "4 hrs direct highway" },
    { name: "Mundra Port (Adani Terminals)", dist: "230 km", time: "4.5 hrs direct highway" }
  ];

  return (
    <div className="space-y-0">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-[0.18em] mb-4">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            Direct Trade Desk
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight max-w-3xl leading-tight">
            Contact Export India Hub in Rajkot, Gujarat.
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
            Our trade managers and proprietor desk respond to all sourcing requests within 24 business hours with feasibility, technical feedback, and competitive pricing.
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] items-start">
          {/* Left Column: Contact Cards & Office Details */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.18em] text-slate-500">
                Headquarters
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
                Institutional Trade Desk
              </h2>
            </div>

            {/* Registered Office Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="size-9 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="size-4.5 text-slate-700" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-slate-900">
                    Registered Office
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {COMPANY.address.full}
                  </p>
                  <a
                    href={COMPANY.address.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-blue-700 transition-colors"
                  >
                    Open Location in Google Maps <ExternalLink className="size-3" />
                  </a>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-3 space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2.5">
                  <Mail className="size-4 text-slate-400 shrink-0" />
                  <a href={`mailto:${COMPANY.email}`} className="font-mono text-slate-800 hover:text-slate-950 transition-colors">
                    {COMPANY.email}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="size-4 text-slate-400 shrink-0" />
                  <a href={`tel:${COMPANY.phone}`} className="font-mono text-slate-800 hover:text-slate-950 transition-colors">
                    {COMPANY.phone}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="size-4 text-slate-400 shrink-0" />
                  <span>Mon – Sat: 9:00 AM – 7:00 PM IST (Overseas desk 24/7)</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                  <MessageSquareText className="size-4.5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-slate-900">
                    Export Desk WhatsApp Channel
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">+91 8200086858</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Overseas importers can share instant specification drawings, CAD models, and voice notes directly with our executive desk.
              </p>
              <a
                href={COMPANY.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white py-2 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Industrial Cluster Distances */}
            <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-3">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-900">
                Logistics Corridors from Rajkot Hub
              </h4>
              <ul className="space-y-2 text-xs text-slate-600 font-mono">
                {nearbyClusters.map((c, i) => (
                  <li key={i} className="flex items-center justify-between border-b border-slate-100 pb-1.5 last:border-0 last:pb-0">
                    <span className="font-sans text-slate-800">{c.name}</span>
                    <span className="text-slate-500">{c.dist}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Commercial RFQ Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-lg space-y-5">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-base font-bold font-heading text-slate-900">
                  Submit Commercial Sourcing RFQ
                </h3>
                <span className="font-mono text-xs text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded font-medium">
                  24h Response SLA
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Please provide volume specifications, target grade, and discharge port. All inquiries are treated under strict commercial confidentiality.
              </p>
            </div>

            <InquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
};
