import React from 'react'

const fetch = () => {
  return (
    <div>
        import { useEffect, useState } from 'react';

function App() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      const URL = 'https://www.omdbapi.com/?t=horror&apikey=a719eb1';
      const res = await fetch(URL);
      const result = await res.json();
      setMovie(result);
      console.log(result);
    };
    fetchMovie();
  }, []);
  return (
    <div className='flex overflow-x-scroll overflow-y-hidden p-5 scrollbar-thin'>
      {
        movie.map((mov) => {
        return (
          <img
            key={mov.imdbID}
            className='h-[200px] w-[200px] mr-3 md:mr-5  rounded-md transition-transform hover:opacity-100 hover:scale-125 hover:duration-200'
            src={mov.Poster}
            alt={mov.title}
          />
        );
      })} 

      {
        <img
          key={movie.imdbID}
          className='h-[200px] w-[200px] mr-3 md:mr-5  rounded-md transition-transform hover:opacity-100 hover:scale-125 hover:duration-200'
          src={movie.Poster}
          alt={movie.title}
        />
      }
    </div>
  );
}

export default App;

    </div>
  )
}

export default fetch