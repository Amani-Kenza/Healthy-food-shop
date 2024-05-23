import React from 'react'
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function Order(){
  return (
    <div>
        <Navbar />
        <div className='border-2 rounded-lg shadow-2xl mt-12 ml-72 w-7/12 p-4'>
        <h1 className='font-bold text-2xl'>Delivery details</h1>
        <input type='text' placeholder='Full Name' className='p-4 mb-4 ml-12 mt-4 cursor-pointer border-2 border-gray-500 w-72 h-14'></input>
        <input type='text' placeholder='Address' className='p-4 mb-4 ml-12 mt-4  cursor-pointer border-2 border-gray-500 w-72 h-14'></input>
        <input type='text' placeholder='Postal Code' className='p-4 mb-4 ml-12 cursor-pointer border-2 border-gray-500 w-72 h-14'></input>
        <input type='tel' placeholder='Phone Number' className='p-4 mb-4 ml-12 cursor-pointer border-2 border-gray-500 w-72 h-14'></input>
        <input type='text' placeholder='City' className='p-4 mb-4 ml-12 cursor-pointer border-2 border-gray-500 w-72 h-14'></input>
        <input type='text' placeholder='Note' className='p-4 mb-4 ml-12 cursor-pointer border-2 border-gray-500 w-72 h-14'></input>
        <button className='text-white bg mt-4 cursor-pointer shadow-2xl animation rounded-lg font-bold w-10/12 h-12 ml-12'>Confirm order</button>
        </div>
        <Footer />
    </div>
  )
}
