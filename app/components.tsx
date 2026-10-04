"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useId, useState } from "react";
import { allServices, enquiryServices, serviceCategories } from "./services/data";

declare global { interface Window { dataLayer?: Record<string, unknown>[] } }

export function Header() {
  return <header className="site-header">
    <div className="header-top"><div className="shell header-top-inner">
      <div className="header-local"><span>Kilmore, Victoria</span><a href="mailto:info@ssexteriorservices.com.au">info@ssexteriorservices.com.au</a></div>
      <div className="header-contact"><a href="tel:0447130743">0447 130 743</a><Link href="/contact">Get a free quote</Link></div>
    </div></div>
    <div className="header-main"><div className="shell nav-wrap">
      <Link className="brand" href="/" aria-label="SS Exterior Services home"><Image src="/images/logo.png" alt="SS Exterior Services" width={510} height={330} priority /></Link>
      <nav className="desktop-nav" aria-label="Main navigation">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <div className="nav-dropdown">
        <button type="button" aria-haspopup="true">Services <span aria-hidden="true">▾</span></button>
        <div className="nav-dropdown-panel">{serviceCategories.map(category => <div className="nav-service-category" key={category.slug}>
          <Link className="nav-category-link" href={category.href}>{category.title}<span aria-hidden="true">›</span></Link>
          <div className="nav-service-submenu">{category.serviceSlugs.map(slug=>{const service=allServices.find(item=>item.slug===slug);return service?<Link key={slug} href={`/services/${slug}`}>{service.shortTitle}</Link>:null})}</div>
        </div>)}</div>
      </div>
      <Link href="/service-areas">Areas</Link>
      <Link href="/resources">Resources</Link>
      <Link href="/recent-activity">Recent activity</Link>
      <Link href="/contact">Contact</Link>
      </nav>
      <details className="mobile-menu"><summary aria-label="Open navigation menu"><span aria-hidden="true">☰</span></summary><div>
      <Link href="/">Home</Link><Link href="/about">About</Link><strong>Services</strong>
      {serviceCategories.map(category => <details className="mobile-service-group" key={category.slug}><summary>{category.title}<span aria-hidden="true">+</span></summary><div>{category.serviceSlugs.map(slug=>{const service=allServices.find(item=>item.slug===slug);return service?<Link key={slug} href={`/services/${slug}`}>{service.shortTitle}</Link>:null})}</div></details>)}
      <Link href="/service-areas">Service Areas</Link><Link href="/resources">Resources</Link><Link href="/recent-activity">Recent activity</Link><Link href="/contact">Contact</Link>
      </div></details>
    </div></div>
  </header>;
}

export function Footer() {
  return <footer className="footer"><div className="shell footer-grid">
    <div className="footer-brand"><Image src="/images/logo.png" alt="SS Exterior Services" width={510} height={330} /><p>Professional exterior cleaning across Kilmore, Mitchell Shire and surrounding communities.</p><Link className="footer-cta" href="/contact">Request a free quote</Link></div>
    <div><h3>Services</h3><Link href="/services">All services</Link>{serviceCategories.map(category => <Link key={category.slug} href={category.href}>{category.title}</Link>)}</div>
    <div><h3>Explore</h3><Link href="/about">About us</Link><Link href="/service-areas">Service areas</Link><Link href="/resources">Resources</Link><Link href="/recent-activity">Recent activity</Link><Link href="/contact">Contact</Link><Link href="/admin">Website admin</Link></div>
    <div><h3>Contact</h3><a href="tel:0447130743">0447 130 743</a><a href="mailto:info@ssexteriorservices.com.au">info@ssexteriorservices.com.au</a><span>Kilmore, Victoria 3764</span><span>Available 24 hours</span></div>
  </div><div className="shell footer-bottom"><span>© 2026 SS Exterior Services · ABN 93 572 816 955</span><div><Link href="/privacy-policy">Privacy</Link><Link href="/terms">Website Terms</Link></div></div></footer>;
}

