
import FeaturedMovie from '@/app/components/featured-movie'
import React from 'react'

function MovieContainer({movie}) {
  return (
    <FeaturedMovie movie={movie} isCompact={false}></FeaturedMovie>
  )
}

export default MovieContainer