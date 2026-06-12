type GtagCommand = "config" | "event" | "js" | "set";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: GtagCommand, target: string | Date, params?: Record<string, unknown>) => void;
  }
}

const googleAdsId = import.meta.env.VITE_GOOGLE_ADS_ID;
const googleAdsConversionLabel = import.meta.env.VITE_GOOGLE_ADS_CONVERSION_LABEL;
const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

const primaryMeasurementId = googleAdsId || gaMeasurementId;

export function initAnalytics() {
  if (!primaryMeasurementId || typeof window === "undefined" || window.gtag) {
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${primaryMeasurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args) {
    window.dataLayer?.push(args);
  };

  window.gtag("js", new Date());

  if (gaMeasurementId) {
    window.gtag("config", gaMeasurementId, { send_page_view: true });
  }

  if (googleAdsId) {
    window.gtag("config", googleAdsId);
  }
}

export function trackContactClick(method: "phone" | "whatsapp" | "form") {
  if (!window.gtag) {
    return;
  }

  window.gtag("event", "contact_click", {
    event_category: "lead",
    event_label: method,
  });

  if (googleAdsId && googleAdsConversionLabel) {
    window.gtag("event", "conversion", {
      send_to: `${googleAdsId}/${googleAdsConversionLabel}`,
      event_callback: undefined,
    });
  }
}
