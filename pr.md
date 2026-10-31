# Retami Limited — Official Website Requirements

Last updated: 2026-10-30 (Asia/Karachi)
Status: Replacement navbar and rotating landing hero implemented from the owner's reference; awaiting design feedback. Vanilla CSS only.

This is the official requirements document. For conversation context, completed
work, and handoff details, see [track.md](track.md). A proposal appearing in this
document does not mean the owner has approved it for implementation.

## 1. Confirmed requirements

| ID | Requirement | Status |
| --- | --- | --- |
| R-01 | The company name is Retami Limited. | Confirmed by owner |
| R-02 | Position Retami primarily as an AI agency. | Latest owner clarification; supersedes generic software-company positioning |
| R-03 | Retami also offers broad software and AI engineering capabilities. | Confirmed at a high level; specific service offerings pending |
| R-04 | Use Next.js for both frontend and backend. | Confirmed; initial foundation implemented |
| R-05 | Use https://quantixx.ai/ as a reference for understanding website content and structure. | Confirmed reference; no exact-copy requirement |
| R-06 | Start with the initial project setup in the owner's existing folder, then discuss subsequent work. | Setup completed; detailed feature work pending |
| R-07 | Maintain `track.md` with step-by-step progress, important user instructions, decisions, and context for another chat/account. | Created; ongoing responsibility |
| R-08 | Maintain `pr.md` as the official website requirements document. | Created; ongoing responsibility |
| R-09 | Store provided images in `src/assets/` so they can be imported as image objects. Review the images and discuss homepage design before implementing it. | Folder created and supplied assets reviewed; homepage design discussion pending |
| R-10 | Export supplied images together through `src/assets/assets.js`. | 18 existing images registered, including Emerald Ribbon Emblem in Mist.png and the new logo PNGs |
| R-11 | When the owner requests image generation, generate and show the result first. Add it to `src/assets/` only after owner approval, then update the asset exports. | Confirmed owner workflow on 2026-10-29; no generation requested yet |
| R-12 | Build the navbar first and a landing page using the supplied branding. | Original rejected; replacement implemented from supplied reference |
| R-13 | Use vanilla CSS, not Tailwind. | Confirmed; Tailwind dependencies and configuration removed |
| R-14 | Keep navbar files in `src/components/Navbar/`: `Navbar.tsx` and `navbar.css`. | Implemented, including mobile navigation and Services dropdown |
| R-15 | Follow the owner's attached design image; refer to existing assets as needed. | Reference-based ivory/green navbar and hero implemented |
| R-16 | Three background images change with time, including tree and landscape. | Implemented ribbon/landscape/tree rotation with crossfade, manual selection, pause, and reduced-motion support |

## 2. Proposed website purpose

Present Retami's AI services and engineering capabilities, show credible work,
and let prospective clients inquire about projects. This purpose was recommended
by the assistant; detailed conversion goals and target audiences remain open.

AI should lead the site's positioning. Supporting software capabilities can be
organized around the products and systems Retami can deliver. Exact marketing
copy and service prioritization are not approved yet.

## 3. Proposed information architecture — pending approval

| Page | Proposed content |
| --- | --- |
| Home | Introduction, AI services, selected work, process, differentiators, FAQs, and contact CTA |
| About | Agency story, mission, team, and approach |
| Services | Service overview and individual service detail pages |
| Our Work | Portfolio and individual case studies |
| Blog | Articles, company insights, and individual article pages |
| Contact / Start a Project | Inquiry form and verified contact information |
| Privacy / Terms | Content appropriate to the site's actual operations |

Previously proposed navigation: Home, About, Services, Our Work, Blog, Contact,
with a primary "Start a Project" action. Labels and the final sitemap are open.

Previously proposed homepage sequence:

1. Hero and primary actions.
2. Services overview.
3. Featured projects.
4. Who we help.
5. Discover, design, develop, test, launch, and support process.
6. Why Retami.
7. Technologies actually used.
8. Genuine testimonials when available.
9. FAQs.
10. Project inquiry CTA and footer.

## 4. Service catalog — candidates, not approved offerings

