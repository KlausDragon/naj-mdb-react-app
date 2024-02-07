import React from 'react';
import { useNavigate } from 'react-router-dom';



function MoreInfo({ movieData }) {
    const navigate = useNavigate();

  
    const handleClick = (event) => {
      event.preventDefault();
      navigate(`/movie/${movieData.id}`);
    };

  return (
    <button className='more-info' onClick={handleClick}>
      <p>More Info</p>
    </button>
  );
};

export default MoreInfo;