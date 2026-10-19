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
      <section className="border-b border-white/10 bg-[#111111] py-12 text-white sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-3 text-sm font-semibold text-white">
            Institutional Profile
          </div>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Institutional Sourcing & Merchant Export from Western India.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
            Headquartered in Rajkot, Gujarat, Export India Hub operates as a licensed merchant exporter and supply-chain procurement house governed by statutory DGFT and GST frameworks.
          </p>
        </div>
      </section>

      {/* 2. Core Proposition */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.18em] text-white/50">
              Corporate Purpose
            </div>

            <h2 className="text-3xl font-extrabold font-heading text-white tracking-tight">
              A Trade Partner Governed by Verification, Not Speculation.
            </h2>

            <div className="space-y-4 text-sm text-white/65 leading-relaxed">
              <p>
                International procurement from India has often been hindered by multiple broker layers, unpredictable batch variations, and communication latency. <strong className="text-white font-semibold">Export India Hub</strong> was established to eliminate these exact friction points.
              </p>
              <p>
                As a specialized merchant exporter, our role is to represent the buyer directly on the ground across Gujarat’s premier industrial clusters. We audit manufacturing facilities, inspect raw materials, supervise container stuffing, and clear customs directly at Mundra and Kandla ports.
              </p>
              <p>
                Every commercial invoice, test certificate, and bill of lading is signed with institutional accountability, ensuring overseas importers receive goods that match their blueprints down to the millimeter.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-[#0c0c0c] p-4">
                <span className="font-heading font-bold text-2xl text-white block font-mono">100%</span>
                <span className="text-xs text-white/50 font-medium">Traceable Factory Origins</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#0c0c0c] p-4">
                <span className="font-heading font-bold text-2xl text-white block font-mono">3-Stage</span>
                <span className="text-xs text-white/50 font-medium">Quality Inspection Gate</span>
              </div>
            </div>
          </div>

          {/* Right Column: Organization Profile Docket */}
          <div className="rounded-2xl border border-white/10 bg-[#111111] p-7 sm:p-9 shadow-lg space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <Logo size="md" variant="icon" />
                <div>
                  <h3 className="font-heading font-bold text-base text-white">
                    Export India Hub
                  </h3>
                  <p className="text-xs font-mono text-white/50">
                    DGFT IEC: EFQPS5167K
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                VERIFIED
              </span>
            </div>

            <div className="space-y-3 text-xs text-white/65 leading-relaxed">
              <div className="flex items-start justify-between py-2 border-b border-white/10">
                <span className="text-white/40">Legal Entity:</span>
                <strong className="text-white">Registered Indian Merchant Exporter</strong>
              </div>
              <div className="flex items-start justify-between py-2 border-b border-white/10">
                <span className="text-white/40">Executive Proprietor:</span>
                <strong className="text-white">{COMPANY.proprietor}</strong>
              </div>
              <div className="flex items-start justify-between py-2 border-b border-white/10">
                <span className="text-white/40">State Jurisdiction:</span>
                <span className="text-white">State of Gujarat (State Code 24)</span>
              </div>
              <div className="flex items-start justify-between py-2 border-b border-white/10">
                <span className="text-white/40">Commercial Ports:</span>
                <span className="text-white font-mono">Mundra Port (230km) · Kandla Port (210km)</span>
              </div>
              <div className="flex items-start justify-between py-2">
                <span className="text-white/40">Banking Standards:</span>
                <span className="text-white">UCP 600 Irrevocable L/C at Sight & T/T Wire</span>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10">
              <Link
                to="/contact"
                className="sap-btn w-full"
              >
                Inquire with Executive Desk <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Gujarat Sourcing Advantage */}
      <section className="bg-[#0c0c0c] border-y border-white/10 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.18em] text-white/50">
              Strategic Geography
            </div>
            <h2 className="mt-2 text-3xl font-extrabold font-heading text-white tracking-tight">
              Why Rajkot & Gujarat?
            </h2>
            <p className="mt-3 text-white/65 text-sm leading-relaxed">
              Gujarat accounts for nearly 30% of India's total merchandise export volume. Operating from Rajkot places Export India Hub right in the epicenter of the country's most dense specialized manufacturing clusters:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-[#111111] p-6 space-y-2">
              <span className="font-mono text-xs font-semibold text-white/40">01</span>
              <h3 className="font-heading font-bold text-base text-white">
                Rajkot Engineering & Casting Cluster
              </h3>
              <p className="text-xs text-white/65 leading-relaxed">
                Global epicenter for precision casting, diesel engine spares, submersible pump systems, CNC turned components, and heavy-duty drop forging.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#111111] p-6 space-y-2">
              <span className="font-mono text-xs font-semibold text-white/40">02</span>
              <h3 className="font-heading font-bold text-base text-white">
                Jamnagar Brass & Morbi Ceramics
              </h3>
              <p className="text-xs text-white/65 leading-relaxed">
                Jamnagar (85 km from Rajkot) manufactures over 70% of India’s brass components. Morbi (65 km) is the world's 2nd largest ceramic tile and sanitaryware hub.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#111111] p-6 space-y-2">
              <span className="font-mono text-xs font-semibold text-white/40">03</span>
              <h3 className="font-heading font-bold text-base text-white">
                Direct Arterial Sea Freight Highway
              </h3>
              <p className="text-xs text-white/65 leading-relaxed">
                Direct multi-lane highway connectivity to Mundra and Kandla ports guarantees swift container movement without the delays common in inland freight hubs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Corporate CTA */}
      <section className="border-t border-white/10 bg-[#0c0c0c] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-white">
            Initiate a verified commercial sourcing inquiry.
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-white/60">
            Our trade managers and proprietor desk welcome technical drawings, sample extraction requests, and trial container proposals.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to="/contact"
              className="sap-btn"
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
