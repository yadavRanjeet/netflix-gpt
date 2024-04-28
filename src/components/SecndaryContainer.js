import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import {useEffect} from "react"
const SecndaryContainer = () => {
  const movies = useSelector((store) => store?.movies)
    if (!movies.nowPlayingMovies) return;
  if (!movies.popularMovies) return;
  
  // console.log("movies.nowPlayingMovies[0]", movies.nowPlayingMovies[0]);
  return (
    <div className=" bg-black">
      <div className="-mt-52 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList
          title={"Upcoming Movies"}
          movies={movies?.nowPlayingMovies}
        />
        <MovieList title={"Horror Movies "} movies={movies?.nowPlayingMovies} />
      </div>
    </div>
  );
}

export default SecndaryContainer