# LAHomeFitness Web

Next.js website for `https://www.lahomefitness.com`.

## Routes

- `/` — marketing homepage
- `/privacy` — privacy policy
- `/terms` — terms of use
- `/auth/confirm-email` — Supabase email confirmation callback
- `/auth/reset-password` — Supabase password reset callback

## Local Development

```bash
cp .env.example .env.local
npm install
npm run dev
```

Set these environment variables locally and in Vercel:

```bash
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

## Supabase Redirect URLs

Add these URLs in Supabase Dashboard → Authentication → URL Configuration → Redirect URLs:

```text
https://www.lahomefitness.com/auth/confirm-email
https://www.lahomefitness.com/auth/reset-password
```

Email templates should keep Supabase's generated link variable, for example:

```html
<a href="{{ .ConfirmationURL }}">确认邮箱</a>
```

## Build

```bash
npm run build
```
