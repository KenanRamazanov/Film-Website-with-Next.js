import React from 'react'
import Movies from '../../mocks/movies.json'
import  Genres  from '../../mocks/genres.json'
import  FeaturedMovie  from '@/app/components/featured-movie'
import Categories from '../../components/categories/index'
import MoviesSection from '@/app/components/movies-section'
function HomeContainer({selectedCategory}) {
  return (
    <div>
        <FeaturedMovie movie={Movies.results[0]}></FeaturedMovie>
        <Categories categories={Genres.genres.slice(0,5)}></Categories>
        {
          selectedCategory.movies.length > 0 &&(
            <MoviesSection title={Genres.genres.find(genre => `${genre.id}` === selectedCategory.id).name} movies={selectedCategory.movies}></MoviesSection>
          )}
        
        <MoviesSection title='Popular Films' movies={Movies.results.slice(1,7)}></MoviesSection>
        <MoviesSection title='Your Favorites' movies={Movies.results.slice(7,13)}></MoviesSection>

    </div>
  )
}

export default HomeContainer