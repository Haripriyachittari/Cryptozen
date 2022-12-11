import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Themetoggle from './Themetoggle'
import  {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { UserAuth } from '../context/Authcontext'


const Navbar = () => {
    const {user,logout}=UserAuth();
    const navigate =useNavigate();

    const handleSignout=async()=>{
        try{
          await logout();
          navigate('/');
        }catch(e){
    
        }
      }

    const [nav,setNav]=useState(false);
    const handleNav =()=>{
        setNav(!nav);
    }
  return (
    <div className='rounded-div flex items-center justify-between h-20 font-bold'>
        <Link to='/'>
            <h1 className='text-2xl'>CryptoZen</h1>
        </Link>
        <div className='hidden md:block'>
            <Themetoggle/>
        </div>
       {user?.email ?( 
        <div className='flex'>
            <Link to='/account' className='p-4'>Account</Link>
            <button onClick={handleSignout} className='w-full px-3 bg-button text-btnText shadow-xl rounded-2xl my-2'>Sign out</button>
        </div>
       ):(
         <div className='hidden md:block'>
         <Link to='/signin' className='p-4 hover:text-accent'>Sign In</Link>
         <Link to='/signup' className='bg-button text-btnText ml-2 px-5 py-2 rounded-2xl shadow-lg hover:shadow-2xl'>Sign Up</Link>
     </div>
       )}
        {/* menu icon */}
        <div onClick={handleNav} className='block md:hidden cursor-pointer z-10'>
            {nav ? <AiOutlineClose size={25}/>:<AiOutlineMenu size={25}/> }
        </div>
        {/* Mobile menu */}
        <div className={nav ? 'md:hidden fixed left-0 top-20 bottom-0 w-full flex flex-col items-center justify-between bg-primary duration-300 ease-in z-10' : 'fixed left-[-100%] top-20 flex flex-col items-center justify-between  ease-in duration-300'}>
        <ul className='w-full p-4'>
            <li onClick={handleNav} className='border-b py-6'>
                <Link to='/'>Home</Link>
            </li>
            <li  onClick={handleNav} className='border-b py-6'>
                <Link to='/account'>Account</Link>
            </li>
            <li className=' py-6'>
                <Themetoggle/>
            </li>
        </ul>
        
        <div className='flex flex-col w-full p-4'>
            <Link onClick={handleNav} to='/signin'><button className='w-full bg-primary my-2 border border-secondary rounded-2xl shadow-xl p-3'>Sign In</button></Link>
            <Link onClick={handleNav} to='/signup'><button className='w-full p-3 bg-button text-btnText shadow-xl rounded-2xl my-2'>Sign Up</button></Link>
        </div>
        </div>
      
    </div>
  )
}

export default Navbar
