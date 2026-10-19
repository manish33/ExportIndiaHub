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
      <section className="border-b border-white/10 bg-[#111111] py-12 text-white sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-3 text-sm font-semibold text-white">
            Direct Trade Desk
          </div>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Contact Export India Hub in Rajkot, Gujarat.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
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
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.18em] text-white/50">
                Headquarters
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Institutional Trade Desk
              </h2>
            </div>

            {/* Registered Office Card */}
            <div className="rounded-xl border border-white/10 bg-[#111111] p-6 shadow-xs space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="size-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="size-4.5 text-white/75" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-white">
                    Registered Office
                  </h3>
                  <p className="mt-1 text-xs text-white/65 leading-relaxed">
                    {COMPANY.address.full}
                  </p>
                  <a
                    href={COMPANY.address.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-white/70 transition-colors"
                  >
                    Open Location in Google Maps <ExternalLink className="size-3" />
                  </a>
                </div>
              </div>

              <div className="border-t border-white/10 pt-3 space-y-2 text-xs text-white/75">
                <div className="flex items-center gap-2.5">
                  <Mail className="size-4 text-white/40 shrink-0" />
                  <a href={`mailto:${COMPANY.email}`} className="font-mono text-white/90 hover:text-slate-950 transition-colors">
                    {COMPANY.email}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="size-4 text-white/40 shrink-0" />
                  <a href={`tel:${COMPANY.phone}`} className="font-mono text-white/90 hover:text-slate-950 transition-colors">
                    {COMPANY.phone}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="size-4 text-white/40 shrink-0" />
                  <span>Mon – Sat: 9:00 AM – 7:00 PM IST (Overseas desk 24/7)</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="rounded-xl border border-white/10 bg-[#0c0c0c] p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-lg bg-white text-black">
                  <MessageSquareText className="size-4.5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-white">
                    Export Desk WhatsApp Channel
                  </h3>
                  <p className="text-xs text-white/50 font-mono">+91 8200086858</p>
                </div>
              </div>
              <p className="text-xs text-white/65 leading-relaxed">
                Overseas importers can share instant specification drawings, CAD models, and voice notes directly with our executive desk.
              </p>
              <a
                href={COMPANY.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="sap-btn w-full"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Industrial Cluster Distances */}
            <div className="rounded-xl border border-white/10 bg-[#111111] p-5 space-y-3">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
                Logistics Corridors from Rajkot Hub
              </h4>
              <ul className="space-y-2 text-xs text-white/65 font-mono">
                {nearbyClusters.map((c, i) => (
                  <li key={i} className="flex items-center justify-between border-b border-white/10 pb-1.5 last:border-0 last:pb-0">
                    <span className="font-sans text-white/90">{c.name}</span>
                    <span className="text-white/50">{c.dist}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Commercial RFQ Form */}
          <div className="rounded-2xl border border-white/10 bg-[#111111] p-6 sm:p-8 shadow-lg space-y-5">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-base font-bold font-heading text-white">
                  Submit Commercial Sourcing RFQ
                </h3>
                <span className="font-mono text-xs text-white/75 bg-white/5 px-2.5 py-0.5 rounded font-medium">
                  24h Response SLA
                </span>
              </div>
              <p className="mt-2 text-xs text-white/50">
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
