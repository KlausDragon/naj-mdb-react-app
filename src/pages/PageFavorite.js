import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import MovieCard from '../components/MovieCard'; 


function FavoritesPage() {
  const { favorites } = useContext(GlobalContext);

  return (
    <div>
      <h2 className="favorites-title">Your Favorites</h2>
      
      <div className="movies-container">
        {favorites.length > 0 ? (
          <div>
            {favorites.map((movie) => (
              <MovieCard key={movie.id} movieData={movie} />
            ))}
          </div>
        ) : (
          <p>No favorites yet. Add some movies to your favorites!</p>
        )}
      </div>
    </div>
  );
}

export default FavoritesPage;
