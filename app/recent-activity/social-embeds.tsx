"use client";

import Script from "next/script";

const facebookUrl = "https://www.facebook.com/p/SS-Exterior-Services-61577733671482/";
const instagramUrl = "https://instagram.com/ssexteriorservices";
const instagramReelUrl = "https://www.instagram.com/reel/DbNu9sqRzpn/";
const tiktokUrl = "https://www.tiktok.com/@ssexteriorservices";

export function SocialEmbeds() {
  const facebookEmbed = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(facebookUrl)}&tabs=timeline&width=500&height=720&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false`;

  return <div className="social-feed-grid">
    <article className="social-feed facebook-feed">
      <div className="social-feed-heading"><div><span>Facebook</span><h2>Latest Facebook posts</h2></div><a href={facebookUrl} target="_blank" rel="noreferrer">Open Facebook ↗</a></div>
      <div className="embed-frame"><iframe title="SS Exterior Services Facebook timeline" src={facebookEmbed} width="500" height="720" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" /></div>
    </article>

    <article className="social-feed tiktok-feed">
      <div className="social-feed-heading"><div><span>TikTok</span><h2>Latest TikTok videos</h2></div><a href={tiktokUrl} target="_blank" rel="noreferrer">Open TikTok ↗</a></div>
      <div className="embed-frame tiktok-frame">
        <blockquote className="tiktok-embed" cite={tiktokUrl} data-unique-id="ssexteriorservices" data-embed-type="creator"><section><a href={tiktokUrl} target="_blank" rel="noreferrer">@ssexteriorservices</a></section></blockquote>
      </div>
    </article>

    <article className="social-feed instagram-feed">
      <div className="social-feed-heading"><div><span>Instagram</span><h2>Recent Instagram reel</h2></div><a href={instagramUrl} target="_blank" rel="noreferrer">Open Instagram ↗</a></div>
      <div className="embed-frame instagram-frame"><iframe title="Recent SS Exterior Services Instagram reel" src={`${instagramReelUrl}embed/`} loading="lazy" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" /></div>
    </article>
    <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
  </div>;
}
