import { IMAGE_URL_BASE } from "../utilities/api";
import { formatReleaseDate } from "../utilities/toolbelt";
import { useNavigate } from "react-router-dom";
import FavouriteButton from "./FavoriteButton";
import '../scss/_movieCard.scss';
import { useState } from "react";


const defaultData = {
  adult: false,
  backdrop_path: "/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg",
  genre_ids: [36, 10752, 18],
  id: 753342,
  original_language: "en",
  original_title: "Napoleon",
  overview:
    "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.",
  popularity: 1811.36,
  poster_path: "/jE5o7y9K6pZtWNNMEw3IdpHuncR.jpg",
  release_date: "2023-11-22",
  title: "Napoleon",
  video: false,
  vote_average: 6.529,
  vote_count: 1268,
};

function MovieCard({ movieData = defaultData }) {
  const [isMobileClick, setIsMobileClick] = useState(false);
  const imagePath = `${IMAGE_URL_BASE}/w185${movieData.poster_path}`;
  const navigate = useNavigate();

  const handleDesktopClick = () => {
    if(!isMobileClick) {
      navigate(`/movie/${movieData.id}`);
    }
  };

  const handleMobileClick = () => {
    if (isMobileClick) {
      setIsMobileClick(false);
    } else {
      setIsMobileClick(true);
    }
  };

  return (
    <div className={`card ${isMobileClick ? 'mobile-clicked' : ''}`}
      onClick={handleDesktopClick}
      onTouchStart={handleMobileClick}
    >
      <img src={imagePath} alt={movieData.title} />
      <div className={`overlay ${isMobileClick ? 'visible' : ''}`}>
        <div className="overlay-content">
          <h3>{movieData.title}</h3>
          <p>{formatReleaseDate(movieData.release_date)}</p>
          <p>{movieData.vote_average.toFixed(1)}</p>
        </div>
      </div>
      <div className="title-and-release">
        <h3 className="title">{movieData.title}</h3>
        <h4 className="releasedate">
          {formatReleaseDate(movieData.release_date)}
        </h4>
        <h4 className="vote-average">{movieData.vote_average.toFixed(1)}</h4>
        <FavouriteButton movieData={movieData} />
      </div>
    </div>
  );
}

export default MovieCard;