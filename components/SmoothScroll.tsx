'use client';

import { useEffect } from 'react';
import { initSmoothScroll } from '@/lib/smoothScroll';

export function SmoothScroll() {
  useEffect(() => {
    initSmoothScroll();
  }, []);

  return null;
}
