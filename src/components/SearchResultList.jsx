import React from 'react'
import { SearchResult } from './SearchResult'
import './styles/SearchResultList.css'

const SearchResultList = ({results}) => {
  return (
    <div className='result_list'>
        {results.map((result, id) => {
            return <SearchResult result = {result}  key={id}/>
        })}  
    </div>
  )
}

export default SearchResultList