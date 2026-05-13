"use client";

import { useEffect } from "react";

export function CalendlyWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget rounded-lg overflow-hidden"
      data-url="https://calendly.com/noraevents-contact/30min?hide_gdpr_banner=1&background_color=faf8f5&text_color=2c2c2c&primary_color=c4714a"
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
