import React ,{useState}from 'react'
import { AiFillLock, AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {signIn,UserAuth} from '../context/Authcontext'

const Signin = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');
  const navigate=useNavigate();
  const{signIn} = UserAuth();

  const handleSubmit= async(e)=>{
    e.preventDefault()
    setError('');
    try{
       await signIn(email,password)
       navigate('/account')
    } catch(e){setError(e.message)
    console.log(e.message)}


  }

  return (
    <div>
      <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-28'>
        <h1 className='text-2xl font-bold'>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className='my-4'>
            <label>Email</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl'>
              <input onChange={(e)=>setEmail(e.target.value)}
               className='w-full p-2 bg-primary border border-input rounded-2xl' type='email' placeholder='Enter your email'/>
              <AiOutlineMail className='absolute right-2 top-3 text-gray-600'/>
            </div>
          </div>
          <div>
            <label>Password</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl'>
              <input onChange={(e)=>setPassword(e.target.value)}
               className='w-full p-2 bg-primary border border-input rounded-2xl' type='password' placeholder='Password'/>
              <AiFillLock className='absolute right-2 top-3 text-gray-600'/>
            </div>
          </div>
          <button className='bg-button mt-4  mb-2 rounded-2xl text-btnText shadow-xl  p-3 w-full'>Sign In</button>
        </form>
        <p>Don't have an account? <Link to='/signup' className='text-accent'>Sign Up</Link></p>
      </div>
    </div>
  )
}

export default Signin
