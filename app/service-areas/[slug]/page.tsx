import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header, PageHero, QuoteBand } from "../../components";
import { serviceAreas } from "../../content";
import { allServices, serviceCategories } from "../../services/data";

export function generateStaticParams() { return serviceAreas.map((area) => ({ slug: area.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = serviceAreas.find((item) => item.slug === slug);
  if (!area) return {};
  return { title: `Exterior Cleaning ${area.name}`, description: `House washing, roof cleaning, pressure washing and exterior cleaning in ${area.name}. Local service from SS Exterior Services.`, alternates: { canonical: `/service-areas/${slug}` } };
}

export default async function Area({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = serviceAreas.find((item) => item.slug === slug);
  if (!area) notFound();
  const areaServices = serviceCategories.flatMap((category) => category.serviceSlugs.map((serviceSlug) => allServices.find((service) => service.slug === serviceSlug)).filter((service): service is NonNullable<typeof service> => Boolean(service)));
  const schema = { "@context": "https://schema.org", "@type": "Service", name: `Exterior Cleaning ${area.name}`, provider: { "@id": "https://ssexteriorservices.com.au/#business" }, areaServed: { "@type": "City", name: area.name }, hasOfferCatalog: { "@type": "OfferCatalog", itemListElement: areaServices.map((service) => ({ "@type": "Offer", itemOffered: { "@type":"Service", name: `${service.shortTitle} in ${area.name}` } })) } };

  return <><Header/><main><PageHero title={`Exterior Cleaning in ${area.name}`}><p>{area.intro}</p></PageHero><section className="area-service-section section shell"><div className="area-service-intro"><h2>Exterior cleaning services in {area.name}.</h2><p>{area.detail}</p><p>Choose the part of your property that needs attention. Each service is assessed around the surface, access and condition before we recommend a method.</p></div><div className="area-service-groups">{serviceCategories.map((category) => <article key={category.slug}><header><h2>{category.title}</h2><p>{category.summary}</p></header><div>{category.serviceSlugs.map((serviceSlug) => { const service = allServices.find((item) => item.slug === serviceSlug); return service ? <Link key={service.slug} href={`/services/${service.slug}`}><span><strong>{service.shortTitle}</strong><small>{service.summary}</small></span><b>→</b></Link> : null; })}</div></article>)}</div></section><QuoteBand/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/></main><Footer/></>;
}
