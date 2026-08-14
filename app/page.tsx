import Link from "next/link";
import Image from "next/image";
import { Footer, Header, QuoteForm } from "./components";
import { featuredProjects } from "./project-images";
import { services } from "./services/data";

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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-shade" />
          <div className="shell hero-grid">
            <div className="hero-copy reveal">
              <h1>A cleaner exterior.<br /><em>A better first impression.</em></h1>
              <p className="hero-lead">Specialist house washing, roof cleaning and surface pressure washing, supported by complete exterior maintenance across Kilmore and Mitchell Shire.</p>
              <div className="hero-actions">
                <a className="button" href="#quote">Get a free quote <span>→</span></a>
                <a className="text-link light-link" href="tel:0447130743">Call 0447 130 743</a>
              </div>
              <div className="trust-row">
                <span>✓ Fully equipped</span><span>✓ Quality workmanship</span><span>✓ 24/7 availability</span>
              </div>
            </div>
            <div className="hero-card reveal delay">
              <p className="eyebrow">Free quote</p>
              <h2>Tell us what needs cleaning.</h2>
              <QuoteForm />
            </div>
          </div>
          <a className="scroll-cue" href="#services" aria-label="Scroll to services">↓</a>
        </section>

        <section className="why-us section shell">
          <div><p className="eyebrow">Why choose us</p><h2>Local, careful and properly covered.</h2></div>
          <div className="why-us-grid">
            <article><strong>Local service</strong><p>Kilmore based and servicing Mitchell Shire and surrounding regional communities.</p></article>
            <article><strong>The right method</strong><p>Every surface is assessed before we select the equipment, pressure and treatment.</p></article>
            <article><strong>$20 million insured</strong><p>Covered by $20 million public liability insurance for greater peace of mind.</p></article>
            <article><strong>Clear communication</strong><p>Straightforward quoting, reliable arrival times and before and after photos.</p></article>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="shell">
            <div className="section-heading">
              <div><p className="eyebrow">What we do</p><h2>Every surface, sorted.</h2></div>
              <p>Our highest-priority specialties appear first, followed by the supporting maintenance services that complete the property.</p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <Link className={`service-card ${service.slug.includes("commercial") ? "commercial-card" : ""}`} href={`/services/${service.slug}`} key={service.slug}>
                  <h3>{service.shortTitle}</h3>
                  <p>{service.summary}</p>
                  <span className="card-link">Explore service <b>→</b></span>
                </Link>
              ))}
            </div>
            <p className="more-services">Also: fences, retaining walls, footpaths, pool fences and more. Just ask.</p>
          </div>
        </section>

        <section className="testimonials section">
          <div className="shell"><div className="section-heading"><div><p className="eyebrow">Google reviews</p><h2>Trusted by local property owners.</h2></div><div className="review-score"><strong>5.0</strong><span>★★★★★</span><small>58 Google reviews</small></div></div>
            <div className="testimonial-grid">
              <blockquote><p>“Brilliant job. Professional and thorough.”</p><footer>Mac · Google review</footer></blockquote>
              <blockquote><p>“Simon was fantastic. Great communication, punctual, professional and did a very good job cleaning the gutters and downpipes.”</p><footer>A Kennedy · Google review</footer></blockquote>
              <blockquote><p>“Exceptional service and quality. Great communication, with before and after photos validating a job well done.”</p><footer>Russell Sciberras · Google review</footer></blockquote>
            </div><a className="text-link reviews-link" href="https://www.google.com/search?q=SS+Exterior+Services+Kilmore+reviews" target="_blank" rel="noreferrer">Read our Google reviews ↗</a>
          </div>
        </section>

        <section className="process section">
          <div className="shell">
            <div className="section-heading process-heading"><div><p className="eyebrow">How it works</p><h2>How we do it.</h2></div></div>
            <div className="steps">
              {[
                ["1", "Quote", "We assess your property and provide a clear quote tailored to the surfaces, access and work required."],
                ["2", "Before the appointment", "We confirm the timing, explain any preparation and plan how we will protect the surrounding property."],
                ["3", "On the day and beyond", "We arrive prepared, complete the work carefully, share the results and explain any useful aftercare."],
              ].map(([n, title, text]) => <article className="step" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
            <a className="button process-button" href="#quote">Start my free quote <span>→</span></a>
          </div>
        </section>

        <section className="areas section shell">
          <div className="areas-copy"><p className="eyebrow">Areas we service</p><h2>Across Mitchell Shire and beyond.</h2><p>We regularly work throughout Kilmore, Wallan, Seymour, Lancefield, Broadford and nearby regional communities. If you’re just outside the area, give us a call. We can often travel further.</p></div>
          <div className="area-list">{areas.map(area => <Link href={`/service-areas/${area.slug}`} key={area.name}>{area.name}<b>↗</b></Link>)}</div>
        </section>

        <section className="results section shell">
          <div className="results-copy">
            <p className="eyebrow">See the difference</p>
            <h2>Built-up grime doesn’t stand a chance.</h2>
            <p>Professional equipment and the right method for each surface deliver a deeper, safer and more even clean.</p>
            <a className="button dark" href="#quote">Book your clean <span>→</span></a>
          </div>
          <div className="project-gallery featured-gallery">
            {featuredProjects.map((image) => (
              <figure key={image.src}>
                <Image src={image.src} alt={image.alt} width={1350} height={1080} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 28vw" />
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="activity-preview section shell">
          <div><p className="eyebrow">Recent activity</p><h2>See what we have been up to.</h2></div>
          <div><p>Follow recent exterior cleaning projects, transformations and practical maintenance tips from SS Exterior Services.</p><Link className="button" href="/recent-activity">View recent activity <span>→</span></Link></div>
        </section>

        <section className="about section" id="about">
          <div className="shell about-grid">
            <div className="about-image"><img src="/images/window-cleaning.jpg" alt="SS Exterior Services cleaning windows in Kilmore Victoria" /><span>Locally owned<br />and operated</span></div>
            <div className="about-copy">
              <p className="eyebrow light">Meet SS Exterior Services</p>
              <h2>Good, honest work done the right way.</h2>
              <p>SS Exterior Services began with a simple goal: make property maintenance less of a hassle for local residents. Based in Kilmore and run by Simon, the business has grown through word of mouth, hard work and a practical approach.</p>
              <p>We turn up prepared, use quality equipment and take the time to do a thorough job. No cutting corners and no pushy sales. Just friendly service that keeps your property looking its best.</p>
              <div className="about-stats"><div><strong>Local</strong><span>Kilmore based</span></div><div><strong>Flexible</strong><span>24/7 availability</span></div><div><strong>Thorough</strong><span>No shortcuts</span></div></div><a className="text-link light-link about-link" href="/about">Read our story →</a>
            </div>
          </div>
        </section>

        <section className="quote-section section" id="quote">
          <div className="shell quote-grid">
            <div><p className="eyebrow light">Let’s get it sorted</p><h2>Ready for a cleaner property?</h2><p>Tell us what you need and where you’re located. We’ll get back to you with a straightforward, obligation free quote.</p><a className="quote-phone" href="tel:0447130743"><small>Prefer to call?</small>0447 130 743</a></div>
            <QuoteForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
