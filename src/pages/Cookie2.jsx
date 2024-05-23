import React from 'react' 
import {Footer} from '../components/Footer'
import { Link } from 'react-router-dom'
import logo from '../Logo.png'
import { FaSearch } from 'react-icons/fa';
export default function Almond() {
  return (
    <div>
        <div className='bg h-72 curve '>
        <div className='navbar flex'>
              <div className='search-logo flex'>
                   <img src={logo} alt='logo' className='w-16'></img>
                   <input type="search" placeholder="Search..." className="rounded-full border-2 custom-border p-2 w-80 h-10 mt-4 ml-12" />
                   <div className="search-icon cursor-pointer absolute flex items-center justify-center  rounded-full w-10  h-10 mt-4">
                   <FaSearch size={24} />
                   </div>
              </div>
              <div className='menu-items'>
                   <ul className='flex'>
                    <li className='p-4'><Link to='/'>Home</Link></li>
                    <li className='p-4'><Link to='/Recipes'>Recipes</Link></li>
                    <li className='p-4'><a href='#Shop Now'>Shop Now</a></li>
                    <li className='p-4'><a href='#About'>About</a></li>
                   </ul>
              </div>
        </div>
        <h1 className='text-white text-center p-24 text-6xl font-bold'>Flourless Monster Cookies</h1>
        </div>
       <div className='mt-8 border ml-48 mr-48 rounded-lg'>
            <div className='ml-14 mt-4'> 
             <img src={process.env.PUBLIC_URL + '/cookie1.jpg'}  alt='cakes' className="rounded-lg w-11/12 h-96"/>
            </div>
        
            <div className='text-start font-bold ml-14'>
                <h1 className='p-2 text-3xl h2-color'>Ingredients</h1>
                <p>2 small very ripe bananas</p>
                <p>1 cup old fashioned oats</p>
                <p>¼ cup natural peanut butter crunchy or creamy</p>
                <p>2 tsp vanilla</p>
                <p>1/2 tsp salt</p>
                <p>1/4 cup dark chocolate, roughly chopped (dairy-free, if needed)</p>
                
            </div>
            <div className='mt-4'>
               <h1 className='text-white font-bold text-3xl bg-1 p-4 rounded-t-lg text-center'>Nutrition facts (per serving)</h1>
              <div className='flex bg-1'>
                  <button className='bg rounded-lg w-56 h-32 text-white font-bold text-2xl'>Calories <br/>141 (100g)</button>
                  <button className='bg rounded-lg w-56 h-32 text-white font-bold text-2xl'>Carbohydrates:<br/> 18g</button>
                  <button className='bg rounded-lg w-56 h-32 text-white font-bold text-2xl'>Protein: <br/> 5g</button>
                  <button className='bg rounded-lg w-56 h-32 text-white font-bold text-2xl'>Fat: <br/>6g</button>
              </div>
      
            </div>
        </div>
       
       
        <Footer />
    </div>
  )
}
