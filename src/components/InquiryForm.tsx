import React, { useId, useState } from "react";
import { Send, Mail, CheckCircle2, ShieldCheck, Copy, MessageCircle, FileText, Printer, Check, ExternalLink } from "lucide-react";
import { COMPANY, INCOTERMS } from "../lib/site";

interface InquiryFormProps {
  compact?: boolean;
  onSuccess?: () => void;
  prefillProduct?: string;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({
  compact = false,
  onSuccess,
  prefillProduct = ""
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    destination: "",
    businessType: "buyer",
    product: prefillProduct,
    volume: "",
    incoterm: "FOB",
    message: ""
  });

  const fieldId = useId();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    rfqCode: string;
    date: string;
    data: typeof formData;
  } | null>(null);
  const [copied, setCopied] = useState(false);
  const [copiedEmailText, setCopiedEmailText] = useState(false);

  const getEmailContent = (rfqCode: string, data: typeof formData, date: string) => {
    const subject = `Commercial Trade RFQ: ${data.product} (${rfqCode})`;
    const body = `COMMERCIAL TRADE SOURCING RFQ
==========================================
Reference Code: ${rfqCode}
Date: ${date}
Destination Desk: ${COMPANY.email}

CLIENT INFORMATION:
- Full Name: ${data.fullName}
- Company Name: ${data.company}
- Corporate Email: ${data.email}
- Phone / WhatsApp: ${data.phone}
- Organization Profile: ${data.businessType}

COMMODITY & SHIPMENT SPECIFICATIONS:
- Commodity / Product: ${data.product}
- Estimated Volume / Batch: ${data.volume || "Standard FCL"}
- Target Incoterm: ${data.incoterm}
- Destination Port / Country: ${data.destination}

TECHNICAL SPECIFICATIONS & PAYMENT TERMS:
${data.message || "Please provide price quotation, lab testing availability, and production lead times."}

==========================================
Sent to Export India Hub Trade Desk (${COMPANY.email})
Rajkot, Gujarat, India · DGFT IEC: EFQPS5167K`;

    return {
      subject,
      body,
      mailtoUrl: `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const rfqCode = `EIH-RFQ-2026-${randomNum}`;
    const date = new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    const newRecord = {
      rfqCode,
      date,
      data: { ...formData }
    };

    // Store in local audit trail
    try {
      const existing = JSON.parse(localStorage.getItem("export_india_hub_rfqs") || "[]");
      localStorage.setItem("export_india_hub_rfqs", JSON.stringify([newRecord, ...existing]));
    } catch {
      // LocalStorage fallback
    }

    // Automatically trigger mailto link to ExportIndiaHub@zohomail.in
    const emailInfo = getEmailContent(rfqCode, formData, date);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData(newRecord);

      // Trigger user's mail client directly to ExportIndiaHub@zohomail.in
      try {
        const mailWindow = window.open(emailInfo.mailtoUrl, "_blank");
        if (!mailWindow || mailWindow.closed || typeof mailWindow.closed === "undefined") {
          window.location.href = emailInfo.mailtoUrl;
        }
      } catch {
        window.location.href = emailInfo.mailtoUrl;
      }

      if (onSuccess) {
        onSuccess();
      }
    }, 450);
  };

  const handleCopyCode = () => {
    if (!submittedData) return;
    navigator.clipboard.writeText(submittedData.rfqCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyFullEmail = () => {
    if (!submittedData) return;
    const { rfqCode, data, date } = submittedData;
    const emailInfo = getEmailContent(rfqCode, data, date);
    navigator.clipboard.writeText(emailInfo.body);
    setCopiedEmailText(true);
    setTimeout(() => setCopiedEmailText(false), 2500);
  };

  const getWhatsAppLink = () => {
    if (!submittedData) return COMPANY.whatsappUrl;
    const { rfqCode, data } = submittedData;
    const text = `*FORMAL COMMERCIAL SOURCING RFQ (${rfqCode})*
👤 *Client:* ${data.fullName}
🏢 *Company:* ${data.company}
📍 *Destination Port:* ${data.destination}
📦 *Commodity:* ${data.product}
📊 *Volume:* ${data.volume || "Standard FCL"}
🚢 *Target Incoterm:* ${data.incoterm}
✉️ *Email:* ${data.email}
📞 *Phone:* ${data.phone}
📝 *Specifications:* ${data.message || "Please provide price & lead time feasibility."}
Sent to: ${COMPANY.email}`;
    return `https://wa.me/${COMPANY.phoneRaw}?text=${encodeURIComponent(text)}`;
  };

  if (submittedData) {
    const emailInfo = getEmailContent(submittedData.rfqCode, submittedData.data, submittedData.date);

    return (
      <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-6 sm:p-7 text-slate-800 animate-in fade-in duration-200">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-md bg-slate-900 text-white flex items-center justify-center">
              <FileText className="size-4.5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-slate-900">
                Commercial RFQ Registered
              </h3>
              <p className="text-xs font-mono text-slate-500">
                Ref: {submittedData.rfqCode} · Export India Hub Desk
              </p>
            </div>
          </div>
          <button
            onClick={() => window.print()}
            type="button"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 font-medium px-2.5 py-1 border border-slate-200 rounded bg-white cursor-pointer"
          >
            <Printer className="size-3.5" /> Print Summary
          </button>
        </div>

        {/* Destination routing banner */}
        <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50/70 p-3 flex items-start gap-2.5 text-xs text-blue-900">
          <Mail className="size-4 text-blue-700 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong>Target Export Desk Email: </strong>
            <span className="font-mono font-bold text-blue-950 underline">{COMPANY.email}</span>
            <p className="text-[11px] text-blue-700 mt-0.5">
              An email draft has been generated for direct submission to our Zoho corporate mailbox.
            </p>
          </div>
        </div>

        {/* Docket Specs */}
        <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4 shadow-2xs font-mono text-xs space-y-3">
          <div className="grid grid-cols-1 gap-3 border-b border-slate-100 pb-3 sm:grid-cols-2">
            <div>
              <span className="text-slate-400 block text-[11px]">Commodity / Product:</span>
              <strong className="text-slate-900 font-medium">{submittedData.data.product}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Destination Port:</span>
              <strong className="text-slate-900 font-medium">{submittedData.data.destination}</strong>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 text-xs sm:grid-cols-3">
            <div>
              <span className="text-slate-400 block text-[11px]">Incoterm:</span>
              <span className="font-bold text-slate-900">{submittedData.data.incoterm}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Volume:</span>
              <span className="text-slate-900">{submittedData.data.volume || "Standard FCL"}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Desk Routing:</span>
              <span className="text-emerald-700 font-semibold truncate">{COMPANY.email}</span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="mt-5 flex flex-col sm:flex-row gap-2.5">
          <a
            href={emailInfo.mailtoUrl}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
          >
            <Mail className="size-4" />
            Send to {COMPANY.email}
          </a>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
          >
            <MessageCircle className="size-4 text-emerald-400" />
            Send via WhatsApp
          </a>

          <button
            onClick={handleCopyFullEmail}
            type="button"
            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            {copiedEmailText ? <Check className="size-3.5 text-emerald-600" /> : <Copy className="size-3.5" />}
            {copiedEmailText ? "Email Copied!" : "Copy Full RFQ"}
          </button>
        </div>

        <p className="mt-4 text-[11px] text-slate-500 text-center">
          Inquiries sent to <span className="text-slate-900 font-mono font-bold">{COMPANY.email}</span> receive formal commercial landed quotations and manufacturer capability audits within 24 business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4.5">
      {/* Target Desk Alert */}
      <div className="flex flex-col gap-1 rounded-md border border-slate-200 bg-slate-100 px-3 py-2 text-xs text-slate-700 sm:flex-row sm:items-center sm:justify-between">
        <span className="flex items-center gap-1.5 font-medium">
          <Mail className="size-3.5 shrink-0 text-slate-500" />
          Direct Dispatch Address:
        </span>
        <span className="min-w-0 break-all font-mono font-bold text-slate-900">{COMPANY.email}</span>
      </div>

      {/* Name and Company */}
      <div className={`grid gap-4 ${compact ? "grid-cols-1" : "sm:grid-cols-2"}`}>
        <div className="grid gap-1.5">
          <label htmlFor={`${fieldId}-name`} className="text-xs font-medium text-slate-900">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id={`${fieldId}-name`}
            required
            minLength={2}
            type="text"
            autoComplete="name"
            placeholder="e.g. Prithviraj Chauhan"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition"
          />
        </div>

        <div className="grid gap-1.5">
          <label htmlFor={`${fieldId}-company`} className="text-xs font-medium text-slate-900">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            id={`${fieldId}-company`}
            required
            type="text"
            autoComplete="organization"
            placeholder="Company / Trade House"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition"
          />
        </div>
      </div>

      {/* Email & Phone */}
      <div className={`grid gap-4 ${compact ? "grid-cols-1" : "sm:grid-cols-2"}`}>
        <div className="grid gap-1.5">
          <label htmlFor={`${fieldId}-email`} className="text-xs font-medium text-slate-900">
            Corporate Email <span className="text-red-500">*</span>
          </label>
          <input
            id={`${fieldId}-email`}
            required
            type="email"
            autoComplete="email"
            placeholder="name@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition"
          />
        </div>

        <div className="grid gap-1.5">
          <label htmlFor={`${fieldId}-phone`} className="text-xs font-medium text-slate-900">
            Phone / WhatsApp <span className="text-red-500">*</span>
          </label>
          <input
            id={`${fieldId}-phone`}
            required
            minLength={6}
            type="tel"
            autoComplete="tel"
            placeholder="+CountryCode Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition font-mono"
          />
        </div>
      </div>

      {/* Destination & Business Type */}
      <div className={`grid gap-4 ${compact ? "grid-cols-1" : "sm:grid-cols-2"}`}>
        <div className="grid gap-1.5">
          <label htmlFor={`${fieldId}-destination`} className="text-xs font-medium text-slate-900">
            Destination Country / Discharge Port <span className="text-red-500">*</span>
          </label>
          <input
            id={`${fieldId}-destination`}
            required
            type="text"
            placeholder="e.g. Jebel Ali (UAE) or Rotterdam (Netherlands)"
            value={formData.destination}
            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
            className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition"
          />
        </div>

        <div className="grid gap-1.5">
          <label htmlFor={`${fieldId}-profile`} className="text-xs font-medium text-slate-900">
            Organization Profile
          </label>
          <select
            id={`${fieldId}-profile`}
            value={formData.businessType}
            onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
            className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition"
          >
            <option value="buyer">Direct Foreign Importer / Commercial Buyer</option>
            <option value="agent">International Sourcing Agent / Trade House</option>
            <option value="distributor">Regional Wholesaler / Distributor</option>
            <option value="manufacturer">OEM / Component Manufacturer</option>
          </select>
        </div>
      </div>

      {/* Product & Volume & Incoterm */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_7.5rem]">
        <div className="grid gap-1.5">
          <label htmlFor={`${fieldId}-product`} className="text-xs font-medium text-slate-900">
            Commodity / Required Product <span className="text-red-500">*</span>
          </label>
          <input
            id={`${fieldId}-product`}
            required
            type="text"
            placeholder="e.g. Brass Pipe Fittings / Cumin Seeds 99%"
            value={formData.product}
            onChange={(e) => setFormData({ ...formData, product: e.target.value })}
            className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition"
          />
        </div>

        <div className="grid gap-1.5">
          <label htmlFor={`${fieldId}-volume`} className="text-xs font-medium text-slate-900">
            Volume / Batch Quantity
          </label>
          <input
            id={`${fieldId}-volume`}
            type="text"
            placeholder="e.g. 2 x 20ft FCL or Metric Tonnes"
            value={formData.volume}
            onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
            className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition"
          />
        </div>

        <div className="grid gap-1.5">
          <label htmlFor={`${fieldId}-incoterm`} className="text-xs font-medium text-slate-900">
            Incoterm
          </label>
          <select
            id={`${fieldId}-incoterm`}
            value={formData.incoterm}
            onChange={(e) => setFormData({ ...formData, incoterm: e.target.value })}
            className="h-10 w-full rounded-md border border-slate-300 bg-white px-2.5 text-sm font-mono font-semibold text-slate-900 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition"
          >
            {INCOTERMS.map((i) => (
              <option key={i.code} value={i.code}>
                {i.code}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message & Specs */}
      <div className="grid gap-1.5">
          <label htmlFor={`${fieldId}-message`} className="text-xs font-medium text-slate-900">
          Technical Specifications / Target Landed Price / Payment Terms
        </label>
        <textarea
          id={`${fieldId}-message`}
          rows={compact ? 3 : 4}
          placeholder="Specify exact material grade, drawing standards, packaging requirements, target delivery timeline, and preferred payment instrument (e.g. Irrevocable L/C at Sight, T/T wire)..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full rounded-md border border-slate-300 bg-white p-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition"
        />
      </div>

      {/* Submit footer */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
        <p className="text-[11px] text-slate-500 flex items-center gap-1.5">
          <ShieldCheck className="size-3.5 text-slate-700 shrink-0" />
          Dispatches directly to <strong className="text-slate-800 font-mono">{COMPANY.email}</strong>
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-2.5 text-xs uppercase tracking-wider shadow-xs transition-colors cursor-pointer disabled:opacity-50"
        >
          {isSubmitting ? (
            <>Processing & Routing...</>
          ) : (
            <>
              <Send className="size-3.5" />
              Submit Trade RFQ
            </>
          )}
        </button>
      </div>
    </form>
  );
};
