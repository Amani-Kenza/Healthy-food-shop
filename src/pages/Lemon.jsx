import React from 'react' 
import {Footer} from '../components/Footer'
import { Link } from 'react-router-dom'
import logo from '../Logo.png'
import { FaSearch } from 'react-icons/fa';
export default function Lemmon() {
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
        <h1 className='text-white text-center p-24 text-6xl font-bold'>Lemon-Bleuberry Cake</h1>
        </div>
       <div className='mt-8 border ml-48 mr-48 rounded-lg'>
            <div className='ml-14 mt-4'> 
             <img src={process.env.PUBLIC_URL + '/cake.jpg'}  alt='cakes' className="rounded-lg w-11/12"/>
            </div>
          
            <div className='text-start font-bold ml-14'>
                <h1 className='p-2 text-3xl h2-color'>Ingredients</h1>
                <p>¾ cup all-purpose flour</p>
                <p>¾ cup whole-wheat flour</p>
                <p>2 teaspoons baking powder</p>
                <p>¼ teaspoon salt</p>
                <p>2 large lemons</p>
                <p>¾ cup 4%-fat cottage cheese</p>
                <p>2 large eggs</p>
                <p>¾ cup granulated sugar plus 1 tablespoon, divided</p>
                <p>2 cups fresh blueberries</p>
                <p>6 tablespoons unsalted butter, melted, plus more for pan</p>
            
            </div>
            <div className='mt-4'>
               <h1 className='text-white font-bold text-3xl bg-1 p-4 rounded-t-lg text-center'>Nutrition facts (per serving)</h1>
              <div className='flex bg-1'>
                  <button className='bg rounded-lg w-56 h-32 text-white font-bold text-2xl'>Calories <br/>301 (100g)</button>
                  <button className='bg rounded-lg w-56 h-32 text-white font-bold text-2xl'>Fat <br/> 11g</button>
                  <button className='bg rounded-lg w-56 h-32 text-white font-bold text-2xl'>Carbs <br/> 46g</button>
                  <button className='bg rounded-lg w-56 h-32 text-white font-bold text-2xl'>Protein <br/> 7g</button>
              </div>
      
            </div>
        </div>
       
       
        <Footer />
    </div>
  )
}
