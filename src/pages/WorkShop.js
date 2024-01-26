import { useState } from "react";
import Banner from "../components/Banner";

function WorkShop() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  return (
    <div>
      <h2>Workshop</h2>
      <div className="card">
      <MovieCard/>
      </div>

<Banner /> 
      
    </div>
  );
}


export default WorkShop;


