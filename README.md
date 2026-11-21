# ColdCorners website

The Astro site for [coldcorners.app](https://coldcorners.app/) runs on Cloudflare Workers. The homepage introduces the app and shows its display map, timer, and saved setups. The FAQ, support, privacy policy, and terms of service use the addresses published by ColdCorners and its Mac App Store listing.

Cloudflare Workers Builds deploys this repository to the `coldcorners-website` Worker on `coldcorners.app`.

Use Node.js 22 or later. Install the pinned dependencies with `npm ci`, start a local server with `npm run dev`, and run the production build, TypeScript check, and Wrangler deployment dry run with `npm run check`.

Plausible tracks `coldcorners.app` through the existing `analytics.reverseeverything.com` endpoint. Support uses the existing `support@cornerlock.app` mailbox. The favicon and site icon come from the Mac app. The menu bar symbols use its original SVG artwork. The homepage uses optimized copies of the three English Fastline screenshots, with a crop of the first image for the hero. Each gallery image links to its full 2880 by 1800 pixel composition.
