const facebookUrl = "https://www.facebook.com/p/SS-Exterior-Services-61577733671482/";
const instagramUrl = "https://instagram.com/ssexteriorservices";
const tiktokUrl = "https://www.tiktok.com/@ssexteriorservices";

const instagramReels = ["DdijVrwiNHQ", "DdJIVRrDClM", "Dc0m4n_gtDH"] as const;
const tiktokVideos = ["7687878844677672210", "7624805387291692296", "7672727229104721159"] as const;

export function SocialEmbeds() {
  const facebookEmbed = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(facebookUrl)}&tabs=timeline&width=500&height=720&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false`;

  return <div className="social-feed-grid">
    <article className="social-feed facebook-feed">
      <div className="social-feed-heading"><div><span>Facebook</span><h2>Latest Facebook posts</h2></div><a href={facebookUrl} target="_blank" rel="noreferrer">Open Facebook ↗</a></div>
      <div className="embed-frame"><iframe title="SS Exterior Services Facebook timeline" src={facebookEmbed} width="500" height="720" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" /></div>
    </article>

    <article className="social-feed social-video-feed tiktok-feed">
      <div className="social-feed-heading"><div><span>TikTok</span><h2>Latest TikTok videos</h2></div><a href={tiktokUrl} target="_blank" rel="noreferrer">Open TikTok ↗</a></div>
      <div className="social-embed-grid">
        {tiktokVideos.map((id) => <iframe
          key={id}
          title={`SS Exterior Services TikTok video ${id}`}
          src={`https://www.tiktok.com/player/v1/${id}?autoplay=0&controls=1&description=1&music_info=0`}
          loading="lazy"
          allow="fullscreen; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />)}
      </div>
    </article>

    <article className="social-feed social-video-feed instagram-feed">
      <div className="social-feed-heading"><div><span>Instagram</span><h2>Latest Instagram Reels</h2></div><a href={instagramUrl} target="_blank" rel="noreferrer">Open Instagram ↗</a></div>
      <div className="social-embed-grid instagram-embed-grid">
        {instagramReels.map((code) => <iframe
          key={code}
          title={`SS Exterior Services Instagram Reel ${code}`}
          src={`https://www.instagram.com/reel/${code}/embed/`}
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
        />)}
      </div>
    </article>
  </div>;
}
