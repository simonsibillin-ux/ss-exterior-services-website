const facebookUrl = "https://www.facebook.com/p/SS-Exterior-Services-61577733671482/";
const instagramUrl = "https://instagram.com/ssexteriorservices";
const tiktokUrl = "https://www.tiktok.com/@ssexteriorservices";

export function SocialEmbeds() {
  const facebookEmbed = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(facebookUrl)}&tabs=timeline&width=500&height=720&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false`;

  return <div className="social-feed-grid">
    <article className="social-feed facebook-feed">
      <div className="social-feed-heading"><div><span>Facebook</span><h2>Latest Facebook posts</h2></div><a href={facebookUrl} target="_blank" rel="noreferrer">Open Facebook ↗</a></div>
      <div className="embed-frame"><iframe title="SS Exterior Services Facebook timeline" src={facebookEmbed} width="500" height="720" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" /></div>
    </article>

    <article className="social-feed social-profile-feed tiktok-feed">
      <div className="social-feed-heading"><div><span>TikTok</span><h2>Latest TikTok videos</h2></div><a href={tiktokUrl} target="_blank" rel="noreferrer">Open TikTok ↗</a></div>
      <a className="social-profile-card tiktok-profile" href={tiktokUrl} target="_blank" rel="noreferrer"><span className="social-mark">♪</span><strong>@ssexteriorservices</strong><p>Watch the newest project videos directly on our TikTok profile.</p><b>View latest videos →</b></a>
    </article>

    <article className="social-feed social-profile-feed instagram-feed">
      <div className="social-feed-heading"><div><span>Instagram</span><h2>Latest Instagram posts</h2></div><a href={instagramUrl} target="_blank" rel="noreferrer">Open Instagram ↗</a></div>
      <a className="social-profile-card instagram-profile-card" href={instagramUrl} target="_blank" rel="noreferrer"><span className="social-mark">◎</span><strong>@ssexteriorservices</strong><p>See the newest reels, before-and-after results and job updates on Instagram.</p><b>View latest posts →</b></a>
    </article>
  </div>;
}
