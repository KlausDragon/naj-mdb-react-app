import { IMAGE_URL_BASE } from "../utilities/api";
import { formatText, formatReleaseDate} from "../utilities/toolbelt";
import { useNavigate } from "react-router-dom";
import FavouriteButton from "./FavoriteButton";
import React, { useState } from 'react';
import MoreInfo from "./MoreInfo";



// const defaultData = {
//   adult: false,
//   backdrop_path: "/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg",
//   genre_ids: [36, 10752, 18],
//   id: 753342,
//   original_language: "en",
//   original_title: "Napoleon",
//   overview:
//     "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.",
//   popularity: 1811.36,
//   poster_path: "/jE5o7y9K6pZtWNNMEw3IdpHuncR.jpg",
//   release_date: "2023-11-22",
//   title: "Napoleon",
//   video: false,
//   vote_average: 6.529,
//   vote_count: 1268,
// };

function MovieCard({ movieData }) {
  const imagePath = `${IMAGE_URL_BASE}/w185${movieData.poster_path}`;
  const navigate = useNavigate();

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleDesktopClick = (event) => {
    event.preventDefault();
    navigate(`/movie/${movieData.id}`);
  };

  const handleMobileClick = () => {
    setIsOverlayVisible((prev) => !prev);
  };

  const handleClick = (event) => {
    if (window.innerWidth <= 768) {
      handleMobileClick();
    } else {
      handleDesktopClick(event);
    }
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={imagePath} alt={movieData.title} />
      <div className={`overlay ${isOverlayVisible ? 'visible' : ''}`}>
        <div className="overlay-content">
          
          <div className="vote-container">
            <p className="vote-average">{movieData.vote_average.toFixed(1)}</p>
          </div>

          <div className="favorite-button-container">
          <FavouriteButton movieData={movieData} />
          </div>

          <div >
              <p className="movie-card-overview">{formatText(movieData.overview)}</p>
          </div>

          <div> 
            <MoreInfo movieData={movieData} />
          </div>
        </div>
      </div>
      <div className="title-and-release">
        <h3 className="title">{movieData.title}</h3>
        <h4 className="releasedate">
          {formatReleaseDate(movieData.release_date)}
        </h4>
      </div>
    </div>
  );
}

export default MovieCard;