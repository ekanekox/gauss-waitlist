'use client'

import posthog from 'posthog-js'

export const initPostHog = () => {
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') posthog.debug()
      },
      capture_pageview: false, // We'll capture manually for more control
      capture_pageleave: true,
      autocapture: true,
    })
  }
  return posthog
}

// Event types for type safety
export const EVENTS = {
  PAGE_VIEW: 'page_view',
  WAITLIST_FORM_START: 'waitlist_form_start',
  WAITLIST_FORM_SUBMIT: 'waitlist_form_submit',
  WAITLIST_FORM_SUCCESS: 'waitlist_form_success',
  WAITLIST_FORM_ERROR: 'waitlist_form_error',
  WAITLIST_FORM_DUPLICATE: 'waitlist_form_duplicate',
  SHARE_CLICK: 'share_click',
  SCROLL_DEPTH: 'scroll_depth',
  FEATURE_VIEW: 'feature_view',
  CTA_CLICK: 'cta_click',
} as const

export const trackEvent = (
  event: string,
  properties?: Record<string, unknown>
) => {
  if (typeof window !== 'undefined') {
    posthog.capture(event, properties)
  }
}

export const identifyUser = (email: string, properties?: Record<string, unknown>) => {
  if (typeof window !== 'undefined') {
    posthog.identify(email, properties)
  }
}
