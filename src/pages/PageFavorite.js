import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import MoviesContainer from "../components/MoviesContainer";

function FavoritesPage() {
  const { favorites } = useContext(GlobalContext);

  return (
    <div className="favorites-content">
      <h1 className="favorites-title">Your Favorites</h1>

      {favorites.length > 0 ? (
        <div>
          <MoviesContainer moviesData={favorites} />
        </div>
      ) : (
        <p className="favorites-text">
          No favorites yet. Add some movies to your favorites!
        </p>
      )}
    </div>
  );
}

export default FavoritesPage;
