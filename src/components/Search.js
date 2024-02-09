import searchIcon from "../icons/search-icon.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const encodedSearch = encodeURIComponent(search);
    if (search.trim()) {
      navigate(`/search/${encodedSearch}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="searchContainer">
      <input
        className="searchInput"
        type="text"
        placeholder="Search for a movie"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button className="searchBtn" onClick={handleSearch}>
        <img className="searchImg" src={searchIcon} alt="Search" />
      </button>
    </div>
  );
}

export default Search;
