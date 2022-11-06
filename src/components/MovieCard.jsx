import React from 'react'
import { Link } from 'react-router-dom';
import StarRating from './StarRating'

const MovieCard = ({movie}) => {

  return (
    <div className='Movie-Card'>
        <StarRating rating={movie.rating}/>
        <img src={movie.poster} alt=""/>
        <center>
        <h3>{movie.name}</h3>
      
        <p>{movie.data}</p>
        <Link to={`/detail/${movie.id}`}>
        <button className='btn' variant="primary">Info</button>
        </Link>
        </center>


    </div>
  );
};

export default MovieCard