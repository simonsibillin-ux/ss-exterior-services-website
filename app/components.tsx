"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { services } from "./services/data";

declare global { interface Window { dataLayer?: Record<string, unknown>[] } }

export function Header(){
  return <header className="site-header"><div className="shell nav-wrap">
    <Link className="brand" href="/"><img src="/images/logo.png" alt="SS Exterior Services" /></Link>
    <nav className="desktop-nav" aria-label="Main navigation"><Link href="/">Home</Link><Link href="/about">About</Link><div className="nav-dropdown"><span>Services⌄</span><div>{services.map(s=><Link key={s.slug} href={`/services/${s.slug}`}>{s.shortTitle}</Link>)}</div></div><Link href="/service-areas">Areas</Link><Link href="/resources">Resources</Link><Link href="/contact">Contact</Link></nav>
    <a className="nav-phone" href="tel:0447130743"><small>Call anytime</small>0447 130 743</a>
    <details className="mobile-menu"><summary aria-label="Open navigation menu">☰</summary><div><Link href="/">Home</Link><Link href="/about">About</Link><strong>Services</strong>{services.map(s=><Link key={s.slug} href={`/services/${s.slug}`}>{s.shortTitle}</Link>)}<Link href="/service-areas">Service Areas</Link><Link href="/resources">Resources</Link><Link href="/contact">Contact</Link></div></details>
  </div></header>
}

export function Footer(){return <footer className="footer"><div className="shell footer-grid">
  <div className="footer-brand"><img src="/images/logo.png" alt="SS Exterior Services" /><p>Surface-aware exterior cleaning across Kilmore, Mitchell Shire and surrounding regional communities.</p><a className="footer-cta" href="/contact">Request a free quote →</a></div>
  <div><h3>Services</h3>{services.map(s=><Link key={s.slug} href={`/services/${s.slug}`}>{s.shortTitle}</Link>)}</div>
  <div><h3>Explore</h3><Link href="/about">About us</Link><Link href="/service-areas">Service areas</Link><Link href="/resources">Resources</Link><Link href="/contact">Contact</Link><Link href="/admin">Website admin</Link></div>
  <div><h3>Contact</h3><a href="tel:0447130743">0447 130 743</a><a href="mailto:ssexteriorservices@outlook.com">ssexteriorservices@outlook.com</a><span>Kilmore, Victoria 3764</span><span>Available 24 hours</span></div>
  </div><div className="shell footer-bottom"><span>© 2026 SS Exterior Services · ABN 93 572 816 955</span><div><Link href="/privacy-policy">Privacy</Link><Link href="/terms">Website Terms</Link></div></div></footer>}

export function QuoteForm({compact=false,defaultService=""}:{compact?:boolean;defaultService?:string}){
  const [state,setState]=useState<"idle"|"sending"|"sent"|"error">("idle");
  const [error,setError]=useState("");
  async function submit(event:FormEvent<HTMLFormElement>){event.preventDefault();setState("sending");setError("");const form=new FormData(event.currentTarget);const payload=Object.fromEntries(form.entries());
    try{const response=await fetch("/api/enquiries",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});const result=await response.json();if(!response.ok)throw new Error(result.error||"Could not send your enquiry.");setState("sent");window.dataLayer?.push({event:"generate_lead",service:payload.service,location:payload.location});}
    catch(err){setError(err instanceof Error?err.message:"Could not send your enquiry.");setState("error")}}
  if(state==="sent")return <div className="form-success" role="status"><span>✓</span><strong>Thanks—your enquiry is on its way.</strong><p>Simon will be in touch shortly to discuss the property and organise your free evaluation.</p><Link href="/thank-you">What happens next →</Link></div>;
  return <form className={`quote-form ${compact?"compact":""}`} onSubmit={submit}>
    <input className="honeypot" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    <input type="hidden" name="source" value="Website" />
    <div className="field-row"><label><span>Name *</span><input name="name" required autoComplete="name" placeholder="Your name" /></label><label><span>Phone *</span><input name="phone" required inputMode="tel" autoComplete="tel" placeholder="04xx xxx xxx" /></label></div>
    {!compact&&<div className="field-row"><label><span>Email</span><input name="email" type="email" autoComplete="email" placeholder="you@email.com" /></label><label><span>Suburb / location *</span><input name="location" required autoComplete="address-level2" placeholder="Your suburb" /></label></div>}
    <label><span>Service *</span><select name="service" required defaultValue={defaultService}><option value="" disabled>Select a service</option>{services.map(s=><option key={s.slug} value={s.shortTitle}>{s.shortTitle}</option>)}</select></label>
    {!compact&&<label><span>Tell us about the job</span><textarea name="message" rows={4} placeholder="Surface, approximate size, access and what you would like cleaned" /></label>}
    {!compact&&<label className="consent"><input type="checkbox" required name="consent" value="yes" /><span>I agree that SS Exterior Services may contact me about this enquiry.</span></label>}
    {state==="error"&&<p className="form-error" role="alert">{error} You can also call <a href="tel:0447130743">0447 130 743</a>.</p>}
    <button className="button form-button" disabled={state==="sending"} type="submit">{state==="sending"?"Sending…":"Request my free quote"}<span>→</span></button>
    <small className="privacy-note">Your details are used only to respond to this enquiry.</small>
  </form>
}

export function PageHero({eyebrow,title,children}:{eyebrow:string;title:string;children:React.ReactNode}){return <section className="page-hero"><div className="shell"><p className="eyebrow light">{eyebrow}</p><h1>{title}</h1><div className="page-hero-copy">{children}</div></div></section>}

export function QuoteBand({service=""}:{service?:string}){return <section className="quote-section section"><div className="shell quote-grid"><div><p className="eyebrow light">Free, straightforward quote</p><h2>Let’s get your property sorted.</h2><p>Tell us what needs cleaning and where you’re located. Simon will review the details and get back to you.</p><a className="quote-phone" href="tel:0447130743"><small>Prefer to call?</small>0447 130 743</a></div><QuoteForm defaultService={service}/></div></section>}
