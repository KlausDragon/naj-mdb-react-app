import tmdbLogo from "../icons/tmdb-logo.svg";

function About() {
  return (
    <div className="about">
      <h1>Let's talk about YellowDoor</h1>
      <p>
        Welcome to <span>Yellow</span><b>Door</b>, your premier gateway to the cinematic universe
        right at your fingertips. As a distinguished portal, we offer an
        unparalleled experience in discovering, exploring, and engaging with the
        world of movies. Designed to seamlessly guide you through an expansive
        collection of films, detailed reviews, captivating trailers, and easy
        ticket purchasing, our platform ensures an unrivaled entertainment
        journey. Passionate about movies and the powerful storytelling they
        offer, YellowDoor aims to connect movie enthusiasts with the films they
        love and introduce them to new cinematic treasures. Whether you're in
        search of the latest blockbusters, timeless classics, or hidden indie
        gems, our curated selection is bound to satisfy your cinematic cravings.
        Our user-friendly interface makes every interaction simple yet
        fulfilling, opening the door to a world where movies come alive. Dive
        into our vast universe of film content, where each click brings you
        closer to the stories that move, inspire, and entertain, all from the
        comfort of your home or on the go. Welcome to the ultimate destination
        for film lovers, where your next cinematic adventure begins with just a
        tap.
      </p>
      <br />
      <p>
        This product uses the TMDB API but is not endorsed or certified by TMDB.
      </p>

      <img src={tmdbLogo} alt="TMDB Logo" />
    </div>
  );
}

export default About;
