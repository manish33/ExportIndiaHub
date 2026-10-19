import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  PackageSearch,
  ShieldCheck,
  FileText,
  Ship,
  CheckCircle2,
  ArrowRight,
  Check
} from "lucide-react";
import { SERVICES, INCOTERMS } from "../lib/site";

export const Services: React.FC = () => {
  const [selectedIncoterm, setSelectedIncoterm] = useState("FOB");

  const incotermComparison = [
    { feature: "Factory Packing & Export Palletizing", exw: true, fob: true, cfr: true, cif: true },
    { feature: "Inland Transport to Mundra/Kandla Port", exw: false, fob: true, cfr: true, cif: true },
    { feature: "Indian Port Handling & Terminal Charges (THC)", exw: false, fob: true, cfr: true, cif: true },
    { feature: "Export Customs Clearance (DGFT & Shipping Bill)", exw: false, fob: true, cfr: true, cif: true },
    { feature: "Clean On-Board Ocean Freight to Destination Port", exw: false, fob: false, cfr: true, cif: true },
    { feature: "Marine Transit All-Risk Cargo Insurance", exw: false, fob: false, cfr: false, cif: true },
    { feature: "Destination Customs Clearance & Local Duties", exw: false, fob: false, cfr: false, cif: false }
  ];

  return (
    <div className="space-y-0">
      {/* 1. Header Banner */}
      <section className="border-b border-white/10 bg-[#111111] py-12 text-white sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-3 text-sm font-semibold text-white">
            Core Capabilities
          </div>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Comprehensive Export Execution from Factory Floor to Discharge Port.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
            Eliminate cross-border procurement vulnerabilities. We unify contract-manufacturing sourcing, on-site technical QA, customs clearance, and container shipping under one transparent service agreement.
          </p>
        </div>
      </section>

      {/* 2. Detailed Service Deep Dives */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16">
        {SERVICES.map((srv, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={srv.id}
              id={srv.id}
              className={`grid gap-10 lg:grid-cols-2 items-center rounded-2xl border border-white/10 bg-[#111111] p-7 sm:p-10 shadow-xs ${
                isEven ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div className={`space-y-5 ${isEven ? "lg:col-start-2" : ""}`}>
                <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.18em] text-white/50">
                  Pillar 0{index + 1}
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
                  {srv.title}
                </h2>

                <p className="text-sm text-white/65 leading-relaxed">
                  {srv.fullDesc}
                </p>

                {/* Scope Coverage */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                    Operational Scope:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-white/75">
                    {srv.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-white/40 font-mono mt-0.5">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables Box */}
                <div className="rounded-lg border border-white/10 bg-[#0c0c0c] p-4 text-xs text-white/90">
                  <span className="font-bold uppercase tracking-wider text-white block mb-1.5 font-mono text-[11px]">
                    Buyer Document Deliverables:
                  </span>
                  <ul className="space-y-1 list-disc list-inside text-white/65">
                    {srv.deliverables.map((deliv, idx) => (
                      <li key={idx}>{deliv}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Protocol Summary Card */}
              <div className={`rounded-xl border border-white/10 bg-[#0c0c0c] p-6 sm:p-8 space-y-4 ${isEven ? "lg:col-start-1" : ""}`}>
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-xs text-white/90 font-bold uppercase tracking-wider">
                    Protocol Standards
                  </span>
                  <span className="text-xs font-mono text-white/50">AQL & ISO Compliant</span>
                </div>

                <div className="space-y-2.5 pt-2 text-xs text-white/75">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#111111] border border-white/10">
                    <span className="text-white/50">Inspection Level</span>
                    <strong className="text-white">Dedicated On-Site Engineer</strong>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#111111] border border-white/10">
                    <span className="text-white/50">Reporting Format</span>
                    <strong className="text-white">Pre-Shipment Digital Dossier</strong>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#111111] border border-white/10">
                    <span className="text-white/50">Third-Party Verification</span>
                    <strong className="text-white">SGS / TUV / Intertek on Request</strong>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#111111] border border-white/10">
                    <span className="text-white/50">Sea Export Gateways</span>
                    <strong className="text-white font-mono">Mundra & Kandla Ports</strong>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="sap-btn w-full"
                  >
                    Request Scope Proposal <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. Incoterms 2020 Matrix */}
      <section className="bg-[#0c0c0c] border-y border-white/10 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.18em] text-white/50">
              Contract Terms
            </div>
            <h2 className="mt-2 text-3xl font-extrabold font-heading text-white tracking-tight">
              Incoterms 2020 Operational Matrix
            </h2>
            <p className="mt-2 text-white/65 text-sm leading-relaxed">
              Understand exact cost and risk boundaries before contracting. Export India Hub supports standard international commercial delivery terms:
            </p>
          </div>

          {/* Incoterm Tab Selectors */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {INCOTERMS.map((term) => (
              <button
                key={term.code}
                onClick={() => setSelectedIncoterm(term.code)}
                type="button"
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedIncoterm === term.code
                    ? "border-white bg-white/10 shadow-sm ring-1 ring-white"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xl font-bold text-white">
                    {term.code}
                  </span>
                  {selectedIncoterm === term.code && (
                    <span className="size-2 rounded-full bg-[#111111]" />
                  )}
                </div>
                <h4 className="mt-2 font-semibold text-xs text-white line-clamp-1">
                  {term.name}
                </h4>
                <p className="mt-1 text-[11px] text-white/50 line-clamp-2">
                  {term.description}
                </p>
              </button>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#111111] shadow-xs">
            <table className="w-full min-w-[720px] text-left text-xs sm:text-sm">
              <thead className="border-b border-white/10 bg-white/5 font-mono text-xs uppercase tracking-wider text-white/75">
                <tr>
                  <th className="py-4 px-6">Operational Stage</th>
                  <th className={`py-4 px-4 text-center ${selectedIncoterm === "EXW" ? "bg-slate-200/80 font-bold" : ""}`}>
                    EXW
                  </th>
                  <th className={`py-4 px-4 text-center ${selectedIncoterm === "FOB" ? "bg-slate-200/80 font-bold" : ""}`}>
                    FOB (Mundra)
                  </th>
                  <th className={`py-4 px-4 text-center ${selectedIncoterm === "CFR" ? "bg-slate-200/80 font-bold" : ""}`}>
                    CFR
                  </th>
                  <th className={`py-4 px-4 text-center ${selectedIncoterm === "CIF" ? "bg-slate-200/80 font-bold" : ""}`}>
                    CIF (Destination)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-white/75">
                {incotermComparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#0c0c0c] transition-colors">
                    <td className="py-3.5 px-6 font-medium text-white">
                      {row.feature}
                    </td>
                    <td className={`py-3.5 px-4 text-center ${selectedIncoterm === "EXW" ? "bg-[#0c0c0c]" : ""}`}>
                      {row.exw ? <strong className="text-white">Seller</strong> : <span className="text-white/40">Buyer</span>}
                    </td>
                    <td className={`py-3.5 px-4 text-center ${selectedIncoterm === "FOB" ? "bg-[#0c0c0c]" : ""}`}>
                      {row.fob ? <strong className="text-white">Seller</strong> : <span className="text-white/40">Buyer</span>}
                    </td>
                    <td className={`py-3.5 px-4 text-center ${selectedIncoterm === "CFR" ? "bg-[#0c0c0c]" : ""}`}>
                      {row.cfr ? <strong className="text-white">Seller</strong> : <span className="text-white/40">Buyer</span>}
                    </td>
                    <td className={`py-3.5 px-4 text-center ${selectedIncoterm === "CIF" ? "bg-[#0c0c0c]" : ""}`}>
                      {row.cif ? <strong className="text-white">Seller</strong> : <span className="text-white/40">Buyer</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Action Banner */}
      <section className="border-t border-white/10 bg-[#0c0c0c] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-white">
            Request landed cost calculations for your destination port.
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-white/60">
            Specify commodity dimensions, volume, and discharge port to receive a formal commercial proposal within 24 hours.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="sap-btn"
            >
              Submit Trade RFQ
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
