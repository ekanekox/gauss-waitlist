# PostHog Debugging Guide

## Current Issues Found

Your PostHog implementation looks correct, but events aren't showing up. Here are the common causes and solutions:

---

## ✅ What's Already Correct

1. ✅ PostHog package installed (`posthog-js: ^1.157.2`)
2. ✅ Environment variables set in Vercel (NEXT_PUBLIC_POSTHOG_KEY, NEXT_PUBLIC_POSTHOG_HOST)
3. ✅ PostHogProvider correctly wrapping app in layout.tsx
4. ✅ Events tracked in waitlist form
5. ✅ Page view tracking implemented

---

## 🔍 Potential Issues & Solutions

### Issue #1: PostHog Host Region Mismatch

**Problem:** Your env has `https://us.posthog.com` but the default fallback is `https://app.posthog.com`

**Check:** Which PostHog instance are you using?
- EU Cloud: `https://eu.posthog.com`
- US Cloud: `https://us.posthog.com` ⬅️ **You have this**
- Self-hosted: Custom URL

**Solution:** Ensure NEXT_PUBLIC_POSTHOG_HOST is set correctly in Vercel.

```bash
vercel env pull .env.vercel.local
cat .env.vercel.local | grep POSTHOG
```

---

### Issue #2: Browser Tracking Prevention

**Problem:** Ad blockers, privacy extensions, or DNS filters may block PostHog requests.

**Check:**
1. Open browser DevTools (F12)
2. Go to Network tab
3. Filter by "posthog" or "batch"
4. Visit your site and perform actions
5. Look for requests to `us.posthog.com/batch`

**Blocked indicators:**
- ❌ No requests appear
- ❌ Requests show as "blocked" or "failed"
- ❌ 404 or CORS errors

**Solution:**
- Test in Incognito mode
- Disable ad blockers (uBlock Origin, Privacy Badger, etc.)
- Try different browser
- Whitelist `*.posthog.com` in content blockers

---

### Issue #3: PostHog Project Key Mismatch

**Problem:** The API key doesn't match your PostHog project.

**Check:**
1. Go to PostHog dashboard: https://us.posthog.com
2. Click Settings (bottom left)
3. Go to "Project" tab
4. Copy "Project API Key"
5. Compare with your NEXT_PUBLIC_POSTHOG_KEY

**Expected format:** `phc_` followed by 43 characters

**Solution:** Update the key in Vercel if it doesn't match.

```bash
vercel env rm NEXT_PUBLIC_POSTHOG_KEY production
vercel env add NEXT_PUBLIC_POSTHOG_KEY production
# Paste the correct key when prompted
```

---

### Issue #4: Events Not Showing Due to Filtering

**Problem:** PostHog may filter events based on IP, bot detection, or user settings.

**Check in PostHog:**
1. Go to Activity tab
2. Look at Filters (top right)
3. Ensure "Include internal and test users" is ON
4. Check that your IP isn't blocked

**Solution:**
1. In PostHog dashboard: Settings → Project → Data Management
2. Enable "Capture test events"
3. Add your IP to "Authorized domains"

---

### Issue #5: Page Needs Time to Load PostHog

**Problem:** Events fire before PostHog is fully initialized.

**Already Fixed:** Added `!posthog.__loaded` check in updated code.

---

### Issue #6: Cookie/Storage Issues

**Problem:** Browser blocking localStorage or cookies.

**Check in Browser Console:**
```javascript
// Run these in browser console:
console.log(localStorage.getItem('ph_phc_SN78UeebUef4nxvTbQoQ0OVXszoF3zoBZMCmr1LtCw8_posthog'))
console.log(document.cookie)
```

**Solution:** Ensure site allows storage, especially in Safari or with strict privacy settings.

---

## 🧪 Testing Steps

### 1. Use the Test Page

I've created a diagnostic page at `/posthog-test`. Deploy and visit it:

```bash
# Build and test locally first
npm run dev
# Visit: http://localhost:3000/posthog-test
```

**What to look for:**
- ✅ All status checks should be green
- ✅ Distinct ID should be visible
- ✅ Click test buttons and watch Event Log
- ✅ Check browser console for PostHog logs

