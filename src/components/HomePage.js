import React from 'react';
import Nav from './Nav';
import Row from './Row';
import requests from '../Requests';
import ShowCase from './ShowCase';
import Search from './Search';

const HomePage = () => {
  return (
    <div>
      <Nav />
      <ShowCase />
      <Search />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
};

export default HomePage;
