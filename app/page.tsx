import Link from "next/link";
import { Footer, Header, QuoteForm } from "./components";
import { services } from "./services/data";

const areas = ["Kilmore", "Wallan", "Seymour", "Broadford", "Lancefield", "Pyalong", "Wandong", "Beveridge"];

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

        <section className="intro section shell">
          <div>
            <p className="eyebrow">Exterior cleaning, without the runaround</p>
            <h2>Local service. Professional finish.</h2>
          </div>
          <div className="intro-copy">
            <p>Looking after your home’s exterior takes the right equipment, care and experience. Based in Kilmore, SS Exterior Services provides reliable exterior cleaning across Mitchell Shire and surrounding regional communities.</p>
              <p>From complete house and roof cleaning to decks, driveways, gutters and solar panels, we show up prepared, treat your property with respect and leave the job looking sharp.</p>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="shell">
            <div className="section-heading">
              <div><p className="eyebrow">What we do</p><h2>Every surface, sorted.</h2></div>
              <p>Our highest-priority specialties appear first, followed by the supporting maintenance services that complete the property.</p>
            </div>
            <div className="service-grid">
              {services.map((service, index) => (
                <Link className="service-card" href={`/services/${service.slug}`} key={service.slug}>
                  <span className="service-number">0{index + 1}</span>
                  <div className="service-icon" aria-hidden="true">{service.icon}</div>
                  <h3>{service.shortTitle}</h3>
                  <p>{service.summary}</p>
                  <span className="card-link">Explore service <b>→</b></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="results section shell">
          <div className="results-copy">
            <p className="eyebrow">See the difference</p>
            <h2>Built-up grime doesn’t stand a chance.</h2>
            <p>Professional equipment and the right method for each surface deliver a deeper, safer and more even clean.</p>
            <a className="button dark" href="#quote">Book your clean <span>→</span></a>
          </div>
          <div className="result-pair">
            <figure><img src="/images/facebook-roof-result-1.jpg" alt="Roof before and after cleaning by SS Exterior Services" /><figcaption>Roof cleaning result</figcaption></figure>
            <figure><img src="/images/facebook-roof-result-2.jpg" alt="Colorbond roof before and after cleaning by SS Exterior Services" /><figcaption>Colorbond result</figcaption></figure>
          </div>
        </section>

        <section className="process section">
          <div className="shell">
            <div className="section-heading"><div><p className="eyebrow">How it works</p><h2>Simple from start to finish.</h2></div></div>
            <div className="steps">
              {[
                ["01", "Get your free quote", "Call, message or send the form with the services and location you need."],
                ["02", "We assess the job", "We check access, surfaces and safety so we use the right cleaning method."],
                ["03", "We get stuck in", "Our professional equipment makes short work of dirt, debris, mould and grime."],
                ["04", "Final walkthrough", "We inspect the result with you, tidy the work area and make sure you’re happy."],
              ].map(([n, title, text]) => <article className="step" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
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

        <section className="areas section shell">
          <div className="areas-copy"><p className="eyebrow">Areas we service</p><h2>Across Mitchell Shire and beyond.</h2><p>We regularly work throughout Kilmore, Wallan, Seymour, Lancefield, Broadford and nearby regional communities. If you’re just outside the area, give us a call. We can often travel further.</p></div>
          <div className="area-list">{areas.map(area => <span key={area}>{area}<b>↗</b></span>)}</div>
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
