'use client';

import { useReportWebVitals } from 'next/web-vitals';
import { sendToAnalytics } from '@/lib/analytics';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Web Vitals]', metric);
    }

    // Send to analytics in production
    if (process.env.NODE_ENV === 'production') {
      sendToAnalytics(metric);
    }
  });

  return null;
}
