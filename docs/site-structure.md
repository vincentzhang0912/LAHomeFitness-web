# Website structure

The homepage introduces the app and links to focused pages:

- `/`: concise introduction, a real app screenshot, three key features, a training overview, and download links.
- `/training`: strength, cardio, mixed circuits/HIIT, mobility, major muscle groups, weekly themes, and source links.
- `/pricing`: monthly and annual app plans, included features, billing information, and links to coaching.
- `/coaching`: Vincent's approach, LA Elite services, existing coaching and gym prices, and booking details.
- `/contact`: phone, email, WeChat QR, and local service area.

Existing privacy, terms, email-confirmation, and password-reset routes are retained. Legacy home anchors `#download`, `#training`, `#overview`, `#philosophy`, and `#contact` remain reachable.

Shared navigation and footer are in `src/components/SiteChrome.tsx`; `SiteNav.tsx` marks the active route. Language selection is in the header and retains the existing cookie-based preference. Each public page provides its own canonical URL and localized metadata. The sitemap includes all public pages.

The app screenshot is an actual English iPhone screen. The visible caption explains that Chinese can be selected inside the app. App prices, local coaching prices, and booking details have not been changed. Seven-day trial claims were not reintroduced.
