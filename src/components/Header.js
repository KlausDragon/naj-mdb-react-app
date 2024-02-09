import Nav from "./Nav";
import { useState } from "react";
import logo from "../icons/naj-movie-logo.svg";
import searchIcon from "../icons/search-icon.svg";
import { useNavigate } from "react-router-dom";

function Header() {
  const [showNav, setShowNav] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const encodedSearch = encodeURIComponent(search);
    if (search.trim()) {
      navigate(`/search/${encodedSearch}`);
    }
  };

  return (
    <header className={`header ${showNav ? "show" : ""}`}>
      <div className="header-container">
        <a href="/">
          <img src={logo} alt="YellowDoor Logo" />
        </a>
        <div className="searchContainer">
          <input
            type="text"
            placeholder="Search for a movie"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="searchBtn" onClick={handleSearch}>
            <img className="searchImg" src={searchIcon} alt="Search" />
          </button>
        </div>
        <button onClick={() => setShowNav(!showNav)} className="hamburger">
          ☰
        </button>
      </div>
      <Nav showNav={showNav} setShowNav={setShowNav} />
    </header>
  );
}

export default Header;
