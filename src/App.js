import './App.css';
import React, { useEffect, useState } from 'react';
import Row from './Row';
import Banner from './Banner';
import requests from './requests';
import NavBar from './NavBar';

function App() {
  useEffect(() => {}, []);

  return (
    <div className='App'>
      <NavBar></NavBar>
      <Banner></Banner>
      <Row
        title='Netflix Originals'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      ></Row>
      <Row title='Trending Now' fetchUrl={requests.fetchTrending}></Row>
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated}></Row>
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}></Row>
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
