import React, { useState} from "react"
import Search from '../Search/Search'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import './filter.css'

const Filter = () => {
  const { categories, filterCatSearch } = useCustomContext()
  const [catFilterValue, setCatFilterValue] = useState('')

  let filterCatForm = document.querySelectorAll('.btnCatFilter')

  const filterChangeToggle = (e) => {
    e.preventDefault()
    filterCatForm.forEach(btn => {
      btn.classList.remove("activeBtn")
    })
    if (catFilterValue !== e.target.value){
      e.target.classList.add('activeBtn')
      setCatFilterValue(e.target.value)
      filterCatSearch(e.target.value)
    } else {
        setCatFilterValue('')
        filterCatSearch('')
    }

  }

  return (
    <div className='filter'>
      <Search />
      <div className='filterCategory'>
        <h2>Categoría</h2>
        <form action="" id='filterCatForm' className='formBrand formChecks'>
          {
            categories.map((category) => (
                <button onClick={filterChangeToggle} key={category} name="category" className='btnCatFilter' value={category}>{category}</button>
            ))
            
          }

        </form>
      </div>
    </div>
  )
}

export default Filter