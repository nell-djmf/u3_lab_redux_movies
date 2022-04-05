import axios from "axios"
const TMDB_KEY = process.env.REACT_APP_TMDB_KEY

export const GetMovies = async () => {
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_KEY}`)
    console.log(res.data.results)
    return res.data.results
  } catch (error) {
    throw error
  }
}

