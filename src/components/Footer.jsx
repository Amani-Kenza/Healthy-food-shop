import React from 'react'
import logo from '../Logo.png'
import { FaTwitter, FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importe les icônes nécessaires
export const Footer=() =>{
  return (
    <div className='flex bg-1 mt-36'>
        <div>
            <img src={logo} alt='logo' className='w-48 cursor-pointer'></img>
        </div>
        <div className='text-white border border-solid'></div>
        <div className='flex'>
               <div>
                 <p className='text-white mt-16 ml-20 font-bold'>Sign up and get one recipe<br/> for free every day</p>
                 <button className="rounded-full bg-2 w-28 h-8 text-white font-bold mt-8 ml-20">Sign up</button>
                </div>
                <div>
                
                 <p className='text-white mt-16 ml-96 font-bold'>&copy; All right reserved</p>
                 <div className='icons flex mt-12 ml-96 '>
                 <FaFacebookSquare size={30} color="white" className='ml-2 cursor-pointer' />
                 <FaInstagram size={30} color="white" className='ml-2 cursor-pointer' />
                 <FaLinkedin size={30} color="white" className='ml-2 cursor-pointer'/>
                 <FaTwitter size={30} color="white" className='ml-2 cursor-pointer'/>
                 </div>
               </div>
        </div>
    </div>
  )
}
