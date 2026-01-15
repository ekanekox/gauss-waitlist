'use client'

import { useEffect, ReactNode } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { initPostHog, trackEvent, EVENTS } from '@/lib/posthog'

export function PostHogProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    initPostHog()
  }, [])

  useEffect(() => {
    if (pathname) {
      const url = window.origin + pathname
      const search = searchParams.toString()
      const fullUrl = search ? `${url}?${search}` : url

      trackEvent(EVENTS.PAGE_VIEW, {
        url: fullUrl,
        pathname,
        referrer: document.referrer,
      })
    }
  }, [pathname, searchParams])

  return <>{children}</>
}
