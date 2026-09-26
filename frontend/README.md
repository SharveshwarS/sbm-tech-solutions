# SBM Tech Solutions website

Responsive company website for SBM Transformative Tech Solutions Private Limited, built with React, TypeScript, and Vite. The theme uses warm charcoal, ivory, and champagne accents with the original gold hero artwork and unchanged company logo.

Eight static pages: `/`, `/about/`, `/contact/`, `/start-project/`, and the four project overviews at `/projects/neat-and-co/`, `/projects/serein-studio/`, `/projects/forma/`, and `/projects/invoice-generator/`.

Contact opens the general email/phone/address page. Discuss a project opens the enquiry form. Service links can preselect a validated service through the query string. A post-render hash handler positions cross-page homepage links after React creates their target sections.

## Run locally

```sh
npm ci
npm run dev
```

Development: http://127.0.0.1:5179

```sh
npm run build
npm run preview
```

Production preview: http://127.0.0.1:4179. The production output is `dist/`.

## Editing

- `src/data.ts`: company details, services, project links, reviews, and FAQs.
- `src/App.tsx`: page structure, mobile navigation, service selection, and enquiry draft.
- `src/Pages.tsx`: About page, invoice overview, and feedback carousel.
- `src/ProjectPages.tsx`: contact page and the three website project overviews, including demo links and accurate implementation boundaries.
- `src/styles.css`, `src/pages.css`, and `src/refinement.css`: theme, page layouts, responsive styles, focus states, and slideshow motion.
- `public/images/`: supplied logo, founder portrait, generated hero, and sample-project cover.
- Each page directory's `index.html`: page title and description. Vite builds all eight entries so direct page visits work.
- `.openai/hosting.json`: existing Sites project identity and static output directory. Preserve its project ID.

## Enquiries and privacy

The form validates the input and prepares a draft for review. Visitors can copy that draft or open their own email app. The website does not send an email, save form details, or provide a backend submission service. Form state clears on reload. No analytics, cookies, or local storage are implemented by the application; fonts are loaded from Google Fonts.

## Content boundaries

Company identity, address, CIN, phone, email, and logo come from the supplied company PDF; no independent registry verification is claimed. Founder background and portrait were provided by the user. iOS services are currently excluded; bug fixing and maintenance replace that offering. Neat & Co., Serein, and Forma are fictional portfolio concepts. Invoice Generator App is an existing Windows application; its overview uses an illustrative invoice, not customer records. Linked demos and the founder portfolio currently require owner access.

The feedback strip includes Akshay's feedback summarized from the user's account, not presented as a verbatim quote. The other three reviews are visibly marked fictional samples. Edit `reviews` in `src/data.ts` when approved feedback is available; set `sample: false` only for genuine customer feedback and keep the section description accurate. There are no fabricated ratings, client identities, or outcome metrics. The slideshow moves left to right, pauses on hover/focus or with its button, and becomes a static layout for reduced-motion preferences.

The replacement service was informed by comparable maintenance offerings at https://www.staksoft.com/services/application-maintenance and scoped to the founder's React and Spring Boot skills. No enterprise SLA or 24/7 support promise is made. Hosting access is separate from the source code and must be deliberately configured before a public launch.

## Validation

Production TypeScript/Vite build passes. Browser checks covered desktop and mobile presentation, narrow-screen overflow, mobile menu and Escape dismissal, service disclosures and preselection, required input validation, review/copy/edit of enquiry drafts, and FAQ disclosure. No email was sent during testing. See `ASSETS.md` for asset provenance.

The updated release was checked for About-page navigation and portrait loading, the founder portfolio destination, invoice project navigation and direct reload, 320px invoice layout without horizontal overflow, and feedback pause/resume. The maintenance CTA selects the correct service and generates the expected email draft. No browser errors or warnings were reported in the final check.

The warm-theme update was checked for restored gold artwork, About-to-Contact navigation, distinct Contact and Discuss a project destinations, all three added project overview links, direct reload of a project page, and return-to-projects positioning after rendering. Mobile project/contact layouts and service-preselected enquiry drafts passed; the final check reported no browser errors or horizontal overflow in the enquiry layout. No test email was sent.
