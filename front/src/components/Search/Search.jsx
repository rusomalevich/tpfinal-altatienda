import React, { useState, useEffect } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import './search.css'

const Search = () => {
  const [q, setQ] = useState("")
  const { filterSearch } = useCustomContext()

  const handleChange=(e) => {
    const searchValue = e.target.value
    setQ(searchValue)

   filterSearch(searchValue)
  }

  return (
    <form className='searchForm'>
      <label htmlFor="search" className='searchLabel'>Buscar</label>
        <input
          type="search"
          placeholder='Buscar'
          id='search'
          name='search'
          className='searchInput'
          value={q}
          onChange={handleChange}
          />
    </form>
  )
}

export default Search