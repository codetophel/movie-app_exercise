const API_KEY = 'a719eb1';
const requests = {
  fetchActionMovies: `https://www.omdbapi.com/?s=action&apikey=${API_KEY}`,
  fetchComedyMovies: `https://www.omdbapi.com/?s=comedy&apikey=${API_KEY}`,
  fetchHorrorMovies: `https://www.omdbapi.com/?s=horror&apikey=${API_KEY}`,
  fetchRomanceMovies: `https://www.omdbapi.com/?s=romance&apikey=${API_KEY}`,
};

export default requests;
