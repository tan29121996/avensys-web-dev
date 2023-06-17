import React from 'react'
import MovieList from './MovieList'

function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
        
        <MovieList genreId={28} genre={"Action"} />
        <MovieList genreId={35} genre={"Comedy"} />
        <MovieList genreId={27} genre={"Horror"} />
        <MovieList genreId={10749} genre={"Romance"} />
        <MovieList genreId={9648} genre={"Mystery"} />
        <MovieList genreId={878} genre={"Sci-Fi"} />
        <MovieList genreId={16} genre={"Animation"} />
    </div>
  )
}

export default Home