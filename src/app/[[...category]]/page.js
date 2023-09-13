import React from 'react'
import HomeContainer from '../containers/home/index'
import Movies from '../mocks/movies.json' 
import { resolve } from 'styled-jsx/css'

async function delay(ms){
  return new Promise((resolve) => setTimeout(resolve, ms))
}
async function HomePage({params}) {
  await delay(2000)
let selectedCategory;
    if( params.category?.length > 0){
  selectedCategory = true
    }
  return (
    <HomeContainer selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ?  Movies.results.slice(0,7) : [],
    }}></HomeContainer>
  )
}

export default HomePage