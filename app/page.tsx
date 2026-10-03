import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Check, MapPin, ShieldCheck, Star } from "lucide-react";
import { Footer, Header, QuoteForm } from "./components";
import { ReviewReel } from "./review-reel";
import { serviceCategories } from "./services/data";

const areas = [
  { name: "Kilmore", slug: "kilmore" },
  { name: "Wallan", slug: "wallan" },
  { name: "Seymour", slug: "seymour" },
  { name: "Broadford", slug: "broadford" },
  { name: "Lancefield", slug: "lancefield" },
  { name: "Pyalong", slug: "mitchell-shire" },
  { name: "Wandong", slug: "mitchell-shire" },
  { name: "Beveridge", slug: "mitchell-shire" },
];

const reviews = [
  ["Brilliant job. Professional and thorough.", "Mac"],
  ["Great communication, punctual, professional and a very good job cleaning the gutters and downpipes.", "A Kennedy"],
  ["Exceptional service and quality, with before and after photos validating a job well done.", "Russell Sciberras"],
  ["Simon did an excellent job with our gutters. Everything was done perfectly and professionally. He was friendly, reliable, and easy to deal with.", "Akashdeep Singh"],
  ["Simon is prompt in responding to enquiries, thorough and very professional. We were very happy with the results and would not hesitate in recommending him.", "Sarah Mihailovic"],
  ["So professional and pleasant. This is my third time with Simon because ever since the first clean they are giving me better output and making my bills cheaper.", "Simone Ricco"],
  ["Both times, I found him to be very professional and he takes pride in his work. I would highly recommend him and will be calling on his services in the future.", "Stephen Bryant"],
  ["They’ve done a very, very good job! They are also very honest people. If this had 10 stars I would happily give more.", "Hung Van Pham"],
  ["Simon did a fantastic cleaning job on my solar panels. They now look brand new and the price was good. Will use Simon for future cleaning jobs.", "John"],
  ["Simon was professional and his attention to detail was outstanding. We would highly recommend SS Exterior Services.", "Brett Collins"],
  ["On time, correct quote, cleaned everything out and cleaned up at the end. Very happy with Simon’s work. I will strongly recommend him to others.", "Neen Franks"],
  ["Excellent job on gutters and solar panels. Worked hard all day. Will recommend Simon to everyone.", "Janina"],
  ["Absolutely fantastic job and reasonably priced. Did our whole property for the price some companies quoted for just the front.", "Daniel"],
] as const;

const googleReviewsUrl = "https://www.google.com/maps/search/?api=1&query=SS%20Exterior%20Services%20Kilmore%20Victoria";

