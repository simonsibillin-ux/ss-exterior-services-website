import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header, PageHero, QuoteBand } from "../../components";
import { serviceAreas } from "../../content";
import { allServices } from "../../services/data";

const areaServiceSlugs = ["house-washing-kilmore", "roof-softwashing-kilmore", "driveway-concrete-path-cleaning-kilmore", "gutter-cleaning-kilmore", "solar-panel-cleaning-kilmore"];
const areaServices = areaServiceSlugs.map((slug) => allServices.find((service) => service.slug === slug)).filter((service): service is NonNullable<typeof service> => Boolean(service));

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
  const schema = { "@context": "https://schema.org", "@type": "Service", name: `Exterior Cleaning ${area.name}`, provider: { "@id": "https://ssexteriorservices.com.au/#business" }, areaServed: { "@type": "City", name: area.name }, hasOfferCatalog: { "@type": "OfferCatalog", itemListElement: areaServices.map((service) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: service.shortTitle } })) } };

  return <><Header/><main><PageHero title={`Exterior Cleaning in ${area.name}`}><p>{area.intro}</p></PageHero><section className="local-area section shell"><article><h2>Methods suited to the property, not generic packages.</h2><p>{area.detail}</p><p>We begin with the surface, coating, access and surrounding environment. That allows us to recommend soft washing, controlled pressure, routine cleaning or a targeted treatment with realistic expectations.</p><h2>Priority services in {area.name}</h2><div className="local-services">{areaServices.slice(0, 3).map((service) => <Link key={service.slug} href={`/services/${service.slug}`}><span>{service.icon}</span><div><h3>{service.shortTitle}</h3><p>{service.summary}</p></div></Link>)}</div></article><aside>{areaServices.map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.shortTitle}<span>→</span></Link>)}</aside></section><QuoteBand/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/></main><Footer/></>;
}
