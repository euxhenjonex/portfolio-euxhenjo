export function sendToAnalytics(metric: any) {
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