export default function Home() {
  return (
    <>
      <Header />
      <main className="home-v2">
        <section className="hv2-hero">
          <div className="shell hv2-hero-content">
            <div className="hv2-hero-copy reveal">
              <h1>Exterior cleaning. <em>Done right.</em></h1>
              <p>Professional house washing, roof cleaning and pressure washing that cuts through grime and brings back street appeal.</p>
              <div className="hv2-actions">
                <a className="hv2-button" href="#quote">Get a free quote <ArrowRight size={19} /></a>
                <a className="hv2-button hv2-button-ghost" href="#services">Explore services</a>
              </div>
              <div className="hv2-google"><span className="hv2-stars">★★★★★</span><strong>5.0 on Google</strong><span>60 local reviews</span></div>
            </div>
          </div>
          <div className="shell hv2-trust-strip" data-motion-group>
            <article><Star aria-hidden="true" /><div><strong>Top-rated local service</strong><span>Trusted across the region</span></div></article>
            <article><ShieldCheck aria-hidden="true" /><div><strong>$20m insured</strong><span>Work completed with care</span></div></article>
            <article><BadgeCheck aria-hidden="true" /><div><strong>The right method</strong><span>Every surface assessed</span></div></article>
            <article><MapPin aria-hidden="true" /><div><strong>Kilmore based</strong><span>Mitchell Shire and beyond</span></div></article>
          </div>
        </section>

        <section className="hv2-intro section shell">
          <div>
            <h2>Proper methods.<br /><em>Standout results.</em></h2>
          </div>
          <div className="hv2-intro-copy">
            <p>Built-up dirt, mould and organic growth can make a good property look tired. SS Exterior Services uses professional equipment and a surface-specific approach to restore a cleaner, sharper finish.</p>
            <p>From the first quote to the final rinse, you get clear communication, careful preparation and work we are proud to put our name on.</p>
            <Link className="hv2-text-link" href="/about">Meet SS Exterior Services <ArrowRight size={17} /></Link>
          </div>
        </section>

        <div className="hv2-transition hv2-transition-deep" aria-hidden="true"><span /></div>

        <section className="hv2-services section" id="services">
          <div className="shell">
            <div className="hv2-section-head">
              <div><h2>Every surface deserves<br /><em>the right approach.</em></h2></div>
              <p>A driveway, rendered wall, Colorbond roof and timber deck should never be cleaned the same way. We assess the material and condition before choosing the safest, most effective method.</p>
            </div>
            <div className="hv2-service-grid" data-motion-group>
              {serviceCategories.map((category) => (
                <Link className="hv2-service-card" href={category.href} key={category.slug}>
                  <h3>{category.title}</h3>
                  <p>{category.summary}</p>
                  <ul>{category.items.map(item=><li key={item}>{item}</li>)}</ul>
                  <span className="hv2-card-link">Explore services <ArrowRight size={17} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className="hv2-transition hv2-transition-white" aria-hidden="true"><span /></div>

        <section className="hv2-showcase section shell">
          <div className="hv2-showcase-copy">
            <h2>A proper result starts before the cleaning does.</h2>
            <p>Good exterior cleaning is about more than powerful equipment. We consider the surface, coating, access, drainage, plants, fixtures and surrounding areas before work begins.</p>
            <ul><li><Check size={18} /> Surface-specific cleaning</li><li><Check size={18} /> Careful property protection</li><li><Check size={18} /> Before and after photos</li></ul>
            <a className="hv2-button hv2-button-dark" href="#quote">Book your clean <ArrowRight size={19} /></a>
          </div>
          <div className="hv2-results-lattice" data-motion-group>
            {[
              ["/images/uploads/house-washing/01.jpg", "House washing before and after", "House washing"],
              ["/images/uploads/roof-softwashing/01.jpg", "Roof softwashing before and after", "Roof softwashing"],
              ["/images/uploads/roof-softwashing/02.jpg", "Second roof softwashing before and after", "Roof softwashing"],
              ["/images/uploads/house-washing/02.jpg", "Second house washing before and after", "House washing"],
            ].map(([src, alt, label]) => <figure key={src}><Image src={src} alt={alt} fill sizes="(max-width: 600px) 48vw, (max-width: 900px) 42vw, 28vw"/><figcaption>{label}</figcaption></figure>)}
          </div>
        </section>

        <div className="hv2-transition hv2-transition-soft" aria-hidden="true"><span /></div>

        <section className="hv2-process section">
          <div className="shell">
            <div className="hv2-section-head dark-head"><div><h2>Three steps to a<br /><em>cleaner property.</em></h2></div></div>
            <div className="hv2-steps" data-motion-group>
              {[
                ["01", "Tell us about the job", "Send us the service you need, your location and a few details about the property. We’ll respond promptly and organise your free quote."],
                ["02", "We assess and explain", "We assess each surface, its condition, access and surrounding areas. You’ll receive the recommended methods, a clear scope and straightforward pricing."],
                ["03", "See the transformation", "We complete the work carefully, check the finished areas and walk you through the result. Before-and-after photos let you see the transformation for yourself."],
              ].map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <div className="hv2-transition hv2-transition-black" aria-hidden="true"><span /></div>

        <section className="hv2-reviews section">
          <div className="shell">
            <div className="hv2-review-heading"><div><h2>Local people.<br /><em>Real results.</em></h2></div><div className="hv2-score"><strong>5.0</strong><span>★★★★★</span><small>60 Google reviews</small></div></div>
            <ReviewReel reviews={reviews} googleUrl={googleReviewsUrl} />
          </div>
        </section>

        <section className="hv2-areas section shell">
          <div><h2>Local knowledge.<br /><em>Regional reach.</em></h2><p>Based in Kilmore and regularly working across Mitchell Shire and surrounding communities.</p></div>
          <div className="hv2-area-list" data-motion-group>{areas.map(area => <Link href={`/service-areas/${area.slug}`} key={area.name}><span>{area.name}</span><ArrowRight size={18} /></Link>)}</div>
        </section>

        <section className="hv2-quote section" id="quote">
          <div className="shell hv2-quote-grid">
            <div className="hv2-quote-copy"><h2>Ready to bring back the <em>street appeal?</em></h2><p>Tell us what needs cleaning and where you’re located. Simon will review the details and get back to you with a straightforward, obligation-free quote.</p><a href="tel:0447130743"><small>Prefer to call?</small>0447 130 743</a></div>
            <div className="hv2-form-wrap"><QuoteForm /></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
