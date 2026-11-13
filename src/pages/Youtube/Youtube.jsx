import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Youtube.css";
import useCatalogData from "../../hooks/useCatalogData";

const fallbackVideos = [
  {
    id: "lDx_dLqTixQ",
    url: "https://www.youtube.com/watch?v=lDx_dLqTixQ",
    title: "ROOTED — THE MUSICAL JOURNEY",
    description:
      "A journey into India's traditional musical heritage and the communities keeping these sounds alive.",
  },
];

function YouTube() {
  const catalogVideos = useCatalogData("/api/catalog/videos", fallbackVideos);
  const videos = Array.isArray(catalogVideos)
    ? catalogVideos.map((video) => {
        const videoId = video.youtubeId || video.id;
        return {
          ...video,
          id: videoId,
          url: video.url || `https://www.youtube.com/watch?v=${videoId}`,
        };
      })
    : fallbackVideos;

  return (
    <div className="youtube-page">
      <Navbar />
      <main>
      <section className="youtube-hero">
        <div className="youtube-hero-overlay" />
        <div className="youtube-hero-content">
          <span className="youtube-eyebrow">ROOTED • DOCUMENTARY • MUSIC</span>
          <h1>
            WATCH
            <br />
            THE STORY
          </h1>
          <p>
            Enter the visual archive of ROOTED — stories, musicians,
            instruments and sounds that deserve to be remembered.
          </p>
          <a
            href="https://www.youtube.com/c/Hithamusic"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-channel-button"
          >
            VISIT OUR YOUTUBE CHANNEL <span>↗</span>
          </a>
        </div>
      </section>

      <section className="youtube-intro">
        <div className="youtube-intro-container">
          <span className="youtube-section-label">THE FILMS</span>
          <h2>
            Stories told through <br /> sound and image.
          </h2>
          <p>
            ROOTED documents India's endangered musical traditions through
            film. Each story brings together musicians, instruments,
            communities, landscapes and memories.
          </p>
        </div>
      </section>

      <section className="youtube-videos">
        <div className="youtube-videos-header">
          <div>
            <span className="youtube-section-label">WATCH THE DOCUMENTARY</span>
            <h2>Featured Film</h2>
          </div>
          <a
            href="https://www.youtube.com/c/Hithamusic"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-view-channel"
          >
            VIEW CHANNEL →
          </a>
        </div>

        <div className="youtube-grid">
          {videos.map((video, index) => (
            <article className="youtube-card" key={video.id}>
              <div className="youtube-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <div className="youtube-card-content">
                <span className="youtube-card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="youtube-watch"
                >
                  WATCH FILM →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="youtube-cta">
        <div className="youtube-cta-content">
          <span className="youtube-section-label">FOLLOW THE JOURNEY</span>
          <h2>
            More stories. <br /> More sounds. <br /> More to remember.
          </h2>
          <a
            href="https://www.youtube.com/c/Hithamusic"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-cta-button"
          >
            SUBSCRIBE ON YOUTUBE <span>↗</span>
          </a>
        </div>
        <div className="youtube-cta-mark" aria-hidden="true">
          ROOTED
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}

export default YouTube;