export function QuoteForm({ defaultService = "" }: { compact?: boolean; defaultService?: string }) {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const defaultServiceMap:Record<string,string>={"House Washing":"House & Exterior Washing","Delicate Surface Softwashing":"House & Exterior Washing","Exterior Gutter, Fascia & Eave Washing":"Exterior Gutters, Fascia & Eaves","Fence Washing":"House & Exterior Washing","Roof Cleaning":"Roof Cleaning or Treatment","Roof Softwashing":"Roof Cleaning or Treatment","Roof Treatment":"Roof Cleaning or Treatment","Surface Pressure Washing":"Pressure Cleaning","Driveway, Concrete & Path Cleaning":"Pressure Cleaning","Paver & Pool Surround Cleaning":"Pressure Cleaning","Retaining Wall Cleaning":"Pressure Cleaning","Gutter Cleaning":"Internal Gutter Cleaning","Timber Cleaning & Restoration":"House & Exterior Washing"};
  const mappedDefault=defaultServiceMap[defaultService]||(enquiryServices.some(service=>service===defaultService)?defaultService:"");
  const [selectedServices, setSelectedServices] = useState<string[]>(mappedDefault ? [mappedDefault] : []);
  const [optionalOpen, setOptionalOpen] = useState(false);
  const optionalDetailsId = useId();

  function toggleService(service: string) {
    setSelectedServices(current => current.includes(service) ? current.filter(item => item !== service) : [...current, service]);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedServices.length) {
      setError("Please select at least one service.");
      setState("error");
      return;
    }
    setState("sending");
    setError("");
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    payload.service = selectedServices.join(", ");
    try {
      const response = await fetch("/api/enquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not send your enquiry.");
      setState("sent");
      window.dataLayer?.push({ event: "generate_lead", service: payload.service, location: payload.location });
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Could not send your enquiry.");
      setState("error");
    }
  }

  if (state === "sent") return <div className="form-success" role="status"><span>✓</span><strong>Thanks, your enquiry is on its way.</strong><p>Simon will be in touch shortly to discuss the property and organise your free evaluation.</p><Link href="/thank-you">What happens next</Link></div>;

  return <form className="quote-form" onSubmit={submit}>
    <input className="honeypot" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    <input type="hidden" name="source" value="Website" />
    <div className="field-row"><label><span>Name *</span><input name="name" required autoComplete="name" placeholder="Your name" /></label><label><span>Phone *</span><input name="phone" required inputMode="tel" autoComplete="tel" placeholder="04xx xxx xxx" /></label></div>
    <label><span>Suburb or location *</span><input name="location" required autoComplete="address-level2" placeholder="Your suburb" /></label>
    <fieldset className="service-selector"><legend>Select all services that apply *</legend><div>{enquiryServices.map(service => {
      const selected = selectedServices.includes(service);
      return <label className={selected ? "selected" : ""} key={service}><input type="checkbox" name="service" value={service} checked={selected} onChange={() => toggleService(service)} /><span>{service}</span></label>;
    })}</div></fieldset>
    <div className={`optional-details${optionalOpen ? " is-open" : ""}`}><button className="optional-summary" type="button" aria-expanded={optionalOpen} aria-controls={optionalDetailsId} onClick={() => setOptionalOpen(open => !open)}>Add email or job details <span aria-hidden="true">+</span></button><div id={optionalDetailsId} aria-hidden={!optionalOpen}><label><span>Email</span><input name="email" type="email" autoComplete="email" placeholder="you@email.com" tabIndex={optionalOpen ? 0 : -1} /></label><label><span>Tell us about the job</span><textarea name="message" rows={3} placeholder="Anything useful about access, size or the work required" tabIndex={optionalOpen ? 0 : -1} /></label></div></div>
    <label className="consent"><input type="checkbox" required name="consent" value="yes" /><span>I agree that SS Exterior Services may contact me about this enquiry.</span></label>
    {state === "error" && <p className="form-error" role="alert">{error} You can also call <a href="tel:0447130743">0447 130 743</a>.</p>}
    <button className="button form-button" disabled={state === "sending"} type="submit">{state === "sending" ? "Sending..." : "Request my free quote"}</button>
    <small className="privacy-note">Your details are used only to respond to this enquiry.</small>
  </form>;
}

export function PageHero({ title, children }: { eyebrow?: string; title: string; children: React.ReactNode }) {
  return <section className="page-hero"><div className="shell"><h1>{title}</h1><div className="page-hero-copy">{children}</div></div></section>;
}

export function QuoteBand({ service = "" }: { service?: string }) {
  return <section className="quote-section section"><div className="shell quote-grid"><div><h2>Let’s get your property sorted.</h2><p>Tell us what needs cleaning and where you’re located. Simon will review the details and get back to you.</p><a className="quote-phone" href="tel:0447130743"><small>Prefer to call?</small>0447 130 743</a></div><QuoteForm defaultService={service} /></div></section>;
}
