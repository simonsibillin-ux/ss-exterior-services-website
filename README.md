# SS Exterior Services website

Production website for SS Exterior Services, built with Next.js for Vercel and connected to the existing CRM/Supabase backend.

## Before the first deployment

1. Create a GitHub repository and connect it to Vercel.
2. Add the variables listed in `.env.example` to Vercel. Reuse `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` from the CRM project.
3. Run the SQL migrations in `supabase/migrations` against the existing Supabase project. This creates the editable website-content table and owner-only policies.
4. In Supabase Auth, add the deployed website URL and `https://ssexteriorservices.com.au/auth/callback` to the redirect URL allowlist.
5. Add `RESEND_API_KEY` after verifying `ssexteriorservices.com.au` in Resend. Enquiries still enter the CRM if Resend is not configured; Resend provides the additional owner email.
6. Add the custom domain in Vercel only after preview testing is complete.

## Website admin

Visit `/admin`. Access is restricted to passwordless links sent to `ssexteriorservices@outlook.com`. The dashboard manages page, service, area, post, project, testimonial and settings records. Published posts appear in Resources, and published About/service overrides replace the built-in fallback copy.

## Enquiries

Website forms submit server-to-server to the existing CRM `/api/lead` endpoint. The CRM handles client matching, creates a pending booking/lead and runs its existing lead-response workflow. The website optionally sends a separate owner email through Resend.

## SEO included

Per-page metadata, canonical URLs, XML sitemap, robots rules, redirects from old WordPress paths, LocalBusiness/WebSite/Service/FAQ/BlogPosting structured data, semantic headings, local service-area pages, resource articles, social preview metadata and noindex rules for admin/thank-you routes.
