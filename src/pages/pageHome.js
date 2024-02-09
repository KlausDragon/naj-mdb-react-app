import { useState, useEffect } from "react";
import {
  getPopularMovie,
  getUpcoming,
  getTopRated,
  getNowPlaying,
} from "../utilities/api";
import MoviesContainer from "../components/MoviesContainer";
import Banner from "../components/Banner";
import Categories from "../components/Categories";

function PageHome() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowplayingMovies, setNowPlayingMovies] = useState([]);
  const [currentSelectedCategory, setCurrentSelectedCategory] =
    useState("Popular");

  useEffect(() => {
    getPopularMovie()
      .then((data) => {
        setPopularMovies(data.results);
      })
      .catch((error) => {
        console.log(error);
      });

    getTopRated()
      .then((data) => {
        setTopRatedMovies(data.results);
      })
      .catch((error) => {
        console.log(error);
      });

    getUpcoming()
      .then((data) => {
        setUpcomingMovies(data.results);
      })
      .catch((error) => {
        console.log(error);
      });

    getNowPlaying()
      .then((data) => {
        console.log("test", data.results);

        setNowPlayingMovies(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main id="home">
      {popularMovies.length > 0 && (
        <>
          <Banner movieId={popularMovies[0].id} />
          <Categories
            currentSelectedCategory={currentSelectedCategory}
            setCurrentSelectedCategory={setCurrentSelectedCategory}
          />
          {currentSelectedCategory === "Popular" && (
            <MoviesContainer
              title="Popular Movies"
              moviesData={popularMovies}
            />
          )}
          {currentSelectedCategory === "Top Rated" && (
            <MoviesContainer
              title="Top Rated Movies"
              moviesData={topRatedMovies}
            />
          )}
          {currentSelectedCategory === "Upcoming" && (
            <MoviesContainer
              title="Upcoming Movies"
              moviesData={upcomingMovies}
            />
          )}
          {currentSelectedCategory === "Now Playing" && (
            <MoviesContainer
              title="Now Playing Movies"
              moviesData={nowplayingMovies}
            />
          )}
        </>
      )}
    </main>
  );
}

export default PageHome;
