import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer, Header, QuoteBand } from "../components";
import { allServices, serviceCategories } from "./data";
import { ServiceHashScroll } from "./hash-scroll";

export const metadata:Metadata={
  title:"Exterior Cleaning Services",
  description:"Explore house and exterior washing, roof, gutter and solar care, pressure cleaning and surface sealing across Kilmore and Mitchell Shire.",
  alternates:{canonical:"/services"},
};

export default function ServicesPage(){
  return <><Header/><main><ServiceHashScroll/>
    <section className="page-hero"><div className="shell"><p className="eyebrow">Our services</p><h1>Everything outside.<br/>Properly cared for.</h1><div className="page-hero-copy"><p>Choose the area that needs attention. We’ll assess the surface, recommend the appropriate method and provide a clear quote.</p><a className="button" href="#services-list">Explore services <span>→</span></a></div></div></section>
    <section className="service-overview section shell" id="services-list">
      <div className="service-overview-intro"><p className="eyebrow">Three clear service groups</p><h2>Start with what you need cleaned.</h2><p>You do not need to know whether a surface needs pressure, softwashing or a treatment. Tell us what needs attention and we’ll recommend the right approach.</p></div>
      <div className="service-category-list">
        {serviceCategories.map((category)=><article id={category.slug} key={category.slug}>
          <header className="service-category-copy"><div><h2>{category.title}</h2><p>{category.summary}</p></div></header>
          <div className="service-category-links">{category.serviceSlugs.map(slug=>{const service=allServices.find(item=>item.slug===slug);return service?<Link href={`/services/${service.slug}`} key={slug}><span><strong>{service.shortTitle}</strong><small>{service.summary}</small></span><ArrowRight size={18}/></Link>:null})}<Link className="category-quote-link" href="/contact">Request a free quote <ArrowRight size={18}/></Link></div>
        </article>)}
      </div>
    </section>
    <section className="service-audiences section"><div className="shell"><p className="eyebrow light">Properties we service</p><h2>Residential, commercial, strata and Body Corporate.</h2><p>Book one service or combine several areas into a coordinated exterior clean. Pre-sale and ongoing maintenance work can be scoped around your property.</p></div></section>
    <QuoteBand/>
  </main><Footer/></>;
}
