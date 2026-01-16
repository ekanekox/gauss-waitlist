'use client'

import { useEffect, useState } from 'react'
import { trackEvent, EVENTS } from '@/lib/posthog'
import posthog from 'posthog-js'
import { Button } from '@/components/ui/button'

export default function PostHogTestPage() {
  const [status, setStatus] = useState<{
    initialized: boolean
    hasKey: boolean
    hasHost: boolean
    distinctId: string | null
    events: string[]
  }>({
    initialized: false,
    hasKey: false,
    hasHost: false,
    distinctId: null,
    events: [],
  })

  useEffect(() => {
    // Check PostHog configuration
    const checkPostHog = () => {
      const hasKey = !!process.env.NEXT_PUBLIC_POSTHOG_KEY
      const hasHost = !!process.env.NEXT_PUBLIC_POSTHOG_HOST

      // Wait a bit for PostHog to initialize
      setTimeout(() => {
        const initialized = posthog.__loaded
        const distinctId = posthog.get_distinct_id()

        setStatus({
          initialized,
          hasKey,
          hasHost,
          distinctId,
          events: [],
        })
      }, 1000)
    }

    checkPostHog()
  }, [])

  const testPageView = () => {
    trackEvent(EVENTS.PAGE_VIEW, {
      url: window.location.href,
      test: true,
    })
    setStatus(prev => ({
      ...prev,
      events: [...prev.events, 'page_view tracked'],
    }))
  }

  const testCustomEvent = () => {
    trackEvent('test_event', {
      timestamp: new Date().toISOString(),
      source: 'posthog_test_page',
    })
    setStatus(prev => ({
      ...prev,
      events: [...prev.events, 'test_event tracked'],
    }))
  }

  const testWaitlistEvent = () => {
    trackEvent(EVENTS.WAITLIST_FORM_START)
    setStatus(prev => ({
      ...prev,
      events: [...prev.events, 'waitlist_form_start tracked'],
    }))
  }

  const testIdentify = () => {
    const testEmail = `test-${Date.now()}@example.com`
    posthog.identify(testEmail, {
      email: testEmail,
      test: true,
    })
    setStatus(prev => ({
      ...prev,
      events: [...prev.events, `identified as ${testEmail}`],
    }))
  }

  return (
    <div className="min-h-screen bg-steel-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">PostHog Diagnostic Test</h1>

        {/* Status Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Configuration Status</h2>
          <div className="space-y-3">
            <StatusRow
              label="Environment Variable (NEXT_PUBLIC_POSTHOG_KEY)"
              value={status.hasKey}
              details={status.hasKey ? '✓ Present' : '✗ Missing'}
            />
            <StatusRow
              label="PostHog Host (NEXT_PUBLIC_POSTHOG_HOST)"
              value={status.hasHost}
              details={process.env.NEXT_PUBLIC_POSTHOG_HOST || 'Not set'}
            />
            <StatusRow
              label="PostHog Initialized"
              value={status.initialized}
              details={status.initialized ? '✓ Loaded' : '✗ Not loaded'}
            />
            <StatusRow
              label="Distinct ID"
              value={!!status.distinctId}
              details={status.distinctId || 'None'}
            />
          </div>
        </div>

        {/* Test Buttons */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Test Events</h2>
          <div className="grid grid-cols-2 gap-4">
            <Button onClick={testPageView} className="w-full">
              Test Page View
            </Button>
            <Button onClick={testCustomEvent} className="w-full">
              Test Custom Event
            </Button>
            <Button onClick={testWaitlistEvent} className="w-full">
              Test Waitlist Event
            </Button>
            <Button onClick={testIdentify} className="w-full">
              Test Identify User
            </Button>
          </div>
        </div>

        {/* Event Log */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Event Log</h2>
          {status.events.length === 0 ? (
            <p className="text-steel-500">No events tracked yet. Click a button above to test.</p>
          ) : (
            <ul className="space-y-2">
              {status.events.map((event, index) => (
                <li key={index} className="bg-brand-50 border border-brand-200 px-4 py-2 rounded">
                  {event}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Debug Info */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">Debug Information</h2>
          <div className="font-mono text-sm space-y-2">
            <p>PostHog Key: {process.env.NEXT_PUBLIC_POSTHOG_KEY?.substring(0, 10)}...</p>
            <p>PostHog Host: {process.env.NEXT_PUBLIC_POSTHOG_HOST}</p>
            <p>Node Env: {process.env.NODE_ENV}</p>
            <p>Window: {typeof window !== 'undefined' ? 'Available' : 'Not available'}</p>
          </div>

          <div className="mt-4 p-4 bg-white rounded border">
            <h3 className="font-semibold mb-2">Check Your Browser Console:</h3>
            <ol className="list-decimal ml-5 space-y-1">
              <li>Open DevTools (F12 or Cmd+Opt+I)</li>
              <li>Look for PostHog debug messages</li>
              <li>Check Network tab for requests to posthog.com</li>
              <li>Look for any errors in the Console</li>
            </ol>
          </div>

          <div className="mt-4 p-4 bg-white rounded border">
            <h3 className="font-semibold mb-2">Next Steps:</h3>
            <ol className="list-decimal ml-5 space-y-1">
              <li>Click the test buttons above</li>
              <li>Wait 2-3 minutes for data to appear in PostHog</li>
              <li>Go to PostHog dashboard → Activity tab</li>
              <li>Look for events from your distinct ID: <span className="bg-brand-100 px-2 py-1 rounded">{status.distinctId}</span></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatusRow({ label, value, details }: { label: string; value: boolean; details: string }) {
  return (
    <div className="flex items-center justify-between border-b pb-2">
      <span className="font-medium">{label}</span>
      <div className="flex items-center gap-3">
        <span className={`text-sm ${value ? 'text-brand-600' : 'text-red-600'}`}>
          {details}
        </span>
        <span className={`w-3 h-3 rounded-full ${value ? 'bg-brand-500' : 'bg-red-500'}`} />
      </div>
    </div>
  )
}