| Area | Previously discussed examples |
| --- | --- |
| AI engineering and automation | Assistants, agents, knowledge search, document processing, workflow automation, AI integrations |
| Custom software and SaaS | Business platforms, dashboards, internal tools, CRM/ERP systems |
| Web and mobile development | Websites, web applications, ecommerce, mobile applications |
| Product strategy and UI/UX | Discovery, planning, prototypes, interface design |
| Cloud, DevOps, and integrations | Deployment, infrastructure, APIs, performance improvements |
| Quality assurance and support | Testing, monitoring, maintenance, continued development |

Revisit this grouping now that the owner has clarified the AI-agency identity.
Specialized model training, voice agents, SEO, and marketing are not confirmed
Retami offerings merely because they appear on the reference website.

## 5. Proposed functional requirements — pending approval

| ID | Candidate feature | Current state |
| --- | --- | --- |
| P-01 | Responsive public website and page-specific metadata | Reference-based hero and navbar implemented; desktop/mobile browser checks passed |
| P-02 | Inquiry form: name/contact details, service, project description, budget range, and timeline | Not implemented; fields pending |
| P-03 | Server-side inquiry validation and spam protection | Not implemented |
| P-04 | Persist inquiries and notify the agency by email | Not implemented; providers pending |
| P-05 | Secure admin authentication and protected dashboard | Not implemented; auth approach pending |
| P-06 | Manage projects, services, and draft/published articles | Not implemented |
| P-07 | Track inquiry status, such as new, contacted, and closed | Not implemented |
| P-08 | Manage uploaded project/content images | Not implemented; storage pending |

Client portals, payments, project tracking, and booking integrations are possible
future discussions, not part of the currently authorized initial setup.

## 6. Implemented technical foundation

- One Next.js App Router application serves frontend and backend.
- TypeScript strict mode and vanilla CSS are configured. Tailwind has been removed.
- Navbar files are colocated in `src/components/Navbar/Navbar.tsx` and `navbar.css`.
- Source code is under `src/`, with `@/*` import aliases.
- User-provided images belong in `src/assets/`. Supported raster images can be
  imported with `import hero from "@/assets/hero.png"` and passed to Next.js
  `Image` as `src={hero}`. The shared registry supports
  `import { assets } from "@/assets/assets"` and `src={assets.heroBanner}`.
  Files needing direct public URLs can remain in `public/`.
- Backend route handlers live under `src/app/api/`; `/api/health` is implemented.
- npm scripts support development, type checking, building, and production serving.
- `package-lock.json` is present for reproducible dependency installation.
- No database, authentication, email provider, CMS, or hosting service is selected.

These are implementation choices already made during setup, not additional
owner-mandated requirements beyond the requested use of Next.js.

## 7. Proposed quality and content standards

- Responsive layouts with readable text, keyboard access, and labeled forms.
- Clear, accurate service descriptions and calls to action.
- Real project results and testimonials; identify demonstration projects as demos.
- No copied reference-site metrics, client claims, or unverified partnerships.
- Validate future user submissions on the server and protect admin operations.
- Keep secrets out of source control and official documentation.
- Define feature-specific acceptance criteria when those features are approved.

Brand direction is established in section 10. Final page design, performance
targets, SEO details, analytics, accessibility targets, and privacy content still
require refinement as the scope develops.

## 8. Acceptance status for the initial setup

| Check | Result |
| --- | --- |
| Project created in the existing application folder | Complete |
| Next.js frontend and backend foundation present | Complete |
| Dependencies installed and lockfile generated | Complete |
| Production build, including TypeScript checking | Passed on 2026-10-29 |
| Browser visual inspection / live HTTP smoke check | Not performed |
| Public deployment | Not requested or performed |
| Official requirements and progress documents | Created on 2026-10-29 |

## 9. Decisions still needed

- Exact AI services and supporting software services to advertise.
- Target client types, industries, and geographic markets.
- First-release pages and whether admin/blog features belong in that release.
- Final typography, asset placement, and approved copy. Logo assets and the
  official color palette have been supplied (see section 10).
