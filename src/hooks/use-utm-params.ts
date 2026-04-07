"use client";

import { useEffect } from "react";

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign"] as const;
const STORAGE_KEY = "meethub_utm";

export function useUtmCapture() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utm: Record<string, string> = {};
    let hasUtm = false;

    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) {
        utm[key] = value;
        hasUtm = true;
      }
    }

    if (hasUtm) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utm));
    }
  }, []);
}

export function getStoredUtm(): UtmParams {
  if (typeof window === "undefined") return {};
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}
