# English and Chinese

English is the default, independent of browser language. The shared English / 中文 selector saves `homefitness_language=en|zh` in a one-year SameSite=Lax cookie. Server components read the cookie with the asynchronous Next.js cookies API. Pages, metadata, JSON-LD, and the HTML language follow the selected language. These pages require a server runtime rather than a static export.

Server pages use `getTranslator()` from `src/i18n/server`. Client components use `useLanguage().t`. Add Chinese source strings and English translations to `src/i18n/en.json`. Store auth status messages as source strings and translate when rendering, so a language change does not require reusing an email verification token. The switch refreshes server content through the router, preserving mounted client form state.

The default brand is LA Home Fitness. Chinese copy remains available. Existing images, QR codes, and linked videos are unchanged.

Validation: TypeScript, ESLint, production build, and browser checks for default language, switching, persistence, metadata, legal/auth routes, and mobile page width. Deploy the updated source to publish the website.
