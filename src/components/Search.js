import axios from 'axios';
import React, { useState } from 'react';

const Search = () => {
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState([]);
  const API_KEY = 'a719eb1';

  const fetchdata = async () => {
    const res = await axios.get(
      `https://www.omdbapi.com/?s=${input}&apikey=${API_KEY}`
    );
    setMovies(res.data.Search);
    return res;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchdata();
    setInput('');
  };
  return (
    <div className='p-5'>
      <p className='mb-2'>Search</p>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type='text'
          className='w-full outline-2 border-[1px] border-black'
        />
      </form>

      {movies.length > 0 && <p className='mt-2'>Search Results</p>}
      <div className='grid grid-cols-4 place-items-center gap-3 mt-3'>
        {movies.map((mov) => {
          return (
            <div className='flex items-center flex-col '>
              <img
                key={mov.imdbID}
                src={mov.Poster}
                alt={mov.Title}
                className='max-h-[150px] max-w-[200px] md:max-w-[200px] md:max-h-[200px] mr-3 md:mr-5 object-contain w-full rounded-lg '
              />
              <h2 className='font-semibold mt-1'>{mov.Title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
