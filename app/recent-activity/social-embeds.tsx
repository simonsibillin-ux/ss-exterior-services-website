const facebookUrl = "https://www.facebook.com/p/SS-Exterior-Services-61577733671482/";
const instagramUrl = "https://instagram.com/ssexteriorservices";
const tiktokUrl = "https://www.tiktok.com/@ssexteriorservices";

export function SocialEmbeds() {
  const facebookEmbed = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(facebookUrl)}&tabs=timeline&width=500&height=720&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false`;
  const tiktokPreviews = [
    ["/images/facebook-roof-result-1.jpg", "Recent roof-cleaning transformation"],
    ["/images/projects/pressure-washing-kilmore-2.jpg", "Pressure-cleaning result"],
    ["/images/projects/solar-panel-cleaning-kilmore-2.jpg", "Solar-panel cleaning project"],
  ] as const;
  const instagramPreviews = [
    ["/images/projects/house-washing/before-after-wallan.jpg", "House washing before and after"],
    ["/images/projects/house-washing/organic-growth-kilmore.jpg", "Organic-growth treatment"],
    ["/images/facebook-roof-result-2.jpg", "Roof-cleaning result"],
  ] as const;

  return <div className="social-feed-grid">
    <article className="social-feed facebook-feed">
      <div className="social-feed-heading"><div><span>Facebook</span><h2>Latest Facebook posts</h2></div><a href={facebookUrl} target="_blank" rel="noreferrer">Open Facebook ↗</a></div>
      <div className="embed-frame"><iframe title="SS Exterior Services Facebook timeline" src={facebookEmbed} width="500" height="720" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" /></div>
    </article>

    <article className="social-feed social-preview-feed tiktok-feed">
      <div className="social-feed-heading"><div><span>TikTok</span><h2>Latest TikTok videos</h2></div><a href={tiktokUrl} target="_blank" rel="noreferrer">Open TikTok ↗</a></div>
      <div className="social-preview-grid">{tiktokPreviews.map(([src,alt])=><a href={tiktokUrl} target="_blank" rel="noreferrer" key={src}><Image src={src} alt={alt} fill sizes="(max-width: 900px) 50vw, 25vw"/><span className="video-play" aria-hidden="true">▶</span><strong>{alt}</strong></a>)}</div>
      <a className="social-feed-cta" href={tiktokUrl} target="_blank" rel="noreferrer">Watch the newest videos on TikTok →</a>
    </article>

    <article className="social-feed social-preview-feed instagram-feed">
      <div className="social-feed-heading"><div><span>Instagram</span><h2>Latest Instagram posts</h2></div><a href={instagramUrl} target="_blank" rel="noreferrer">Open Instagram ↗</a></div>
      <div className="social-preview-grid">{instagramPreviews.map(([src,alt])=><a href={instagramUrl} target="_blank" rel="noreferrer" key={src}><Image src={src} alt={alt} fill sizes="(max-width: 900px) 50vw, 25vw"/><strong>{alt}</strong></a>)}</div>
      <a className="social-feed-cta" href={instagramUrl} target="_blank" rel="noreferrer">See the newest posts on Instagram →</a>
    </article>
  </div>;
}
import Image from "next/image";
