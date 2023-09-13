import React from 'react'
import  CategoriesLoading  from '../components/categories/loading'
import { FeatureMovieLoading } from '../components/featured-movie/loading'
import { MoviesSectionLoading } from '../components/movies-section/loading'
function loading() {
  return (
    <div>
        <FeatureMovieLoading></FeatureMovieLoading>
        <CategoriesLoading></CategoriesLoading>
        <MoviesSectionLoading></MoviesSectionLoading>
        <MoviesSectionLoading></MoviesSectionLoading>
        <MoviesSectionLoading></MoviesSectionLoading>

    </div>
  )
}

export default loading