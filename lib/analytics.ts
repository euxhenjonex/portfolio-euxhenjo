// Minimal type to avoid any; match Next.js Web Vitals shape loosely
type WebVitalMetric = {
  id?: string;
  name?: string;
  label?: string;
  value?: number;
  startTime?: number;
  delta?: number;
  entries?: unknown[];
  navigationType?: string;
  rating?: string;
  path?: string;
};

export function sendToAnalytics(metric: WebVitalMetric) {
  // Send to analytics endpoint (Google Analytics, Vercel Analytics, etc.)
  const body = JSON.stringify(metric);
  const url = '/api/analytics'; // Create this endpoint if needed

  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
  } else {
    fetch(url, {
      body,
      method: 'POST',
      keepalive: true,
    });
  }
}
