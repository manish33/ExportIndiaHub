import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "full" | "icon" | "stacked";
  theme?: "light" | "dark";
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
  variant = "full",
  theme = "light",
  showSubtitle = false,
}) => {
  const sizeMap = {
    sm: { h: 32, w: 28, text: "text-base", sub: "text-[9px]" },
    md: { h: 42, w: 36, text: "text-lg", sub: "text-[10px]" },
    lg: { h: 56, w: 48, text: "text-2xl", sub: "text-xs" },
    xl: { h: 72, w: 62, text: "text-3xl", sub: "text-sm" },
  };

  const s = sizeMap[size];
  const isDark = theme === "dark";

  // Corporate vector emblem
  const Emblem = (
    <svg
      viewBox="0 0 100 120"
      className="shrink-0 transition-transform duration-200"
      style={{ height: `${s.h}px`, width: `${s.w}px` }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Export India Hub Crest"
    >
      <defs>
        <linearGradient id="shieldGoldRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D97706" />
          <stop offset="50%" stopColor="#B45309" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>

        <linearGradient id="shipHullCorp" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#047857" />
          <stop offset="70%" stopColor="#065F46" />
          <stop offset="100%" stopColor="#064E3B" />
        </linearGradient>

        <clipPath id="shieldInnerClip">
          <path d="M50 20 C74 20 88 26 90 46 C90 75 72 98 50 110 C28 98 10 75 10 46 C12 26 26 20 50 20 Z" />
        </clipPath>
      </defs>

      {/* 1. Crown Apex */}
      <path
        d="M36 21 L42 10 L50 17 L58 10 L64 21 Z"
        fill="url(#shieldGoldRim)"
        stroke="#78350F"
        strokeWidth="1"
      />
      <circle cx="42" cy="10" r="1.5" fill="#FDE68A" />
      <circle cx="50" cy="17" r="1.5" fill="#FDE68A" />
      <circle cx="58" cy="10" r="1.5" fill="#FDE68A" />

      {/* 2. Outer Shield Rim */}
      <path
        d="M50 18 C77 18 92 24 94 46 C94 77 74 102 50 114 C26 102 6 77 6 46 C8 24 23 18 50 18 Z"
        fill="url(#shieldGoldRim)"
      />

      {/* 3. Inner Shield with Indian Tricolor */}
      <g clipPath="url(#shieldInnerClip)">
        {/* Saffron Top */}
        <rect x="0" y="20" width="100" height="30" fill="#EA580C" />
        {/* White Center */}
        <rect x="0" y="50" width="100" height="25" fill="#FFFFFF" />
        {/* Green Bottom */}
        <rect x="0" y="75" width="100" height="40" fill="#047857" />

        {/* Ashoka Chakra */}
        <circle cx="50" cy="62" r="9" stroke="#0F172A" strokeWidth="0.8" opacity="0.3" fill="none" />
        <circle cx="50" cy="62" r="1.5" fill="#0F172A" opacity="0.4" />

        {/* India Gate Architectural Monument */}
        <g opacity="0.95">
          <rect x="36" y="60" width="28" height="3" fill="#94A3B8" />
          <path
            d="M38 60 V40 H62 V60 H58 V46 C58 42 42 42 42 46 V60 H38 Z"
            fill="#F8FAFC"
            stroke="#64748B"
            strokeWidth="0.8"
          />
          <path d="M44 60 V47 C44 44 56 44 56 47 V60 Z" fill="#E2E8F0" />
          <rect x="37" y="37" width="26" height="3.5" fill="#E2E8F0" stroke="#64748B" strokeWidth="0.5" />
          <rect x="41" y="34" width="18" height="3" fill="#CBD5E1" stroke="#64748B" strokeWidth="0.5" />
        </g>
      </g>

      {/* 4. Merchant Container Vessel */}
      <g>
        {/* Ship Hull */}
        <path
          d="M12 76 C26 71 55 60 88 54 C90 60 91 69 82 76 C62 85 32 89 15 85 C11 82 10 79 12 76 Z"
          fill="url(#shipHullCorp)"
          stroke="#064E3B"
          strokeWidth="1"
        />

        {/* Ship Deck */}
        <path
          d="M14 76 C28 71 55 61 87 55 L84 58 C57 64 28 73 17 78 Z"
          fill="#10B981"
        />

        {/* Bridge Cabin & Navigation Mast */}
        <rect x="22" y="64" width="10" height="9" rx="1" fill="#F8FAFC" stroke="#64748B" strokeWidth="0.7" />
        <rect x="24" y="66" width="2.5" height="2" fill="#0F172A" />
        <rect x="28" y="66" width="2.5" height="2" fill="#0F172A" />
        <path d="M27 64 V57 M25 59 H29" stroke="#94A3B8" strokeWidth="1" strokeLinecap="round" />

        {/* Cargo Containers */}
        <rect x="35" y="62" width="8" height="6" rx="0.5" fill="#C27803" />
        <rect x="44" y="60" width="8" height="7" rx="0.5" fill="#1E40AF" />
        <rect x="53" y="58" width="8" height="8" rx="0.5" fill="#047857" />
        <rect x="62" y="56" width="8" height="8" rx="0.5" fill="#E2E8F0" />
        <rect x="71" y="54" width="8" height="8" rx="0.5" fill="#B45309" />
      </g>

      {/* 5. Lower Shield Chevron Base */}
      <path
        d="M26 91 C37 98 45 104 50 106 C55 104 63 98 74 91 C65 102 57 109 50 113 C43 109 35 102 26 91 Z"
        fill="#065F46"
      />
    </svg>
  );

  if (variant === "icon") {
    return <div className={`inline-flex items-center ${className}`}>{Emblem}</div>;
  }

  return (
    <div
      className={`inline-flex items-center gap-3 select-none ${className} ${
        variant === "stacked" ? "flex-col text-center" : ""
      }`}
    >
      {Emblem}

      <div className="flex flex-col justify-center leading-none">
        {/* Crisp Corporate Brand Mark */}
        <div className="flex items-baseline tracking-tight font-heading font-extrabold text-slate-900">
          <span className={`${s.text} font-black tracking-tight text-amber-600`}>
            EXPORT
          </span>
          <span className={`mx-1 ${s.text} font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
            INDIA
          </span>
          <span className={`${s.text} font-black tracking-tight text-emerald-700`}>
            HUB
          </span>
        </div>

        {/* Optional Corporate Subtitle */}
        {showSubtitle && (
          <span
            className={`mt-1 font-mono uppercase tracking-[0.2em] font-medium ${s.sub} ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Merchant Exporter · Rajkot
          </span>
        )}
      </div>
    </div>
  );
};
