import tmdbLogo from "../icons/tmdb-logo.svg";

function About() {
  return (
    <div className="about">
      <h1>Let's talk about YellowDoor</h1>
      <p>
        Step to YellowDoor, where a simple tap opens the door to a mesmerizing
        realm of cinematic wonders. Unleash the magic of movies at your
        fingertips, as this application illuminates your path to a vast universe
        of film worlds, trailers, reviews, and a ticket to unforgettable
        entertainment. Explore the boundless possibilities of storytelling and
        immerse yourself in the captivating glow of YellowDoor, where every tap
        unfolds a new chapter in your cinematic journey. Welcome to the doorway
        of cinematic delight!
      </p>

      <p>
        This product uses the TMDB API but is not endorsed or certified by TMDB.
      </p>

      <img src={tmdbLogo} alt="TMDB Logo" />

    </div>
  );
}

export default About;
