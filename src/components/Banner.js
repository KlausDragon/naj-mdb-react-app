import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getMovieById } from "../utilities/api"; 
import { filterVideos } from "../utilities/toolbelt";

function Banner({movieId}) {

  const [movieData, setMovieData] = useState();
  const [movieVideos, setMovieVideos] = useState([]);

  useEffect(() => {
    getMovieById(movieId)
      .then((data) => {
        console.log("Data", data);

        console.log("safs", data.videos.results);
        const youtubeTrailerVideos = filterVideos(data.videos.results);
        setMovieData(data);
        setMovieVideos(youtubeTrailerVideos);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  console.log("movieVideos", movieVideos);

  return (
    <div className="movie-page">
      {movieData && (
        <>
          <h1 className="banner-title">{movieData.title}</h1>

            <div className="banner-trailer">
              <iframe
                src={`https://www.youtube.com/embed/${movieVideos[0].key}`}
                width="1000"
                height="400"
                title={movieData.name}
              ></iframe>
            </div>
        </>
      )}
    </div>
  );
}

export default Banner;
