import Nav from "./Nav";
import { useState } from "react";

function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className={`header ${showNav ? "show" : ""}`}>
      <div className="header-container">
        
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
