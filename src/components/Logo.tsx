import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "full" | "icon" | "stacked";
  theme?: "light" | "dark";
  showSubtitle?: boolean;
}

const heights = {
  sm: "h-12",
  md: "h-16",
  lg: "h-24",
  xl: "h-36",
};

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
}) => (
  <img
    src="/brand/logo.png"
    alt="Export India Hub"
    className={`w-auto object-contain drop-shadow-lg ${heights[size]} ${className}`}
  />
);
