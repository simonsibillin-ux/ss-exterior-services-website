import type { Metadata } from "next";
import { Footer, Header, PageHero } from "../components";
import { SocialEmbeds } from "./social-embeds";

export const metadata: Metadata = {
  title: "Recent Activity | SS Exterior Services",
  description: "See recent exterior cleaning projects, before and after results and updates from SS Exterior Services on Facebook, Instagram and TikTok.",
  alternates: { canonical: "/recent-activity" },
};

export default function RecentActivityPage() {
  return <><Header/><main>
    <PageHero title="What we have been up to."><p>Recent projects, cleaning transformations and updates from SS Exterior Services across Facebook, Instagram and TikTok.</p></PageHero>
    <section className="social-section section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Recent activity</p><h2>Fresh from our social pages.</h2></div><p>These feeds are supplied by each social platform, so new public activity appears here as those platforms update their embeds.</p></div><SocialEmbeds /></div></section>
  </main><Footer/></>;
}
