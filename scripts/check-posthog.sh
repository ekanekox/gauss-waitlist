#!/bin/bash

echo "🔍 PostHog Configuration Check"
echo "================================"
echo ""

# Check if .env.local exists
if [ -f .env.local ]; then
    echo "✅ .env.local found"
    echo ""
    echo "📝 Local Environment Variables:"
    echo "--------------------------------"
    grep POSTHOG .env.local | sed 's/=.*/=***REDACTED***/'
    echo ""
else
    echo "⚠️  .env.local not found"
    echo ""
fi

# Check Vercel environment
echo "☁️  Vercel Environment Variables:"
echo "--------------------------------"
vercel env ls 2>/dev/null | grep POSTHOG || echo "⚠️  Run 'vercel login' first"
echo ""

# Check if PostHog key is set
if [ ! -z "$NEXT_PUBLIC_POSTHOG_KEY" ]; then
    echo "✅ NEXT_PUBLIC_POSTHOG_KEY is set in environment"
else
    echo "⚠️  NEXT_PUBLIC_POSTHOG_KEY not in current environment (this is OK for build time)"
fi
echo ""

# Check package.json for posthog
echo "📦 PostHog Package:"
echo "--------------------------------"
grep -A1 '"posthog' package.json | head -2
echo ""

# Check if files exist
echo "📁 File Check:"
echo "--------------------------------"
[ -f "lib/posthog.ts" ] && echo "✅ lib/posthog.ts exists" || echo "❌ lib/posthog.ts missing"
[ -f "components/providers/posthog-provider.tsx" ] && echo "✅ components/providers/posthog-provider.tsx exists" || echo "❌ provider missing"
[ -f "app/posthog-test/page.tsx" ] && echo "✅ app/posthog-test/page.tsx exists (test page ready)" || echo "⚠️  test page missing"
echo ""

echo "🎯 Next Steps:"
echo "================================"
echo "1. Run: npm run dev"
echo "2. Visit: http://localhost:3000/posthog-test"
echo "3. Open browser DevTools (F12)"
echo "4. Check Console for PostHog initialization"
echo "5. Check Network tab for requests to posthog.com"
echo "6. Click test buttons on the test page"
echo "7. Wait 2-3 minutes and check PostHog dashboard"
echo ""
echo "🌐 Production Check:"
echo "================================"
echo "1. Deploy: git push"
echo "2. Visit: https://gauss-in.vercel.app/posthog-test"
echo "3. Check if events appear in PostHog dashboard"
echo ""

# Final reminder
echo "⚠️  Common Issues:"
echo "================================"
echo "- Ad blockers may block PostHog requests"
echo "- Test in incognito mode if tracking doesn't work"
echo "- Ensure NEXT_PUBLIC_POSTHOG_HOST = https://us.posthog.com"
echo "- Events take 2-3 minutes to appear in dashboard"
echo ""
