import { useState } from "react";
import { getPopularMovie } from "../utilities/api";
import { useEffect } from "react";
import MoviesContainer from "../components/MoviesContainer";
import Banner from "../components/Banner";

function PageHome() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    getPopularMovie()
      .then((data) => {
        setPopularMovies(data.results);
        console.log("test", data.results)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(popularMovies);


  return (
    <main id="home">
      {/* MovieID={popularMovies[0].id} */}
      {popularMovies.length > 0 &&
      <Banner
      movieId={popularMovies[0].id} />}
      <MoviesContainer title="Popular Movies" moviesData={popularMovies} />
    </main>
  );
}

export default PageHome;
