import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  BadgeCheck,
  ArrowRight,
  PackageSearch,
  Microscope,
  FileText,
  Ship,
  Anchor,
  Handshake,
  ClipboardCheck,
  Factory,
  Scale,
  Copy,
  Check,
  ExternalLink,
  ChevronRight,
  CheckCircle2
} from "lucide-react";
import {
  COMPANY,
  CREDENTIALS,
  STATS,
  SERVICES,
  WHY,
  TRADE_STEPS,
  TICKER_ITEMS,
  PORTS,
  COMMODITIES
} from "../lib/site";
import { InquiryForm } from "../components/InquiryForm";

export const Home: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-0">
      {/* 1. Executive Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800">
        {/* Subtle container vessel silhouette overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?crop=entropy&cs=srgb&fm=jpg&q=80&w=2000')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900/90" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:grid-cols-[1.3fr_1fr] items-center">
          {/* Left Column: Proposition */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-[0.18em]">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              <span>Merchant Exporter</span>
              <span aria-hidden="true">·</span>
              <span>Rajkot, Gujarat</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold font-heading tracking-tight text-white leading-[1.12]">
              Connecting India to Global Markets with Uncompromising Trade Integrity.
            </h1>

            <p className="max-w-xl text-base text-slate-300 leading-relaxed">
              Your institutional merchant export and procurement house in Western India. Direct access to Gujarat’s premier manufacturing clusters, rigorous 3-stage quality inspection, clean customs documentation, and container freight through Mundra and Kandla ports.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#inquiry"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white hover:bg-slate-100 text-slate-950 px-6 font-semibold text-xs tracking-wider uppercase transition-colors shadow-xs"
              >
                Request Sourcing Proposal
                <ArrowRight className="size-3.5" />
              </a>

              <Link
                to="/services"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 px-6 font-medium text-xs tracking-wider uppercase transition-colors"
              >
                Review Capabilities
              </Link>
            </div>

            {/* Port Logistics Ticker */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-800/80 pt-3 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <Anchor className="size-3.5 shrink-0 text-slate-400" />
                <span>Mundra: <strong className="font-normal text-white">230 km</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Anchor className="size-3.5 shrink-0 text-slate-400" />
                <span>Kandla: <strong className="font-normal text-white">210 km</strong></span>
              </div>
              <span className="text-slate-500">Direct multi-lane freight highway</span>
            </div>
          </div>

          {/* Right Column: Institutional Entity Card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 sm:p-7 shadow-xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="size-5 text-emerald-400" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
                  Statutory Entity Verification
                </h3>
              </div>
              <span className="font-mono text-[11px] text-emerald-400 font-semibold bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded">
                ACTIVE & COMPLIANT
              </span>
            </div>

            <div className="space-y-3">
              {CREDENTIALS.map((cred) => (
                <div
                  key={cred.id}
                  className="rounded-lg border border-slate-800 bg-slate-950/60 p-3.5 space-y-1 transition-colors hover:border-slate-700"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">{cred.short}</span>
                    <button
                      onClick={() => handleCopy(cred.id, cred.code)}
                      type="button"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {copiedId === cred.id ? (
                        <>
                          <Check className="size-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="size-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="font-mono text-sm font-bold text-white tracking-wide break-all">
                    {cred.code}
                  </p>

                  <p className="text-[11px] text-slate-400 leading-snug">
                    {cred.authority}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-800/80 pt-3 text-[11px] text-slate-400 space-y-1 font-mono">
              <p>Headquarters: <span className="text-slate-300">Kuvadva Road, Rajkot 360003, Gujarat</span></p>
              <p>Proprietor: <span className="text-white font-medium">{COMPANY.proprietor}</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Statistical Proof Strip */}
      <section aria-label="Trade credentials" className="border-b border-slate-800 bg-slate-900 text-white">
        <ul className="mx-auto grid max-w-7xl grid-cols-1 gap-px bg-slate-800 sm:grid-cols-2 xl:grid-cols-4">
          {STATS.map((stat) => {
            const longValue = stat.value.length > 8;
            return (
              <li
                key={stat.label}
                className="flex min-w-0 items-center gap-4 bg-slate-900 px-5 py-5 sm:px-6 xl:block"
              >
                <p
                  className={`shrink-0 font-heading font-extrabold leading-none tracking-tight text-white ${
                    longValue ? "text-xl sm:text-2xl" : "text-3xl"
                  }`}
                >
                  {stat.value}
                </p>
                <div className="min-w-0 xl:mt-3">
                  <p className="text-sm font-semibold leading-snug text-slate-50">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-sm leading-snug text-slate-400">
                    {stat.sub}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        <ul className="flex flex-col gap-1.5 border-t border-slate-800 bg-slate-950/80 px-5 py-3 font-mono text-[11px] leading-relaxed tracking-wide text-slate-400 md:hidden">
          {TICKER_ITEMS.map((item) => (
            <li key={item} className="min-w-0">
              {item}
            </li>
          ))}
        </ul>
        <div className="hidden overflow-hidden border-t border-slate-800 bg-slate-950/80 py-2.5 md:block" aria-hidden="true">
          <div className="animate-marquee flex-nowrap gap-8 font-mono text-[11px] tracking-wider text-slate-400">
            {TICKER_ITEMS.concat(TICKER_ITEMS).map((item, idx) => (
              <span key={idx} className="flex shrink-0 items-center gap-8 whitespace-nowrap">
                <span>{item}</span>
                <span className="text-slate-600">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Trade Capabilities */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.18em] text-slate-500">
            Institutional Capabilities
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Single-source accountability across the export continuum.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            We operate as your dedicated on-the-ground procurement arm in India. Every contract combines audited factory sourcing, 3-stage technical inspection, statutory export clearance, and ocean container logistics under one institutional contract.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((srv, index) => {
            const icons: Record<string, React.ReactNode> = {
              PackageSearch: <PackageSearch className="size-5 text-slate-800" />,
              ShieldCheck: <Microscope className="size-5 text-slate-800" />,
              FileText: <FileText className="size-5 text-slate-800" />,
              Ship: <Ship className="size-5 text-slate-800" />
            };

            return (
              <div
                key={srv.id}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-slate-400 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <span className="font-mono text-xs text-slate-400 font-semibold">0{index + 1}</span>
                    <div className="size-9 rounded-lg bg-slate-100 flex items-center justify-center">
                      {icons[srv.icon] || <ShieldCheck className="size-5" />}
                    </div>
                  </div>

                  <h3 className="mt-5 text-base font-bold font-heading text-slate-900">
                    {srv.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-blue-700 transition-colors"
                  >
                    View Scope & Deliverables
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Gujarat Sourcing Hubs & Product Scope */}
      <section className="bg-slate-50 border-y border-slate-200 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.18em] text-slate-500">
                Manufacturing Clusters
              </div>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
                Direct procurement from Western India’s specialized industrial belts.
              </h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-900 hover:text-blue-700 whitespace-nowrap"
            >
              Inquire About Custom Spec <ChevronRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {COMMODITIES.map((c, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs transition-colors hover:border-slate-300"
              >
                <div className="h-44 overflow-hidden relative bg-slate-900">
                  <img
                    src={c.image}
                    alt={c.category}
                    className="h-full w-full object-cover opacity-90 transition-transform duration-300 hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 font-mono text-[11px] font-medium text-slate-200 bg-slate-900/90 px-2 py-0.5 rounded">
                    {c.cluster}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-sm font-bold font-heading text-slate-900">
                    {c.category}
                  </h3>

                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {c.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-slate-400 font-mono">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#inquiry"
                    className="mt-4 block text-center rounded-lg border border-slate-200 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors"
                  >
                    Request Sourcing Proposal
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Deepwater Port Infrastructure */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Port Connectivity Matrix */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950 text-white p-7 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Anchor className="size-4.5 text-slate-400" />
                <h3 className="text-xs font-bold font-heading uppercase tracking-wider text-white">
                  Western Seaboard Export Corridors
                </h3>
              </div>
              <span className="font-mono text-xs text-slate-400">
                Direct Highway Links
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Export India Hub leverages dedicated multi-lane expressway arteries connecting Rajkot to the two largest container cargo ports on the Arabian Sea:
            </p>

            <div className="space-y-3">
              {PORTS.map((port) => (
                <div
                  key={port.code}
                  className="rounded-lg border border-slate-800 bg-slate-900/80 p-4 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-sm text-white">
                      {port.name}
                    </span>
                    <span className="font-mono text-xs text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                      {port.code}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-400">
                    <div>
                      <span className="text-slate-500 block text-[10px]">Highway Distance:</span>
                      <span className="text-slate-200">{port.distance}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">Road Transit:</span>
                      <span className="text-slate-200">{port.transitTime}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 border-t border-slate-800 pt-2 font-sans">
                    {port.advantage}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Institutional Governance Points */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.18em] text-slate-500">
              Institutional Governance
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
              Trade built on verification, not promises.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Global B2B procurement demands transparent contract terms, clear landed pricing, and zero tolerance for specification deviation:
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              {WHY.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-white p-5 space-y-2 hover:border-slate-300 transition-colors"
                >
                  <h3 className="text-sm font-bold font-heading text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Systematic 4-Stage Export Methodology */}
      <section className="bg-slate-900 text-white py-20 border-y border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-slate-400">
                Operating Methodology
              </div>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold font-heading tracking-tight text-white">
                Four disciplined steps to a clean shipment.
              </h2>
            </div>
            <Link
              to="/trade-process"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white"
            >
              See complete 8-phase roadmap <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {TRADE_STEPS.map((s) => (
              <div
                key={s.step}
                className="rounded-xl border border-slate-800 bg-slate-950/60 p-6 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="font-mono text-xl font-bold text-white">
                      {s.step}
                    </span>
                    <span className="font-mono text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                      {s.duration}
                    </span>
                  </div>

                  <h3 className="mt-4 text-sm font-bold font-heading text-white leading-snug">
                    {s.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="border-t border-slate-800 pt-3 text-[11px] font-mono text-slate-400">
                  ✓ {s.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Corporate Sourcing Proposal Desk (#inquiry) */}
      <section id="inquiry" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.18em] text-slate-500">
              Commercial Proposal
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
              Submit your commodity specifications.
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed">
              Share required dimensions, grade standard, volumetric batch size, and target discharge port. Our export desk delivers a comprehensive feasibility analysis and landed price calculation within 24 business hours.
            </p>

            <div className="space-y-3 pt-2">
              <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-1">
                <span className="text-xs font-bold text-slate-900 block">Indicative Cost Breakdown:</span>
                <p className="text-xs text-slate-600">
                  Itemized pricing under agreed Incoterms 2020 (FOB Mundra or CIF Destination).
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-1">
                <span className="text-xs font-bold text-slate-900 block">Factory Audit Protocol:</span>
                <p className="text-xs text-slate-600">
                  Pre-production validation and metallurgical testing before order placement.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-1">
                <span className="text-xs font-bold text-slate-900 block">Payment Safeguards:</span>
                <p className="text-xs text-slate-600">
                  Structured via Irrevocable Letter of Credit (L/C at Sight) through prime international banks.
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-slate-100 p-4 text-xs text-slate-700 space-y-1">
              <span className="font-semibold text-slate-900">Direct Export Desk Contact:</span>
              <p>Telephone: <a href={`tel:${COMPANY.phone}`} className="font-mono font-bold text-slate-900 hover:underline">{COMPANY.phone}</a></p>
              <p>Corporate Email: <a href={`mailto:${COMPANY.email}`} className="font-mono font-bold text-slate-900 hover:underline">{COMPANY.email}</a></p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-lg">
            <h3 className="text-base font-bold font-heading text-slate-900 border-b border-slate-100 pb-3 mb-5">
              Request Commercial Proposal
            </h3>
            <InquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
};
