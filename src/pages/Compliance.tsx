import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  FileCheck2,
  Lock,
  ExternalLink,
  Copy,
  Check,
  FileText,
  CreditCard,
  ArrowRight
} from "lucide-react";
import { COMPANY, CREDENTIALS } from "../lib/site";

export const Compliance: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const documentPackage = [
    {
      name: "Commercial Invoice (CI)",
      purpose: "Official commercial transaction record detailing buyer, seller, HS commodity codes, unit prices, total CIF/FOB valuation, and currency.",
      significance: "Essential for destination port customs assessment and foreign currency banking clearance."
    },
    {
      name: "Packing List (PL)",
      purpose: "Precise container breakdown with carton/crate count, net weight, gross weight, tare weight, dimensions, and volumetric CBM.",
      significance: "Mandatory for container terminal gate-in and destination cargo deconsolidation."
    },
    {
      name: "Clean On-Board Ocean Bill of Lading (OBL)",
      purpose: "Legal title document issued by the ocean shipping line confirming cargo received on board in apparent good order and condition.",
      significance: "Primary document required to take delivery at destination port and to negotiate payment under Letter of Credit."
    },
    {
      name: "Certificate of Origin (CoO)",
      purpose: "Official certification issued by authorized Indian Chambers of Commerce confirming the goods were manufactured in India.",
      significance: "Enables preferential customs duty rates and verifies country of origin compliance."
    },
    {
      name: "Certificate of Analysis (CoA) / Mill Test Report",
      purpose: "Laboratory metallurgical or physical/chemical composition report matching the agreed specification.",
      significance: "Provides irrefutable proof of quality before vessel loading."
    },
    {
      name: "Fumigation & Phytosanitary Certificate",
      purpose: "ISPM 15 compliance certification for wooden pallets and agricultural consignments treated against pests.",
      significance: "Required by destination quarantine authorities in EU, USA, Middle East, and Australia."
    }
  ];

  return (
    <div className="space-y-0">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-[0.18em] mb-4">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            Statutory Compliance & Banking
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight max-w-3xl leading-tight">
            Institutional Verification & Government Credentials.
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
            Registered with the Directorate General of Foreign Trade (DGFT), Indian Customs (ICEGATE), and the Goods & Services Tax Network (GSTN).
          </p>
        </div>
      </section>

      {/* 2. Official Government Credentials Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.18em] text-slate-500">
            Official Trade Identity
          </div>
          <h2 className="mt-2 text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
            Government of India Registration Verification
          </h2>
          <p className="mt-2 text-slate-600 text-sm leading-relaxed">
            We operate in 100% formal transparency. Buyers and banking compliance officers can independently verify our entity on the official Government of India verification portals:
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {CREDENTIALS.map((cred) => (
            <div
              key={cred.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-xs hover:border-slate-300 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="font-mono text-xs font-semibold text-slate-600 uppercase">
                    {cred.short}
                  </span>
                  <FileCheck2 className="size-4 text-slate-700" />
                </div>

                <div>
                  <h3 className="font-heading font-bold text-base text-slate-900">
                    {cred.title}
                  </h3>
                  <div className="mt-3 flex items-center justify-between rounded-lg bg-slate-900 text-white p-3 font-mono">
                    <span className="text-xs font-bold text-slate-100 break-all">
                      {cred.code}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(cred.code)}
                      className="ml-2 text-xs text-slate-400 hover:text-white shrink-0 cursor-pointer"
                    >
                      {copiedCode === cred.code ? (
                        <Check className="size-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="size-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="text-xs text-slate-600 space-y-1.5">
                  <p><strong>Issuing Authority:</strong> {cred.authority}</p>
                  <p className="leading-relaxed text-slate-500 text-[11px]">{cred.description}</p>
                </div>
              </div>

              {cred.verificationUrl && (
                <div className="pt-4 border-t border-slate-100 mt-5">
                  <a
                    href={cred.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-blue-700 transition-colors"
                  >
                    Open Verification Portal <ExternalLink className="size-3" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 3. Export Documentation Package */}
      <section className="bg-slate-50 border-y border-slate-200 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.18em] text-slate-500">
              Documentation Dossier
            </div>
            <h2 className="mt-2 text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
              International Customs Documentation Standards
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Every shipment is backed by a complete, fully reconciled documentation set prepared by our in-house trade specialists:
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {documentPackage.map((doc, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs space-y-3"
              >
                <div className="flex items-center gap-2">
                  <FileText className="size-4 text-slate-700" />
                  <h3 className="font-heading font-bold text-sm text-slate-900">
                    {doc.name}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {doc.purpose}
                </p>
                <div className="rounded bg-slate-50 p-2.5 text-[11px] text-slate-500 border border-slate-100">
                  <strong className="text-slate-800">Customs Utility:</strong> {doc.significance}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Secure Banking & Payment Terms */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.18em] text-slate-500">
              Financial Security
            </div>

            <h2 className="text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
              International Trade Finance & Payment Terms
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              We structure all commercial contracts with recognized international trade finance safeguards to ensure both importer and exporter are completely protected:
            </p>

            <div className="space-y-4 pt-2">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs space-y-1">
                <h4 className="font-heading font-bold text-sm text-slate-900 flex items-center gap-2">
                  <Lock className="size-4 text-slate-700" />
                  Irrevocable Letter of Credit (L/C at Sight)
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Governed by ICC Uniform Customs and Practice for Documentary Credits (UCP 600). Payment released strictly against compliant Bill of Lading, Certificate of Origin, and Inspection Certificate.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs space-y-1">
                <h4 className="font-heading font-bold text-sm text-slate-900 flex items-center gap-2">
                  <CreditCard className="size-4 text-slate-700" />
                  Telegraphic Transfer (T/T Wire)
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Standard trade milestone structure: e.g. 30% advance deposit to commence manufacturing, and 70% balance payable upon dispatch of clean on-board Bill of Lading copy, container seal photos, and pre-shipment inspection approval.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Marine Transit Insurance */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950 text-white p-8 shadow-xl space-y-5">
            <div className="flex items-center gap-2.5 border-b border-slate-800 pb-4">
              <ShieldCheck className="size-5 text-emerald-400" />
              <h3 className="font-heading font-bold text-base text-white">
                Marine Cargo Transit All-Risk Insurance
              </h3>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              For all CIF contracts, Export India Hub coordinates comprehensive Marine Cargo Insurance under Institute Cargo Clauses (A) from port of loading in India directly to destination discharge port.
            </p>

            <div className="space-y-2 text-xs text-slate-300 font-mono">
              <p>· Coverage: 110% of CIF Commercial Invoice Value</p>
              <p>· Standard: Institute Cargo Clauses (A) All-Risk</p>
              <p>· Carrier Lines: Maersk, MSC, CMA CGM, Hapag-Lloyd</p>
            </div>

            <div className="pt-3 border-t border-slate-800">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white hover:bg-slate-100 text-slate-950 font-semibold py-2.5 text-xs uppercase tracking-wider transition-colors"
              >
                Request Compliance Dossier <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
