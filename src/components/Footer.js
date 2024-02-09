import logo from "../icons/naj-movie-logo.svg";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <a href="/"><img src={logo} alt="Naj Movie Logo" /></a>
      <p>© {currentYear}</p>
    </footer>
  );
}

export default Footer;