- Verified contact details, company story, projects, team information, testimonials.
- Inquiry workflow and integration providers when those features are approved.
- Hosting, domain, database, authentication, and deployment arrangements.

These are an open decision list, not a request for the owner to answer everything
at once. Resolve them step by step with the relevant implementation work.

## 10. Official brand direction — owner supplied 2026-10-29

The owner explicitly asked to understand and save the supplied Retami brand
components sheet, especially its colors. Use these exact palette values for
website design; do not substitute a generic teal or blue palette.

| Color | Exact hex | Intended use (implementation guidance) |
| --- | --- | --- |
| Deep forest | `#0C2A20` | Dark sections and strong text on light backgrounds |
| Forest | `#173D2D` | Primary buttons, dark surfaces, outlines |
| Emerald | `#315F43` | Secondary green accents |
| Sage | `#668E6E` | Supporting accents and decorative elements |
| Soft sage | `#A9C8A2` | Light green accents and highlights |
| Pale mint | `#EAF2E7` | Soft section/card backgrounds |
| Ivory | `#F9FAF6` | Main light surface |

The sheet also establishes rounded cards, pill-shaped buttons (dark filled,
light green filled, and outlined), green gradients, and the sculpted ribbon R
logo. Preserve this visual language. Color names and values above are explicit
in the reference; usage roles are implementation guidance, not additional owner
instructions. Check contrast for each actual text/background combination.

Reference asset: `src/assets/Retami_Figma_Editable_Brand_Components.svg`.
Reusable values: `src/assets/brand.js` and standard CSS custom properties in
`src/app/globals.css` (for example `var(--color-forest)`). Exact gradient stops,
button variants, typography, and page composition can be refined during design.

## 11. Rejected first landing-page implementation — historical only

The owner rejected the following design and requested removal. It has been
undone. This list is historical context, not the current UI or an approved design.
The replacement will follow the owner's upcoming reference image using vanilla CSS.

- Sticky ivory navbar with supplied logo icon, Retami wordmark, expertise,
  approach, and about anchor links, plus an expertise CTA.
- Responsive mobile menu with Escape dismissal and link-close behavior.
- Forest-green hero using `assets.ogBackground`, sage highlights, pill CTA,
  and the draft headline "A little vision. A lot of possibility."
- Introduction, native expandable service rows, approach/process, about, footer.
- Supplied landscape and tree images used in supporting sections.
- Service and marketing copy are draft content for review, not a finalized catalog.
- No contact submission or admin features are part of this first design.
- Build and local HTTP smoke checks passed. Browser layout and interaction checks
  remain pending; local review is available through `npm run dev`.

## 12. Current reference-based implementation

- Uses the owner's attached composition: horizontal logo/navigation, active Home
  underline, Services dropdown, dark contact pill, ivory left-to-image fade,
  "Turning Ideas Into Meaningful Solutions" headline, two CTAs, and four values.
- Header links: Home, About Us, Services, Our Work, Careers, Contact.
- Backgrounds use `Emerald Ribbon Emblem in Mist.png`, `landscape.png`, and `tree.png`, rotating
  every 6.5 seconds with a 1.6-second crossfade. Timing is an implementation choice.
- Rotation pauses for hidden tabs/open dialogs or the explicit Pause button.
  Manual selection restarts the 6.5-second interval without stopping autoplay.
  Reduced-motion settings remove the fade, but images still change automatically
  as requested by the owner after reporting a static background.
- Supporting dialogs make the navigation functional within this initial page.
  Service copy is draft; work examples are labeled illustrative; no vacancies
  are claimed. Contact provides only a local brief download with an explicit
  non-submission notice. Actual inquiry handling is still unimplemented.
- Production build and browser interaction checks passed at desktop/mobile sizes.
  Final visual acceptance and copy approval remain with the owner.

## 13. Change control

Button appearance (latest correction, 2026-10-30): owner rejected circular arrow
badges. CTAs now use clean text-only labels with balanced padding; decorative
arrow badges are removed. Preserve the smooth Roomsy-inspired hover behavior.