---

### 2. Test in Production

```bash
# Deploy changes
git add .
git commit -m "Add PostHog debugging improvements"
git push

# Visit after deployment
# https://gauss-in.vercel.app/posthog-test
```

---

### 3. Check Browser Network Tab

1. Open DevTools → Network
2. Clear the log
3. Filter by "posthog" or "batch"
4. Perform actions on site
5. You should see:
   - `POST https://us.posthog.com/batch` (status 200)
   - Request payload with events

**Sample successful request:**
```json
{
  "api_key": "phc_SN...",
  "batch": [
    {
      "event": "page_view",
      "properties": {...},
      "distinct_id": "..."
    }
  ]
}
```

---

### 4. Check PostHog Dashboard

1. Go to https://us.posthog.com
2. Click "Activity" in left sidebar
3. Look for recent events (refresh if needed)
4. Filter by event name: `page_view`, `waitlist_form_start`, etc.

**Note:** Events can take 2-3 minutes to appear in dashboard.

---

## 🔧 Manual Debug Commands

Run these in your terminal:

```bash
# 1. Check environment variables are set locally
cd /Users/kaneko/ekanekox/gauss-waitlist
cat .env.local | grep POSTHOG

# 2. Pull production env vars
vercel env pull .env.vercel.local
cat .env.vercel.local | grep POSTHOG

# 3. Check if they match
echo "Local:"
cat .env.local | grep POSTHOG_KEY
echo "Vercel:"
cat .env.vercel.local | grep POSTHOG_KEY

# 4. Verify build includes env vars
npm run build
# Look for NEXT_PUBLIC_* vars in output
```

---

## 🎯 Quick Verification Checklist

Run through this before testing:

- [ ] **Env vars exist:** `vercel env ls` shows POSTHOG vars
- [ ] **Correct region:** Host is `https://us.posthog.com`
- [ ] **API key correct:** Starts with `phc_` and matches PostHog dashboard
- [ ] **Ad blocker off:** Tested in incognito or with extensions disabled
- [ ] **Browser console:** No PostHog errors
- [ ] **Network requests:** Seeing `/batch` requests with status 200
- [ ] **PostHog dashboard:** "Include internal and test users" is ON

---

## 🚀 Next Steps

1. **Test locally:**
   ```bash
   npm run dev
   # Visit http://localhost:3000/posthog-test
   ```

2. **Check browser console** for PostHog initialization logs:
   ```
   Initializing PostHog with key: phc_SN78Ue...
   PostHog host: https://us.posthog.com
   PostHog loaded successfully
   ```

3. **Click test buttons** on the test page

4. **Check Network tab** for successful requests

5. **Wait 2-3 minutes** and check PostHog dashboard

6. **If still not working:**
   - Share a screenshot of browser console
   - Share a screenshot of Network tab filtering "posthog"
   - Share PostHog dashboard settings (Project → API Key)

---

## 📝 Common Solutions Summary

| Problem | Solution |
|---------|----------|
| No network requests | Disable ad blocker, test incognito |
| Wrong host | Update `NEXT_PUBLIC_POSTHOG_HOST` to `https://us.posthog.com` |
| 404 errors | Verify API key matches PostHog project |
| Events not in dashboard | Enable "Include internal and test users" |
| Cookies blocked | Test in different browser or adjust privacy settings |

---

## 🆘 Still Not Working?

If after following all steps above events still aren't tracked:

1. Visit the test page: `/posthog-test`
2. Take a screenshot of:
   - Configuration Status section
   - Browser Console (with any errors)
   - Network tab (filtering "posthog")
3. Check PostHog dashboard settings
4. Verify you're looking at the right project in PostHog

**Most likely causes:**
1. Ad blocker (90% of cases)
2. Wrong API key or host
3. Looking at wrong PostHog project
4. Browser blocking cookies/storage

---

## Updated Files

✅ `/lib/posthog.ts` - Added better initialization logging
✅ `/app/posthog-test/page.tsx` - New diagnostic test page
✅ `POSTHOG_DEBUG.md` - This debugging guide

Deploy these changes and test!
