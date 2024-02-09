import { searchMovie } from "../utilities/api";
import MoviesContainer from "../components/MoviesContainer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { searchQuery } = useParams();

  useEffect(() => {
    if (searchQuery) {
      console.log(decodeURIComponent(searchQuery));
      searchMovie(decodeURIComponent(searchQuery))
        .then((data) => {
          debugger;
          setSearchResults(data.results);
          console.log(data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [searchQuery]);

  return (
    <div className="search-content">
      <h1>Search Results..</h1>
      <MoviesContainer title="s" moviesData={searchResults} />
    </div>
  );
};

export default SearchPage;
