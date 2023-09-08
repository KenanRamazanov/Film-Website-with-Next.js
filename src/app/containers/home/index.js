import React from 'react'
import Movies from '../../mocks/movies.json'
import  Genres  from '../../mocks/genres.json'
import  FeaturedMovie  from '@/app/components/featured-movie'
import Categories from '../../components/categories/index'
function HomeContainer() {
  return (
    <div>
        <FeaturedMovie movie={Movies.results[0]}></FeaturedMovie>
        <Categories categories={Genres.genres.slice(0,5)}></Categories>
    </div>
  )
}

export default HomeContainer