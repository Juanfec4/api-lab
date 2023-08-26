import axios from "axios"
import { useEffect, useState } from "react"

import './styles.scss';

function App() {
  const [movies, setMovies] = useState(undefined)

  const config = {
    params:{
      api_key : import.meta.env.VITE_API_KEY
    }
  }
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/discover/movie`,config).then((response)=>{setMovies(response.data.results)})
  },[])
  return (
    <>
    {movies !== undefined ? <ul className="movies__list">{movies.map((movie)=>{
      return <li key={movie.id} className="movies__list-item"><h3 className="movies__title">{movie.original_title}</h3><img src={"https://image.tmdb.org/t/p/original" + movie.poster_path} className="movies__movie-image" /></li>
    })}</ul>: null}
    </>
  )
}

export default App
