import React from 'react'
import {Navbar} from '../components/Navbar'
import {Footer} from '../components/Footer'
export default function ForgotPassword() {
  return (
    <div>
    <Navbar />
    <div className=' ml-8 mt-8'>
    <h1 className='mb-2 text-2xl font-bold'>Forgotten password</h1>
    <input
          type="email"
          id="email"
          name="email"
          placeholder='Email'
          className='p-4 mb-4 cursor-pointer border-2 border-gray-500 w-96 h-15'
    />
    <br/>
    <button className='text-white bg-2 ml-2 cursor-pointer shadow-2xl animation rounded-large font-bold w-32 h-12'>Send</button>
    </div>
    <Footer />
    </div>
  )
}
