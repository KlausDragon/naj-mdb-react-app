import { IMAGE_URL_BASE } from "../utilities/api";
import { formatReleaseDate } from "../utilities/toolbelt";
import { useNavigate } from "react-router-dom";
import FavouriteButton from "./FavoriteButton";



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
  const imagePath = `${IMAGE_URL_BASE}/w185${movieData.poster_path}`;
  const navigate = useNavigate();

  const handleDesktopClick = (event) => {
    event.preventDefault();
    navigate(`/movie/${movieData.id}`);
  };

  const handleMobileClick = () => {
    // Handle opening the overlay on mobile devices
    // You can set a state to control the visibility of the overlay
    console.log('Overlay opened on mobile click');
  };

  const handleClick = (event) => {
    // Determine whether to use the desktop or mobile click handler
    if (window.innerWidth <= 1023) {
      handleMobileClick();
    } else {
      handleDesktopClick(event);
    }
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={imagePath} alt={movieData.title} />
      <div className="overlay">
        <div className="overlay-content">
          {/* Additional overlay content if needed */}
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