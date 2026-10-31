# Retami Limited — MVP review

Reviewed 2026-10-31 (Asia/Karachi).

## Verdict

The current three-page site is sufficient for a brochure MVP/design review.
No additional homepage sections are necessary now. It is not yet a complete
portfolio or an automatically submitting lead-generation application.

## Checked

- Production build and TypeScript validation.
- Home, About and Contact at 1920, 1440, 768, 390 and 320px: no horizontal overflow;
  one main heading per page, page descriptions and no browser runtime errors.
- Image loading, page anchors, mobile navigation and Escape handling.
- Services dropdown/deep links and keyboard-controlled service tabs.
- Six-card testimonial navigation and wraparound.
- Contact required-field validation, draft generation, clipboard success and
  clipboard-denied fallback. No email or WhatsApp message was sent during testing.
- WhatsApp URL targets the supplied UK number; account availability is unverified.
- Health endpoint returns 200; unknown pages return 404.

## Fixed during review

- About/Contact Our Work buttons previously led to testimonials. They now open
  the homepage's existing, explicitly illustrative project-preview dialog.
- Restored link semantics for the email-draft link while preserving button styling
  and shared hover behavior.

## Outstanding

1. **Testimonials:** all six quotes are generated drafts. Ahmed R was supplied
   by the owner; the other five names are fictional placeholders. Keep the visible
   sample labels until genuine approved feedback replaces them. Do not treat them
   as client evidence.
2. **Contact delivery:** form creates an email draft, not a server submission.
   Users must send in their email application or use direct email, phone or
   WhatsApp. Automatic delivery requires an email provider/backend configuration.
3. **Portfolio:** the owner plans a separate page, but no portfolio route or real
   case studies exist yet. Our Work currently shows an honest concept preview.
4. **Careers:** no vacancies supplied; current dialog states this clearly.
5. **Launch setup:** no production domain or hosting configuration was provided.
   Canonical URLs, sitemap and social sharing metadata should be configured with
   the actual public URL when deploying. Social profile URLs remain unspecified.
6. **Content sign-off:** 12 years and 800+ projects are owner-supplied figures;
   they have not been independently verified.

## Limits of this review

Browser checks used Chromium/Edge with emulated viewport sizes. This was not a
physical-device Safari/Firefox test, a formal accessibility audit or a scored
performance benchmark. Email-client handoff and WhatsApp account operation were
not exercised externally. The temporary production QA server was stopped; the
existing development server was left running.