Hover behavior (latest 2026-10-30): owner supplied https://roomsy-pk.vercel.app/
as the motion reference because the previous treatment was not smooth. Browser
inspection found 300ms cubic-bezier(.4,0,.2,1) transitions and uniform 1.05 CTA
scaling. Retami now uses those values, subtle navbar highlight fades/underlines,
and no arrow spin or oversized stretching. The explicitly requested smooth
micro-interactions retain 300ms transitions in reduced-motion mode; slideshow
fades and unrelated animations still respect reduced motion. Keyboard feedback
and disabled-state handling remain.
Feature labels use a unified translucent forest panel with ivory text; headline
and body contrast were strengthened while preserving the transparent navbar and
the unmodified first-slide artwork.

Slide-specific hero styling (updated 2026-10-30): no added white gradient on any
slide. Show the Emerald Ribbon Emblem in Mist artwork's original lighting,
matching the owner's latest reference, at desktop and mobile sizes. Landscape
and tree retain their subtle dark tint and light text. This supersedes the
earlier requirement for a white wash on the first image.

Latest navbar direction (2026-10-30): use the owner's second, rounded inset
navbar reference for its shape and layout, with a transparent background,
soft-sage contact button, and thin border. Text adapts to the background slide.
The earlier ivory/pale-mint navbar fill was explicitly superseded.
Use the latest supplied `Logo- name.png` combined logo (`assets.brandLockup`)
and `Logo.png` R mark (`assets.brandMark`) for compact layouts. These replace
the earlier icon and typed wordmark. Do not add a white rectangular backing.
This supersedes the prior full-width,
slide-dependent navbar styling.

Viewport-fit requirement: the landing page must fit the screen without page
scrolling at normal desktop/mobile sizes. Use height-responsive spacing and type;
keep all hero content and slide controls visible. Verified across eight viewport
sizes from 320x568 through 1920x1080, including short desktop/landscape windows.

Record new owner requirements here with clear status and preserve their context
in `track.md`. Mark replaced requirements as superseded and explain why. Keep
planned, implemented, and verified states distinct. Latest explicit owner
instructions take precedence over older proposals or assumptions.

## Latest scope update - 2026-10-30

Owner approved the hero and requested the next section and matching logo hover.
Implemented a services section with AI Engineering, Workflow Automation and
Software Development tabs. These categories and descriptions are implementation
drafts pending content review. Use the existing green palette and vanilla CSS,
responsive layout, keyboard-operable tabs and clear focus states.
Logo hover/focus uses the same 300ms easing and 1.05 scale as the buttons.
The earlier no-scroll requirement now applies to the hero itself; the full page
intentionally scrolls to the newly requested section below it.

## Approved services structure and custom scope - 2026-10-30

Replace the earlier three-category draft with six categories:
1. AI Engineering & Automation
2. Websites, SaaS & Mobile Apps
3. CRM & Marketing Automation (including GoHighLevel)
4. SEO & Digital Growth
5. Branding, Motion & Video
6. AI Creative Production

Related capabilities belong inside these categories, not extra homepage cards.
Owner requested an additional custom-scope invitation for projects outside the
listed services. Implemented: Your idea. A custom solution. Let's talk opens the
existing contact dialog. Contact delivery is still pending; current brief saving
is local only and must never be presented as a sent enquiry.

### Services heading refinement - 2026-10-30
Owner requested stronger identification of the services section. Use Our Services
as the prominent section heading; retain the previous headline as a supporting
tagline. Implemented in the existing brand palette and responsive type scale.

### Capability prominence - 2026-10-30
Service offerings inside each panel must be prominent and readable, not tiny
pills. Implemented larger 16-18px labels in padded two-column blocks, stacking
on mobile, with stronger contrast against the forest panel.

### Technology section - 2026-10-30
Approved: a compact technology section between Hero and Our Services, with two
smoothly scrolling rows, soft edge fades and the forest/sage palette. Heading:
The technology behind your next idea. Label: Technologies we work with.
Do not imply formal partnerships. Use local assets, pause controls, hover pause
and static wrapped rows under reduced-motion preferences. Implemented in
src/components/Technologies/ with colocated TSX and vanilla CSS.

