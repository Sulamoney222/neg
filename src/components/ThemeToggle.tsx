import React from 'react'
import { useTheme } from 'next-themes'
import { FaSun, FaMoon } from 'react-icons/fa'


const ThemeToggle = () => {
    
const {theme, setTheme} = useTheme()

  return (
    <div>
     
        <button 
        onClick={()=>setTheme(theme=='light'? 'dark': 'light')}
        className='cursor-pointer '>
            {
               theme== 'light' ? <FaSun className='text-yellow-300'/> : <FaMoon/> 
            }
        </button>
      
    </div>
  )
}

export default ThemeToggle
