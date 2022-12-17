import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const res = await axios.get(fetchUrl);
      setMovies(res.data.Search);
      return res;
    }
    fetchdata();
  }, [fetchUrl]);

  return (
    <div className='ml-5'>
      <h2 className='mt-5 font-semibold'>{title}</h2>
      <div className='flex overflow-x-scroll overflow-y-hidden p-5 scrollbar-thin '>
        {movies.map((movie) => {
          return (
            <img
              key={movie.imdbID}
              src={movie.Poster}
              alt={movie.Title}
              className='max-h-[150px] max-w-[150px] md:max-w-[250px] md:max-h-[200px] mr-3 md:mr-5 object-contain w-full rounded-md transition-transform hover:opacity-100 hover:scale-125 hover:duration-200'
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
