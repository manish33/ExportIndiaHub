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
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-[0.18em] mb-4">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            Core Capabilities
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight max-w-3xl leading-tight">
            Comprehensive Export Execution from Factory Floor to Discharge Port.
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
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
              className={`grid gap-10 lg:grid-cols-2 items-center rounded-2xl border border-slate-200 bg-white p-7 sm:p-10 shadow-xs ${
                isEven ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div className={`space-y-5 ${isEven ? "lg:col-start-2" : ""}`}>
                <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Pillar 0{index + 1}
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
                  {srv.title}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {srv.fullDesc}
                </p>

                {/* Scope Coverage */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
                    Operational Scope:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {srv.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-slate-400 font-mono mt-0.5">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables Box */}
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs text-slate-800">
                  <span className="font-bold uppercase tracking-wider text-slate-900 block mb-1.5 font-mono text-[11px]">
                    Buyer Document Deliverables:
                  </span>
                  <ul className="space-y-1 list-disc list-inside text-slate-600">
                    {srv.deliverables.map((deliv, idx) => (
                      <li key={idx}>{deliv}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Protocol Summary Card */}
              <div className={`rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-4 ${isEven ? "lg:col-start-1" : ""}`}>
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <span className="font-mono text-xs text-slate-800 font-bold uppercase tracking-wider">
                    Protocol Standards
                  </span>
                  <span className="text-xs font-mono text-slate-500">AQL & ISO Compliant</span>
                </div>

                <div className="space-y-2.5 pt-2 text-xs text-slate-700">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200">
                    <span className="text-slate-500">Inspection Level</span>
                    <strong className="text-slate-900">Dedicated On-Site Engineer</strong>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200">
                    <span className="text-slate-500">Reporting Format</span>
                    <strong className="text-slate-900">Pre-Shipment Digital Dossier</strong>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200">
                    <span className="text-slate-500">Third-Party Verification</span>
                    <strong className="text-slate-900">SGS / TUV / Intertek on Request</strong>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200">
                    <span className="text-slate-500">Sea Export Gateways</span>
                    <strong className="text-slate-900 font-mono">Mundra & Kandla Ports</strong>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors"
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
      <section className="bg-slate-50 border-y border-slate-200 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.18em] text-slate-500">
              Contract Terms
            </div>
            <h2 className="mt-2 text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
              Incoterms 2020 Operational Matrix
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
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
                    ? "border-slate-900 bg-white shadow-md ring-1 ring-slate-900"
                    : "border-slate-200 bg-white/70 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xl font-bold text-slate-900">
                    {term.code}
                  </span>
                  {selectedIncoterm === term.code && (
                    <span className="size-2 rounded-full bg-slate-900" />
                  )}
                </div>
                <h4 className="mt-2 font-semibold text-xs text-slate-900 line-clamp-1">
                  {term.name}
                </h4>
                <p className="mt-1 text-[11px] text-slate-500 line-clamp-2">
                  {term.description}
                </p>
              </button>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="border-b border-slate-200 bg-slate-100 font-mono text-xs uppercase tracking-wider text-slate-700">
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
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {incotermComparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-6 font-medium text-slate-900">
                      {row.feature}
                    </td>
                    <td className={`py-3.5 px-4 text-center ${selectedIncoterm === "EXW" ? "bg-slate-50" : ""}`}>
                      {row.exw ? <strong className="text-slate-900">Seller</strong> : <span className="text-slate-400">Buyer</span>}
                    </td>
                    <td className={`py-3.5 px-4 text-center ${selectedIncoterm === "FOB" ? "bg-slate-50" : ""}`}>
                      {row.fob ? <strong className="text-slate-900">Seller</strong> : <span className="text-slate-400">Buyer</span>}
                    </td>
                    <td className={`py-3.5 px-4 text-center ${selectedIncoterm === "CFR" ? "bg-slate-50" : ""}`}>
                      {row.cfr ? <strong className="text-slate-900">Seller</strong> : <span className="text-slate-400">Buyer</span>}
                    </td>
                    <td className={`py-3.5 px-4 text-center ${selectedIncoterm === "CIF" ? "bg-slate-50" : ""}`}>
                      {row.cif ? <strong className="text-slate-900">Seller</strong> : <span className="text-slate-400">Buyer</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Action Banner */}
      <section className="bg-slate-950 text-white py-16 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold font-heading text-white">
            Request landed cost calculations for your destination port.
          </h2>
          <p className="max-w-xl mx-auto text-slate-300 text-sm leading-relaxed">
            Specify commodity dimensions, volume, and discharge port to receive a formal commercial proposal within 24 hours.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white hover:bg-slate-100 text-slate-950 font-semibold px-6 text-xs uppercase tracking-wider transition-colors"
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
