import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { SiteLayout } from "./components/SiteLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { TradeProcess } from "./pages/TradeProcess";
import { Compliance } from "./pages/Compliance";
import { Contact } from "./pages/Contact";

// Scroll to top helper on navigation
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) {
        const node = document.getElementById(hash.slice(1));
        if (node) {
          node.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SiteLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/trade-process" element={<TradeProcess />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  );
}
