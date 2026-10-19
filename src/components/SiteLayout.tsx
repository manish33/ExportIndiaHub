import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Mail,
  Phone,
  ShieldCheck,
  Menu,
  X,
  MapPin,
  MessageSquareText,
  FileCheck2,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { COMPANY, CREDENTIALS } from "../lib/site";
import { Logo } from "./Logo";
import { InquiryForm } from "./InquiryForm";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quickInquiryOpen, setQuickInquiryOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Trade Process", href: "/trade-process" },
    { label: "Global Compliance", href: "/compliance" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" }
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 font-sans selection:bg-slate-200">
      {/* 1. Quiet Utility Bar */}
      <div className="bg-slate-900 text-slate-300 border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 py-2 text-xs">
          {/* Institutional Contact & Verification */}
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="size-3.5 text-slate-400" />
              <span className="font-mono">{COMPANY.email}</span>
            </a>

            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="size-3.5 text-slate-400" />
              <span className="font-mono">{COMPANY.phone}</span>
            </a>

            <div className="hidden lg:flex items-center gap-2 text-slate-400 font-mono text-[11px] border-l border-slate-700 pl-6">
              <ShieldCheck className="size-3.5 text-emerald-400" />
              <span>DGFT IEC: <span className="text-white font-medium">EFQPS5167K</span></span>
              <span>·</span>
              <span>GSTIN: <span className="text-white font-medium">24EFQPS5167K1ZM</span></span>
            </div>
          </div>

          {/* Sourcing Hub Status */}
          <div className="flex items-center gap-4 text-xs">
            <span className="hidden sm:inline text-slate-400 text-[11px] font-mono">
              Port Corridors: <span className="text-slate-200 font-medium">Mundra & Kandla (Western Seaboard)</span>
            </span>
            <button
              onClick={() => setQuickInquiryOpen(true)}
              className="text-xs font-semibold text-slate-200 hover:text-white transition-colors border-l border-slate-700 pl-4 cursor-pointer"
            >
              Quick Proposal Desk →
            </button>
          </div>
        </div>
      </div>

      {/* 2. Top Bar Contract: Zone 1 (Brand) - Zone 2 (4-5 Nav Links) - Zone 3 (1 Action) */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 py-3.5">
          {/* Zone 1: Brand Wordmark (Single cohesive link) */}
          <Link to="/" className="shrink-0" onClick={() => setMobileMenuOpen(false)}>
            <Logo size="md" variant="full" theme="light" />
          </Link>

          {/* Zone 2: Clean, single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
                    active
                      ? "text-slate-900 font-semibold border-b-2 border-slate-900"
                      : "hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center rounded-lg bg-slate-900 hover:bg-slate-800 text-white px-4.5 py-2 text-xs font-semibold tracking-wide uppercase transition-colors whitespace-nowrap shrink-0 shadow-xs"
            >
              Request Trade Proposal
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex size-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 md:hidden cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="border-b border-slate-200 bg-white px-4 pt-2 pb-6 md:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      active
                        ? "bg-slate-100 text-slate-900 font-semibold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="size-4 text-slate-400" />
                  </Link>
                );
              })}
              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-2">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-lg bg-slate-900 text-white font-semibold text-xs tracking-wide uppercase"
                >
                  Request Trade Proposal
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* 3. Main Content Container */}
      <main className="flex-1">{children}</main>

      {/* 4. Corporate Footer */}
      <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:px-8 md:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          {/* Column 1: Organization Overview */}
          <div className="space-y-4">
            <Logo size="lg" variant="full" theme="dark" />
            <p className="max-w-sm text-xs leading-relaxed text-slate-400">
              Government of India DGFT-registered merchant exporter and international trade procurement house connecting global importers directly with certified manufacturing facilities across Gujarat and Western India.
            </p>
            <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-3.5 text-xs text-slate-300 font-mono space-y-1">
              <p>Executive: <span className="text-white font-medium">{COMPANY.proprietor}</span></p>
              <p>Export Gateways: <span className="text-slate-200">Mundra (230km) · Kandla (210km)</span></p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
              Institutional Trade
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={COMPANY.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <MessageSquareText className="size-3 text-emerald-400" />
                  Direct WhatsApp Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Statutory Registrations */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
              Government Credentials
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              {CREDENTIALS.map((cred) => (
                <li key={cred.id} className="rounded-md border border-slate-800 bg-slate-900/40 p-2.5">
                  <span className="block text-[10px] text-slate-500 uppercase font-sans font-semibold">
                    {cred.short}
                  </span>
                  <span className="block text-xs font-bold text-slate-200 mt-0.5 break-all">
                    {cred.code}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Registered Office Address */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
              Registered Office
            </h4>
            <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 text-slate-400 shrink-0" />
                <span>{COMPANY.address.full}</span>
              </p>

              <p className="flex items-center gap-2">
                <Mail className="size-4 text-slate-400 shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="font-mono hover:text-white transition-colors">
                  {COMPANY.email}
                </a>
              </p>

              <p className="flex items-center gap-2">
                <Phone className="size-4 text-slate-400 shrink-0" />
                <a href={`tel:${COMPANY.phone}`} className="font-mono hover:text-white transition-colors">
                  {COMPANY.phone}
                </a>
              </p>

              <div className="pt-2">
                <a
                  href={COMPANY.address.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition-colors"
                >
                  Verify Office Location on Maps <ExternalLink className="size-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Legal Bar */}
        <div className="border-t border-slate-900 bg-slate-950">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-[11px] text-slate-500 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Export India Hub. All rights reserved. DGFT IEC Registered Merchant Exporter.
            </p>
            <p className="max-w-xl md:text-right text-slate-600">
              Commercial quotations, Incoterms 2020 delivery specifications, and payment terms are executed under formal sales contracts conforming to international trade law.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Corporate WhatsApp Desk */}
      <a
        href={COMPANY.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white px-3.5 py-2.5 shadow-xl transition-transform hover:scale-105 active:scale-95"
        aria-label="Direct WhatsApp Trade Desk"
      >
        <MessageSquareText className="size-4 text-emerald-400" />
        <span className="hidden sm:inline font-mono font-medium text-xs">
          Export Desk WhatsApp
        </span>
      </a>

      {/* Quick Inquiry Modal */}
      {quickInquiryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div>
                <h3 className="text-lg font-bold font-heading text-slate-900">Commercial Sourcing Proposal</h3>
                <p className="text-xs text-slate-500 font-mono">Export Desk · Rajkot, Gujarat</p>
              </div>
              <button
                type="button"
                onClick={() => setQuickInquiryOpen(false)}
                className="size-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100 cursor-pointer"
              >
                <X className="size-4" />
              </button>
            </div>

            <InquiryForm compact />
          </div>
        </div>
      )}
    </div>
  );
};
