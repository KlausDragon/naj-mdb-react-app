import Nav from "./Nav";
import { useState } from "react";
import logo from "../naj-movie-logo.svg";

function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className={`header ${showNav ? "show" : ""}`}>
      <div className="header-container">
        <a href="/"><img src={logo} alt="Naj Movie Logo" /></a>
        <button
          onClick={() => {
            setShowNav(!showNav);
          }}
          className="hamburger"
        >
          ☰
        </button>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
