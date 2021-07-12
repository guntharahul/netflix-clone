import React, { useState, useEffect } from 'react';
import './Banner.css';
import axios from './axios';
import requests from './requests';
import InfoIcon from '@material-ui/icons/Info';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

const Banner = () => {
  const [movie, setMovie] = useState([]);
  //   console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      //get single random movie each time
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='banner__contents'>
        <h2 className='banner__title'>
          {movie?.name || movie?.title || movie?.original_name}
        </h2>

        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>More Info</button>
        </div>

        <p className='banner__description'>{truncate(movie?.overview, 150)}</p>
      </div>
      <div className='banner__fadeBottom'></div>
    </header>
  );
};

export default Banner;
