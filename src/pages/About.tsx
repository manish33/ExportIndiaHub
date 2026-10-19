import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Building2,
  Anchor,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Mail,
  Phone
} from "lucide-react";
import { COMPANY, CREDENTIALS, PORTS } from "../lib/site";
import { Logo } from "../components/Logo";

export const About: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-[0.18em] mb-4">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            Institutional Profile
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight max-w-3xl leading-tight">
            Institutional Sourcing & Merchant Export from Western India.
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
            Headquartered in Rajkot, Gujarat, Export India Hub operates as a licensed merchant exporter and supply-chain procurement house governed by statutory DGFT and GST frameworks.
          </p>
        </div>
      </section>

      {/* 2. Core Proposition */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.18em] text-slate-500">
              Corporate Purpose
            </div>

            <h2 className="text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
              A Trade Partner Governed by Verification, Not Speculation.
            </h2>

            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                International procurement from India has often been hindered by multiple broker layers, unpredictable batch variations, and communication latency. <strong className="text-slate-900 font-semibold">Export India Hub</strong> was established to eliminate these exact friction points.
              </p>
              <p>
                As a specialized merchant exporter, our role is to represent the buyer directly on the ground across Gujarat’s premier industrial clusters. We audit manufacturing facilities, inspect raw materials, supervise container stuffing, and clear customs directly at Mundra and Kandla ports.
              </p>
              <p>
                Every commercial invoice, test certificate, and bill of lading is signed with institutional accountability, ensuring overseas importers receive goods that match their blueprints down to the millimeter.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <span className="font-heading font-bold text-2xl text-slate-900 block font-mono">100%</span>
                <span className="text-xs text-slate-500 font-medium">Traceable Factory Origins</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <span className="font-heading font-bold text-2xl text-slate-900 block font-mono">3-Stage</span>
                <span className="text-xs text-slate-500 font-medium">Quality Inspection Gate</span>
              </div>
            </div>
          </div>

          {/* Right Column: Organization Profile Docket */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-9 shadow-lg space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <Logo size="md" variant="icon" />
                <div>
                  <h3 className="font-heading font-bold text-base text-slate-900">
                    Export India Hub
                  </h3>
                  <p className="text-xs font-mono text-slate-500">
                    DGFT IEC: EFQPS5167K
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                VERIFIED
              </span>
            </div>

            <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
              <div className="flex items-start justify-between py-2 border-b border-slate-100">
                <span className="text-slate-400">Legal Entity:</span>
                <strong className="text-slate-900">Registered Indian Merchant Exporter</strong>
              </div>
              <div className="flex items-start justify-between py-2 border-b border-slate-100">
                <span className="text-slate-400">Executive Proprietor:</span>
                <strong className="text-slate-900">{COMPANY.proprietor}</strong>
              </div>
              <div className="flex items-start justify-between py-2 border-b border-slate-100">
                <span className="text-slate-400">State Jurisdiction:</span>
                <span className="text-slate-900">State of Gujarat (State Code 24)</span>
              </div>
              <div className="flex items-start justify-between py-2 border-b border-slate-100">
                <span className="text-slate-400">Commercial Ports:</span>
                <span className="text-slate-900 font-mono">Mundra Port (230km) · Kandla Port (210km)</span>
              </div>
              <div className="flex items-start justify-between py-2">
                <span className="text-slate-400">Banking Standards:</span>
                <span className="text-slate-900">UCP 600 Irrevocable L/C at Sight & T/T Wire</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white py-2.5 text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                Inquire with Executive Desk <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Gujarat Sourcing Advantage */}
      <section className="bg-slate-50 border-y border-slate-200 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.18em] text-slate-500">
              Strategic Geography
            </div>
            <h2 className="mt-2 text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
              Why Rajkot & Gujarat?
            </h2>
            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
              Gujarat accounts for nearly 30% of India's total merchandise export volume. Operating from Rajkot places Export India Hub right in the epicenter of the country's most dense specialized manufacturing clusters:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-2">
              <span className="font-mono text-xs font-semibold text-slate-400">01</span>
              <h3 className="font-heading font-bold text-base text-slate-900">
                Rajkot Engineering & Casting Cluster
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Global epicenter for precision casting, diesel engine spares, submersible pump systems, CNC turned components, and heavy-duty drop forging.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-2">
              <span className="font-mono text-xs font-semibold text-slate-400">02</span>
              <h3 className="font-heading font-bold text-base text-slate-900">
                Jamnagar Brass & Morbi Ceramics
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Jamnagar (85 km from Rajkot) manufactures over 70% of India’s brass components. Morbi (65 km) is the world's 2nd largest ceramic tile and sanitaryware hub.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-2">
              <span className="font-mono text-xs font-semibold text-slate-400">03</span>
              <h3 className="font-heading font-bold text-base text-slate-900">
                Direct Arterial Sea Freight Highway
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct multi-lane highway connectivity to Mundra and Kandla ports guarantees swift container movement without the delays common in inland freight hubs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Corporate CTA */}
      <section className="bg-slate-950 text-white py-16 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold font-heading text-white">
            Initiate a verified commercial sourcing inquiry.
          </h2>
          <p className="max-w-xl mx-auto text-slate-300 text-sm leading-relaxed">
            Our trade managers and proprietor desk welcome technical drawings, sample extraction requests, and trial container proposals.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white hover:bg-slate-100 text-slate-950 px-6 font-semibold text-xs tracking-wider uppercase transition-colors"
            >
              Request Commercial Proposal
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
