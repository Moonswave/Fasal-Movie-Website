import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
  const {query, setQuery, isError} = useGlobalContext();

  return(
  <section className='Search'>
    <form action='#' onSubmit={(e) => e.preventDefault()}>
      <div>
        <input type='text' placeholder='Search Movie' value={query} className='Searchbar' onChange={(e) =>setQuery(e.target.value)}>
        </input>
      </div>
    </form>
  </section>
  );

}

export default Search