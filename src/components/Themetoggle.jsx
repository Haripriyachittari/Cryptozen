import React ,{useContext} from 'react'
import {HiMoon,HiSun } from 'react-icons/hi'
import {ThemeContext} from '../context/Themecontext'

const Themetoggle = () => {
    const {theme,setTheme} =useContext(ThemeContext);
    const  handleClick =()=>{
        setTheme(theme === 'dark' ? 'light':'dark')
    }
  return (
    <div className='p-2'>
      { theme==='dark' ?
       (
      <div className='flex items-center cursor-pointer ' onClick={handleClick}><HiSun size={25} className='text-primary text-2xl mr-2'/> Light Mode</div>):
      (
      <div  className='flex items-center cursor-pointer'  onClick={handleClick}><HiMoon size={25} className='text-primary text-2xl mr-2'/> Dark Mode</div>)}
    </div>
  )
}

export default Themetoggle
