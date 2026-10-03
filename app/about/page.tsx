import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Footer, Header, PageHero, QuoteBand } from "../components";

export const metadata: Metadata = {
  title: "About SS Exterior Services",
  description:
    "Meet Simon and discover the considered, surface-specific approach behind SS Exterior Services in Kilmore and Mitchell Shire.",
  alternates: { canonical: "/about" },
};

const values = [
  ["01", "Assess before acting", "We inspect the material, coating, condition and surrounding property before deciding how the project should be approached."],
  ["02", "Use the correct method", "The safest, most suitable process for the surface matters more than simply reaching for the most powerful equipment."],
  ["03", "Explain the project clearly", "You receive straightforward advice, a clear scope and answers to your questions before the work begins."],
  ["04", "Finish with pride", "We work thoroughly, respect the property and complete a final walkthrough so you can see the result for yourself."],
];

export default function About() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="About SS Exterior Services"
          title="Proper work starts with understanding the surface."
        >
          <p>
            SS Exterior Services is a family-run Kilmore business built around one
            simple standard: do the work properly. Every material, coating and
            property receives an individual approach, not a one-size-fits-all clean.
          </p>
        </PageHero>

        <section className="story section shell">
          <div>
            <p className="eyebrow">Our approach</p>
            <h2>We call them projects, not jobs.</h2>
          </div>
          <div>
            <p>
              A job can sound like something to get through. A project deserves
              preparation, thought and effort. That distinction reflects how we
              approach every property at SS Exterior Services.
            </p>
            <p>
              Before work begins, we take the time to understand the surface, its
              condition and the result you want to achieve. We choose methods around
              the material in front of us and follow relevant manufacturer guidance
              and applicable warranty requirements.
            </p>
            <p>
              We explain what we recommend, how we plan to complete the project and
              what you can realistically expect. Questions are always welcome,
              because you should feel confident about the work being carried out on
              your property.
            </p>
          </div>
        </section>

        <section className="surface-principle section">
          <div className="shell surface-principle-grid">
            <div>
              <p className="eyebrow">The right approach</p>
              <h2>Every surface deserves individual care.</h2>
            </div>
            <div>
              <p>
                Weatherboard, render, brick, Colorbond, roof tile, concrete, pavers
                and timber all respond differently. Their age, coating and condition
                matter too.
              </p>
              <p>
                Our role is to select the correct process, not simply the strongest
                one. That means considering chemistry, pressure, dwell time, access,
                drainage, plants and nearby fixtures before cleaning begins.
              </p>
            </div>
          </div>
        </section>

        <section className="meet-simon section shell">
          <figure className="founder-photo"><Image src="/images/uploads/simon/01.jpg" alt="Simon, founder and director of SS Exterior Services" width={950} height={1655} priority /></figure>
          <div className="founder-copy">
            <p className="eyebrow">Founder &amp; Director</p>
            <h2>Meet Simon.</h2>
            <p>
              I come from a hardworking family of business owners who built their
              way up from the ground. From a young age, I learned that lasting results
              come from persistence, responsibility and taking genuine pride in the
              work attached to your name.
            </p>
            <p>
              Those values became the foundation of SS Exterior Services. I remain
              closely involved, from the first conversation and property assessment
              through to the work itself and the final walkthrough. Clients deal with
              someone who understands their project and cares about its outcome.
            </p>
            <p>
              As we grow, the goal stays the same: build a trusted local business by
              doing the right work, using the right methods and standing behind the
              standard we set.
            </p>
          </div>
        </section>

        <section className="values section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">What guides our work</p>
                <h2>The standard behind every project.</h2>
              </div>
            </div>
            <div className="value-grid">
              {values.map(([number, title, description]) => (
                <article key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="credentials section shell">
          <div>
            <p className="eyebrow">Family-run and aligned</p>
            <h2>Built on shared standards.</h2>
          </div>
          <div className="credential-list">
            <p><Check size={18} aria-hidden="true" /> Careful preparation</p>
            <p><Check size={18} aria-hidden="true" /> Clear communication</p>
            <p><Check size={18} aria-hidden="true" /> Surface-specific methods</p>
            <p><Check size={18} aria-hidden="true" /> Respect for your property</p>
            <p><Check size={18} aria-hidden="true" /> Thorough final checks</p>
            <p><Check size={18} aria-hidden="true" /> Long-term local trust</p>
          </div>
          <p className="credentials-closing">
            Exterior cleaning done right isn’t the quickest possible clean. It’s the
            correct process, completed thoroughly, by people who care about the result.
          </p>
          <Link className="button dark" href="/contact">Discuss your project →</Link>
        </section>

        <QuoteBand />
      </main>
      <Footer />
    </>
  );
}
