import axios from './axios';
import React, { useState, useEffect } from 'react';
import './Row.css';

const base_url = 'https://image.tmdb.org/t/p/original';

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // if we use any variable inside a useEffect we need to add it to the dependency array. ---> Ex: fetchUrl
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //   console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className='row'>
      {/* Title */}
      <h2>{title}</h2>
      {/* container ---> images */}
      <div className='row__posters'>
        {movies.map((movie) => (
          <img
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default Row;
