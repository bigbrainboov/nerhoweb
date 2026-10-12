<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/2469468d-0cfa-4d0d-891b-0b716159a171

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Design assets

The landing page uses the supplied artwork in `public/images` as WebP with smaller responsive variants. To regenerate it from the original PNG files:

```sh
node scripts/optimize-assets.mjs /path/to/assets /path/to/reference-screenshots
```

The optional screenshot directory supplies the essentials photo and customer portraits. Keep the generated `src/asset-dimensions.json` alongside the images; it provides intrinsic image sizes to prevent layout shifts. `serviceImg3.png` was not supplied, so the carousel uses the available images in the reference order. The exact Britti Sans Trial font is not included; the existing Outfit/Geist font stack remains.

## App store web pages

Public routes are `/terms`, `/privacy-policy`, `/delete-account`, `/support`, and `/contact`. Terms, privacy, deletion, and support links appear in the footer. The Terms links in the navbar now open the full page.

Account deletion uses an email request to `nerho@gmail.com`. The form prepares a message in the visitor's email application; it does not send mail or delete data. The team must receive and process the request. No request details are stored by the form.

Before submitting the apps:

- Publish these routes under the production HTTPS domain and configure the host to serve `index.html` for direct requests to each route.
- The owner confirmed that Nerho hosts its backend, uses Paystack for Pay Now and virtual wallets for instalment plans, and does not use analytics or crash reporting. Deletion requests are handled immediately, removing the account records without retaining them. Confirm whether any external provider operates the virtual wallets and document any additional payment data collected before store submission.
- Confirm the actual app's security implementation, including password hashing, HTTPS, access controls, and database protection. The website cannot verify those controls.
- Add working account deletion initiation inside both mobile apps. Apple generally does not accept an email-only in-app deletion flow for ordinary apps.
- Set the privacy URL and account deletion URL in Google Play Console; provide accurate Data safety disclosures. Set privacy and support URLs in App Store Connect and complete accurate App Privacy disclosures.
- Ensure the public policies and actual app behavior agree, and review the terms before publication.

Official requirements: [Google Play user data](https://support.google.com/googleplay/android-developer/answer/10144311?hl=en), [Google Play account deletion](https://support.google.com/googleplay/android-developer/answer/13327111?hl=en), [Apple account deletion](https://developer.apple.com/support/offering-account-deletion-in-your-app/), [Apple app review](https://developer.apple.com/app-store/review/).

Run `./node_modules/.bin/tsx scripts/verify-pages.ts` to check page routing, legal navigation, and the deletion request markup.
