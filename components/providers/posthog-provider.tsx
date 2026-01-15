'use client'

import { useEffect, ReactNode, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { initPostHog, trackEvent, EVENTS } from '@/lib/posthog'

function PostHogPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

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

  return null
}

export function PostHogProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    initPostHog()
  }, [])

  return (
    <>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </>
  )
}
