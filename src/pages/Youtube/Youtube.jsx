import "./YouTube.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
function YouTube() {
  const videos = [
    {
      id: "lDx_dLqTixQ",
      url: "https://www.youtube.com/watch?v=lDx_dLqTixQ",
      title: "ROOTED — THE MUSICAL JOURNEY",
      description:
        "A journey into India's traditional musical heritage and the communities keeping these sounds alive.",
    },

    {
      id: "YOUR_VIDEO_ID_2",
      url: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_2",
      title: "THE SOUND OF THE YĀL",
      description:
        "Discover the history, construction and cultural memory behind the ancient Yāl harp.",
    },
    {
      id: "YOUR_VIDEO_ID_3",
      url: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_3",
      title: "THE PARAI — VOICE OF THE PEOPLE",
      description:
        "Exploring the rhythm, history and cultural significance of the Parai.",
    },
    {
      id: "YOUR_VIDEO_ID_4",
      url: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_4",
      title: "MEET THE MUSICIANS",
      description:
        "Stories from the people who continue to carry traditional musical knowledge forward.",
    },
  ];
  return (
    <main className="youtube-page">
      {/* ========================= HERO ========================= */}
      <section className="youtube-hero">
        <Navbar />
        <div className="youtube-hero-overlay"></div>
        <div className="youtube-hero-content">
          <span className="youtube-eyebrow">
            {" "}
            ROOTED • DOCUMENTARY • MUSIC{" "}
          </span>
          <h1>
            {" "}
            WATCH
            <br /> THE STORY{" "}
          </h1>
          <p>
            {" "}
            Enter the visual archive of ROOTED — stories, musicians, instruments
            and sounds that deserve to be remembered.
          </p>
          <a
            href="https://www.youtube.com/c/Hithamusic"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-channel-button"
          >
            {" "}
            VISIT OUR YOUTUBE CHANNEL
            <span>↗</span>
          </a>
        </div>
      </section>
      {/* ========================= INTRO ========================= */}
      <section className="youtube-intro">
        <div className="youtube-intro-container">
          <span className="youtube-section-label"> THE FILMS </span>
          <h2>
            {" "}
            Stories told through <br /> sound and image.{" "}
          </h2>
          <p>
            {" "}
            ROOTED documents India's endangered musical traditions through film.
            Each story brings together musicians, instruments, communities,
            landscapes and memories.{" "}
          </p>
        </div>
      </section>{" "}
      {/* ========================= VIDEO COLLECTION ========================= */}{" "}
      <section className="youtube-videos">
        {" "}
        <div className="youtube-videos-header">
          {" "}
          <div>
            {" "}
            <span className="youtube-section-label">
              {" "}
              WATCH THE DOCUMENTARY{" "}
            </span>{" "}
            <h2>Featured Films</h2>{" "}
          </div>{" "}
          <a
            href="https://www.youtube.com/c/Hithamusic"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-view-channel"
          >
            {" "}
            VIEW CHANNEL →{" "}
          </a>{" "}
        </div>{" "}
        <div className="youtube-grid">
          {" "}
          {videos.map((video, index) => {
            const isPlaceholder = video.id.startsWith("YOUR_VIDEO_ID");
            return (
              <article className="youtube-card" key={video.id}>
                {" "}
                {/* ========================= VIDEO ========================= */}{" "}
                <div className="youtube-video">
                  {" "}
                  {isPlaceholder ? (
                    <div className="youtube-placeholder">
                      {" "}
                      <div className="youtube-play"> ▶ </div>{" "}
                      <span>
                        {" "}
                        VIDEO {String(index + 1).padStart(2, "0")}{" "}
                      </span>{" "}
                    </div>
                  ) : (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  )}{" "}
                </div>{" "}
                {/* ========================= VIDEO CONTENT ========================= */}{" "}
                <div className="youtube-card-content">
                  {" "}
                  <span className="youtube-card-number">
                    {" "}
                    {String(index + 1).padStart(2, "0")}{" "}
                  </span>{" "}
                  <h3>{video.title}</h3> <p>{video.description}</p>{" "}
                  {!isPlaceholder && (
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="youtube-watch"
                    >
                      {" "}
                      WATCH FILM →{" "}
                    </a>
                  )}{" "}
                </div>{" "}
              </article>
            );
          })}{" "}
        </div>{" "}
      </section>{" "}
      {/* ========================= CHANNEL CTA ========================= */}{" "}
      <section className="youtube-cta">
        {" "}
        <div className="youtube-cta-content">
          {" "}
          <span className="youtube-section-label">
            {" "}
            FOLLOW THE JOURNEY{" "}
          </span>{" "}
          <h2>
            {" "}
            More stories. <br /> More sounds. <br /> More to remember.{" "}
          </h2>{" "}
          <a
            href="https://www.youtube.com/c/Hithamusic"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-cta-button"
          >
            {" "}
            SUBSCRIBE ON YOUTUBE <span>↗</span>{" "}
          </a>{" "}
        </div>{" "}
        <div className="youtube-cta-mark"> ROOTED </div>{" "}
      </section>{" "}
      <Footer />{" "}
    </main>
  );
}
export default YouTube;