### Technology reference refinement - 2026-10-30
Original brand colors replace sage recoloring. Expand coverage (33 technologies
implemented) and animate both rows continuously left to right. Hover/focus must
not stop the rows. Retain manual pause/play and reduced-motion static layout.
Reference supplied by owner: https://www.quantixx.ai/.

### Reference animation match - 2026-10-30
Latest owner request supersedes previous motion direction/timing: match Quantixx's
30-second linear infinite loops, top row leftward and bottom row rightward,
with per-row hover pause. Preserve manual pause and reduced-motion accessibility.

### Explicit technology motion preference - 2026-10-30
Owner's reduced-motion device showed static wrapped logos. Owner explicitly
requested animation. Keep the two continuous rows animated even under the OS
reduced-motion setting, scoped only to this component. Keep the pause control
visible and functional. Supersedes the static technology fallback.

### Light technology strip and performance - 2026-10-30
Owner requested removal of the pause button, light background and efficient motion.
Use pale mint with forest text and original logo colors. Keep transform-only CSS
animation, pause offscreen/hidden tabs, and avoid frame-by-frame JavaScript updates.
Implemented; replaces previous visible manual pause control requirement.

### Why Retami section - 2026-10-30
Owner approved a section after Services explaining one connected team, solutions
built around the business, and support from idea through launch and improvements.
Implemented responsive split layout with an existing brand image, three numbered
reasons and a CTA opening the existing project-brief dialog. Use the official
palette and vanilla CSS; avoid unsupported results or testimonial claims.

### Supplied Why Retami background - 2026-10-30
Use the owner's why retami bg.png as the full-section decorative background.
Registered in assets.js as whyRetamiBackground; keep content readable above it.

### Full-width Why Retami redesign - 2026-10-30
Owner rejected the separate left image after adding a full-section background.
Remove that visual. Use a full-width heading, three prominent reason cards and
contact CTA over why retami bg.png. Preserve fine background lines without extra
lossy compression. Responsive cards replace the previous split layout.

### Heading and experience statement - 2026-10-30
Use WHY RETAMI? as the large main section heading. Owner supplied 12 years of
experience; display this prominently on the landing hero. Do not infer a company
founding date or claim 12 years specifically in generative AI.

### Section heading style - 2026-10-30
Remove right-side introductory paragraphs beside section headings. Applies to
Services and Why Retami and guides future sections. Keep heading/tagline layouts
simple; substantive descriptions belong within the section content.

### Experience prominence - 2026-10-30
Make the owner-supplied 12 years statement a prominent high-contrast hero badge.
Mention experience differently in Why Retami: A dozen years of experience.
A considered approach to what comes next. Place below the heading, not in a
right-side introduction. Preserve hero viewport fit.

### Plain experience copy - 2026-10-30
Replace the Why Retami experience callout with a simple paragraph, without a box,
border or eyebrow. Discuss 12 years of building digital products, client
satisfaction and helping businesses grow revenue without invented results.
Supersedes the styled experience callout from step 38.

### Client Results carousel - 2026-10-31
Owner requested six cards matching the supplied carousel layout. Implemented
centered active card, side previews and manual navigation in Retami colors.
Current content is clearly marked illustrative, not real client results or
quotes. Replace with owner-supplied approved evidence when available.

### Who We Help / How We Work - 2026-10-31
Owner approved four audience groups and a compact process blended into the same
section. Implemented after Client Results: Startups, Growing Businesses,
Ecommerce Brands and Agencies, followed by Understand > Shape > Build > Launch
& support. Use responsive connected steps, official colors and vanilla CSS.
Do not add a separate homepage portfolio; owner has a separate page for projects.

### Closing CTA - 2026-10-31
Owner requested the final homepage content section based on the supplied CTA
reference, with an original Retami design. Implemented forest/sage panel with
static ribbon artwork, project conversation CTA and Services link. Do not copy
unverified scarcity, response-time, office, client-count or booking claims.
Footer remains separate outstanding work. Existing contact dialog is local-only.

