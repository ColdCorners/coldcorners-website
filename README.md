# ColdCorners website

The Astro site for [coldcorners.app](https://coldcorners.app/) runs on Cloudflare Workers. The homepage shows how to choose Hot Corners by display, pause them on a timer, restore saved setups, and record a keyboard shortcut. The FAQ, support, privacy policy, and terms of service use the addresses published by ColdCorners and its Mac App Store listing.

Cloudflare Workers Builds deploys this repository to the `coldcorners-website` Worker on `coldcorners.app`.

Use Node.js 22 or later. Install the pinned dependencies with `npm ci`, start a local server with `npm run dev`, and run the production build, TypeScript check, and Wrangler deployment dry run with `npm run check`.

Plausible tracks `coldcorners.app` through the existing `analytics.reverseeverything.com` endpoint. The support address is `support@docklock.pro`. The favicon and site icon come from the Mac app. The menu bar symbols use its original SVG artwork. The gallery publishes optimized copies of the four English v1.0 screenshots from the local Fastline folder. Each links to its full 2880 by 1800 image. The FAQ uses the original Settings captures, and the homepage share card uses the display map.
