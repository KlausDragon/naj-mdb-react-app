import { useState } from "react";
import MovieCard from "../components/MovieCard";
import '../scss/_workshop.scss'

function WorkShop() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  return (
    <div>
      <h2>Workshop</h2>
      <div className="card">
      <MovieCard/>
      </div>
    </div>
  );
}


export default WorkShop;


