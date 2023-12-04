import React from 'react'
import './darkModeToggle.css'
import { SunFill, MoonFill } from 'react-bootstrap-icons'
import { useCustomContext } from '../../ContextManager/ContextProvider'

const DarkModeToggle = ({handleChange, isChecked}) => {

  const {isDark} = useCustomContext()

  return (
    <div className='toggleCont'>
        <input
            type='checkbox'
            id='check'
            className='toggle'
            onChange={handleChange}
            checked={isChecked}
             />
        <label
            htmlFor='check'
            className='iconDarkMode'
        > 
            {isDark
                ? <SunFill />
                : <MoonFill />
            
            }
        </label>
    </div>
  )
}

export default DarkModeToggle