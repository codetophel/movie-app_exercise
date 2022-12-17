import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowCase = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        'https://www.omdbapi.com/?s=comedy&apikey=a719eb1'
      );
      // console.log(res.data.Search);
      setMovie(
        res.data.Search[Math.floor(Math.random() * res.data.Search.length)]
      );
      return res;
    }

    fetchData();
  }, []);

  return (
    <header
      className='h-[30rem] relative'
      style={{
        backgroundSize: 'center',
        backgroundImage: `url(${movie.Poster})`,
        backgroundPosition: 'center cover',
      }}
    >
      <div className='ml-5 md:ml-10 py-10 h-24 text-white'>
        <h1 className='mt-32 text-4xl font-bold pb-3'>{movie.Title}</h1>
      </div>

      <div className='showcase-fade' />
    </header>
  );
};

export default ShowCase;
