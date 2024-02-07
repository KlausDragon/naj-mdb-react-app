import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import MoviesContainer from '../components/MoviesContainer';

function FavoritesPage() {
  const { favorites } = useContext(GlobalContext);

  return (
    <div>
      <h2 className="favorites-title">Your Favorites</h2>

      {favorites.length > 0 ? (
        <div>
          <MoviesContainer moviesData={favorites} />
        </div>
      ) : (
        <p className="favorites-text">No favorites yet. Add some movies to your favorites!</p>
      )}
    </div>
  );
}

export default FavoritesPage;