### Who We Help closing row removed - 2026-10-31
Remove the sentence and contact button below How We Work inside Who We Help.
The dedicated ClosingCTA section provides the final project invitation.

### Why Retami closing row removed - 2026-10-31
Remove the sentence and CTA beneath the reason cards. Keep the dedicated final
ClosingCTA as the main closing project invitation.

### Footer - 2026-10-31
Owner requested Roomsy-inspired footer aesthetics. Implemented original Retami
footer with brand, grouped navigation, capabilities, 12-year experience, copyright,
back-to-top and oversized fading wordmark. Use real working destinations only.
Public email/phone/social links await owner details; no invented contacts, social
accounts, trust claims or legal links. Portfolio/careers currently open existing
dialog content until corresponding routes are implemented.

### Public contact details - 2026-10-31
Owner-confirmed email: hammadfiver5@gmail.com.
Owner-confirmed telephone: +44 7877 195925.
Display both in the footer with clickable mailto/tel links. Social URLs pending.

### About page - 2026-10-31
Owner approved dedicated /about using their supplied About Retami Limited copy.
Key owner-supplied facts: 12 years of experience and more than 800 projects delivered.
Lead: Experience that shapes ideas into impact. Closing: Your ambition. Our
experience. Built into every detail. Cover technology/design/storytelling,
breadth of expertise, listening, technical execution, clarity and purposeful work.
Implemented responsive editorial sections, existing brand imagery, shared navbar
and footer, correct About active state, direct public contact links and metadata.
Homepage About Us/Learn More and footer About us navigate to the new page.

### Homepage testimonial drafts - 2026-10-31
Rename Client Results presentation to Client Testimonials. Owner supplied Ahmed R
and authorised five placeholder names for later editing. Six sample quote cards
implemented. Quotes and the five additional identities are fictional draft content
and must remain clearly labelled until replaced with approved client feedback.

### Testimonial attribution cleanup - 2026-10-31
Remove the repeated draft-feedback line below names. Retain existing sample badges
and section notice while the quotes remain draft content.

### Consistent button animation - 2026-10-31
All buttons and button-like links across the website must use the landing page
motion: smooth 300ms easing, 1.05 hover/keyboard-focus scale, .98 pressed scale.
Disabled controls must not grow. This shared rule applies to future pages too.
Owner's explicit smooth micro-interaction preference persists under reduced motion.

### Contact page - 2026-10-31
Implemented dedicated /contact with supplied public email/phone, project enquiry
form, service/custom-scope selection, optional company/timeline and next steps.
Contact entry points now navigate to this route. Until email backend configuration,
form prepares a local email draft with review/copy/open-email controls. Explicitly
state that nothing is sent until the visitor sends from their email application.
Do not present a submitted-success state without real delivery. Preserve field
validation, responsive layout, accessible labels and shared button motion.

### WhatsApp - 2026-10-31
Provide WhatsApp chat links on Contact and the shared footer targeting
https://wa.me/447877195925, using the owner's supplied UK contact number.

### Current services dropdown - 2026-10-31
Navbar Services must show all six approved categories with working links that
select the corresponding homepage service panel. Include custom-project contact
link. Supersedes the original three-item AI/automation/software dropdown.

### Browser tab icon - 2026-10-31
Use the supplied transparent R logo PNG as the site-wide browser tab icon.
Implemented through src/app/icon.png and verified on all three existing pages.

### Hero feature background fix - 2026-10-31
Use a single shared background behind all four hero values. No separate darker
backgrounds or padding offsets behind People Focused and Lasting Impact.

### MVP review - 2026-10-31
Current Home/About/Contact scope is sufficient for brochure MVP review; avoid
adding sections solely for completeness. Evidence and remaining content/integration
work are recorded in MVP_REVIEW.md. Sample testimonials, email-client-based
submission and illustrative portfolio preview must remain clearly represented.

## GitHub and deployment handoff (2026-11-01)

- Approved source repository: https://github.com/HammadAlix/Retami-Limited.
- Owner will deploy on Vercel; application lives at the repository root.
- Use Next.js preset, npm run build and default output directory.
- No environment variables required for the current email-draft contact flow.
