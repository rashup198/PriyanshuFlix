import React, { useContext } from 'react'
import { AppContext } from './Context';
  


const Search = () => {

    function changeHandler(event) {
      setQuery(event.target.value)
    }
  const {query, setQuery,isError} = useContext(AppContext)
  return (
    <div>
      <section className='search-section'>
      <h2>Search Your Movie</h2>
      <form action='#' onSubmit={(e)=>e.preventDefault()}>
      <div>
        <input type='text' placeholder='Search here' value={query}
        onChange={changeHandler}></input>
      </div>

      </form>
      <div className='card-error'>
          <p>{isError.show && isError.msg}</p>
      </div>

      </section>
    </div>
  )
}

export default Search
