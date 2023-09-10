import React from 'react'
import MovieContainer from '@/app/containers/movie'
import Movies from '../../mocks/movies.json'
import {notFound} from 'next/navigation'
async function MoviePage({params, searchParams}) {
  const movieDetail = Movies.results.find(
    movies => movies.id.toString() === params.id);
    if (!movieDetail){
      notFound()
    }
    if( searchParams.error === 'true'){
      throw new Error("Error happened");
    }
  return (
    <MovieContainer movie={movieDetail}></MovieContainer>
  )
}

export default MoviePage