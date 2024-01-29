import { useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../utilities/api";
import { useEffect } from "react";
import { filterVideos, formatReleaseDate } from "../utilities/toolbelt";
import { IMAGE_URL_BASE } from "../utilities/api";
import FavouriteButton from "../components/FavoriteButton";

function PageSingleMovie() {
  const params = useParams();
  const id = params.id;
  const [movieData, setMovieData] = useState();
  const [movieVideos, setMovieVideos] = useState([]);

  useEffect(() => {
    getMovieById(id)
      .then((data) => {
        console.log("Data", data);

        // console.log("safs", data.videos.results);
        const youtubeTrailerVideos = filterVideos(data.videos.results);
        setMovieData(data);
        setMovieVideos(youtubeTrailerVideos);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  // console.log("movieData", movieData);
  // console.log("movieVideos", movieVideos);

  return (
    <div className="single-page">
      {movieData && (
        <div>
          <div className="single-page-flex">
            <div>
              <h1 className="single-title">{movieData.title}</h1>
              <h2 className="single-date">{formatReleaseDate(movieData.release_date)}</h2>
            </div>

            <div className="single-page-rating-bg">
              <p className="single-rating-text">{movieData.vote_average ? ( <p>{movieData.vote_average.toFixed(1).replace(".", "")}%</p> ) : ( <p>NR</p> )}</p>
            </div>
          </div>

            <div className="single-page-flex-poster-trailer">
              <img
                className="single-page-poster-tablet"
                src={`${IMAGE_URL_BASE}/w500/${movieData.poster_path}`}
                alt={`${movieData.title}`}
              />
              
              <iframe
                src={`https://www.youtube.com/embed/${movieVideos[0].key}`}
                // width="300"
                // height="200"
                title={movieData.name}
                className="single-trailer"
              ></iframe>
            </div>

          <div className="single-page-flex-poster-overview">
              <img
                className="single-page-poster-mobile"
                src={`${IMAGE_URL_BASE}/w500/${movieData.poster_path}`}
                alt={`${movieData.title}`}
              />
              
              <div className="single-page-overview-bg">
                  <p className="single-page-overview">{movieData.overview}</p>
              </div>
          </div>

          <div className="single-page-button">
          <FavouriteButton movieData={movieData} />
          </div>

        </div>
      )}
    </div>
  );
}

export default PageSingleMovie;
