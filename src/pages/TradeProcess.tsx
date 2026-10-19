import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  Check,
  ArrowRight
} from "lucide-react";

export const TradeProcess: React.FC = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      phase: "01",
      title: "Inquiry, Technical Parameter Specification & Feasibility",
      leadTime: "24 – 48 Hours",
      summary: "Detailed parameter capture, CAD blueprint review, and landed price feasibility.",
      documents: ["Buyer Technical Request / RFQ", "Preliminary Feasibility Note", "Indicative FOB / CIF Price Range"],
      details: "We study your CAD blueprints, chemical/physical test requirements, packaging preferences, and destination port customs regulations. Our desk verifies factory availability across Gujarat and prepares an indicative quote with lead times."
    },
    {
      phase: "02",
      title: "Sample Extraction & Laboratory Validation",
      leadTime: "3 – 7 Working Days",
      summary: "Physical sample extraction, dimensional validation, and international courier dispatch.",
      documents: ["Pre-Production Sample Report", "Lab Metallurgical / Analysis Certificate", "DHL Express Airway Bill (AWB)"],
      details: "Before committing capital, production samples are extracted and tested for dimensional tolerances, purity, or coating thickness. Samples are dispatched via DHL/FedEx to your destination office for physical sign-off."
    },
    {
      phase: "03",
      title: "Proforma Invoice (PI) & Commercial Contract",
      leadTime: "1 – 2 Days",
      summary: "Binding sales contract stipulating Incoterms, batch volumes, and inspection criteria.",
      documents: ["Formal Proforma Invoice (PI)", "International Sales Contract", "Technical Specification Annexure"],
      details: "Mutually agreed contract governing pricing, currency (USD/EUR/GBP/AED), agreed Incoterm (FOB Mundra or CIF Destination), delivery milestones, and quality acceptance standards."
    },
    {
      phase: "04",
      title: "Payment Instrument Activation & Financial Security",
      leadTime: "2 – 3 Bank Days",
      summary: "Establishment of Irrevocable Letter of Credit (L/C) or T/T Wire schedule.",
      documents: ["Irrevocable L/C at Sight (UCP 600)", "Bank Swift MT700 Confirmation", "T/T Advance Deposit Receipt"],
      details: "We prioritize trade security. Buyers can open an Irrevocable Letter of Credit at Sight through prime global banks or execute agreed milestone T/T wire transfers (e.g. 30% advance, 70% against BL copy)."
    },
    {
      phase: "05",
      title: "Manufacturing Oversight & In-Line Quality Control",
      leadTime: "As per Production Schedule",
      summary: "Continuous monitoring of production line runs and component tolerances.",
      documents: ["Weekly Production Milestone Log", "In-Line Random Inspection Sheet", "Raw Material Heat / Batch Certificate"],
      details: "Our technical inspectors conduct unannounced factory audits during machining, casting, or processing to ensure adherence to agreed raw material chemistry and dimensional thresholds."
    },
    {
      phase: "06",
      title: "Pre-Shipment Inspection (PSI) & Container Stuffing",
      leadTime: "1 – 2 Days prior to dispatch",
      summary: "100% finished goods audit, seaworthy packing check, and container seal lock.",
      documents: ["Pre-Shipment Inspection (PSI) Dossier", "High-res Container Loading Photo Log", "Tamper-Proof Bolt Seal Record"],
      details: "Final finished goods inspection according to AQL standards. Palletization, desiccants, barcode verification, and secure container stuffing are documented with timestamped photos and video shared directly with the buyer."
    },
    {
      phase: "07",
      title: "Port Customs Clearance (ICEGATE) at Mundra / Kandla",
      leadTime: "24 – 36 Hours at Port",
      summary: "Inland trailer transit to port, export customs clearance, and vessel loading.",
      documents: ["Indian Customs Shipping Bill (LEO)", "Terminal Handling Receipt", "Port Gate-In & Weight Slip"],
      details: "Containers are transported via direct highway to Mundra or Kandla port. Our customs broker submits the electronic Shipping Bill to Indian Customs ICEGATE and secures 'Let Export Order' (LEO) approval."
    },
    {
      phase: "08",
      title: "Ocean Bill of Lading & Bank Document Courier",
      leadTime: "Upon Vessel Sailing",
      summary: "Issuance of clean on-board Bill of Lading and full negotiable document dossier.",
      documents: ["Clean On-Board Ocean Bill of Lading (OBL)", "Commercial Invoice with HS Codes", "Certificate of Origin (CoO)", "Packing List & Marine Insurance"],
      details: "Once the shipping line loads the container onto the vessel, the official Bill of Lading is issued. The complete document package is forwarded to your bank under L/C or dispatched via DHL Express."
    }
  ];

  return (
    <div className="space-y-0">
      {/* 1. Header Banner */}
      <section className="border-b border-white/10 bg-[#111111] py-12 text-white sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-3 text-sm font-semibold text-white">
            Standard Operating Procedure
          </div>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            The 8-Phase Lifecycle of an Export India Hub Consignment.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
            From technical parameter audit to clean on-board ocean Bill of Lading release. Every step is documented, time-bounded, and verified.
          </p>
        </div>
      </section>

      {/* 2. Interactive Phase Inspector */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] items-start">
          {/* Phase Navigation List */}
          <div className="space-y-2.5">
            <span className="text-xs font-mono uppercase tracking-[0.18em] font-medium text-white/50 block mb-3">
              Select Phase to Inspect Deliverables:
            </span>

            {phases.map((p, idx) => {
              const isSelected = activePhase === idx;

              return (
                <button
                  key={p.phase}
                  type="button"
                  onClick={() => setActivePhase(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-4 ${
                    isSelected
                      ? "border-white bg-[#111111] shadow-md ring-1 ring-white"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <span
                    className={`size-8 rounded font-mono font-bold text-xs flex items-center justify-center shrink-0 ${
                      isSelected ? "bg-white text-black" : "bg-[#0c0c0c] text-white"
                    }`}
                  >
                    {p.phase}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-heading font-bold text-sm text-white line-clamp-1">
                        {p.title}
                      </h4>
                      <span className="font-mono text-[11px] text-white/50 font-medium shrink-0">
                        {p.leadTime}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-white/50 line-clamp-1">
                      {p.summary}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Phase Deep Dive Card */}
          <div className="sticky top-24 rounded-2xl border border-white/10 bg-[#111111] p-7 sm:p-9 shadow-lg space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-2xl font-bold text-white">
                Phase {phases[activePhase].phase}
              </span>
              <span className="font-mono text-xs font-medium text-white/75 bg-white/5 px-3 py-1 rounded">
                Lead Time: {phases[activePhase].leadTime}
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold font-heading text-white">
                {phases[activePhase].title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-white/65 leading-relaxed">
                {phases[activePhase].details}
              </p>
            </div>

            {/* Generated Documents List */}
            <div className="rounded-xl border border-white/10 bg-[#0c0c0c] p-4 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                Document Set Issued In This Phase:
              </h4>
              <ul className="space-y-1.5 text-xs text-white/75">
                {phases[activePhase].documents.map((doc, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="size-3.5 text-white shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="sap-btn w-full"
              >
                Inquire on This Operational Stage <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
