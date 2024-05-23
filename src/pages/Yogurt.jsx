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
        <h1 className='text-white text-center p-24 text-6xl font-bold'>Yogurt Cake</h1>
        </div>
       <div className='mt-8 border ml-48 mr-48 rounded-lg'>
            <div className='ml-14 mt-4'> 
             <img src={process.env.PUBLIC_URL + '/recipe1.jpg'}  alt='cakes' className="rounded-lg w-11/12"/>
            </div>
          
            <div className='text-start font-bold ml-14'>
                <h1 className='p-2 text-3xl h2-color'>Ingredients</h1>
                <p>4 large eggs, separated</p>
                <p>1 tablespoon orange zest, plus more for garnish</p>
                <p>1 teaspoon almond extract</p>
                <p>½ cup granulated sugar, divided</p>
                <p>1 ½ cups almond flour</p>
                <p>1 teaspoon baking powder</p>
                <p>½ teaspoon salt</p>
                <p>½ cup raw sliced almonds</p>
            
            </div>
            <div className='mt-4'>
               <h1 className='text-white font-bold text-3xl bg-1 p-4 rounded-t-lg text-center'>Nutrition facts (per serving)</h1>
              <div className='flex bg-1'>
                  <button className='bg rounded-lg w-56 h-32 text-white font-bold text-2xl'>Calories <br/>258 (100g)</button>
                  <button className='bg rounded-lg w-56 h-32 text-white font-bold text-2xl'>Fat <br/> 17g</button>
                  <button className='bg rounded-lg w-56 h-32 text-white font-bold text-2xl'>Carbs <br/> 19g</button>
                  <button className='bg rounded-lg w-56 h-32 text-white font-bold text-2xl'>Protein <br/> 9g</button>
              </div>
      
            </div>
        </div>
       
       
        <Footer />
    </div>
  )
}
