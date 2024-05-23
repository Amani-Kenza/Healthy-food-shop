import {React} from 'react'
import { Link } from 'react-router-dom'
import { Cart } from './Cart';
export const  Trending=() =>{

  return (
    <div>
        <h1 className='font-bold text-2xl p-8'>Trending Recipes</h1>
   
        <div className='recipes flex recipe-container'>
             <div className='recipe ml-16'>
                <img src={process.env.PUBLIC_URL + '/recipe1.jpg'} className='w-64 h-52' alt='cake recipe'></img>
                <h2 className='text-center h2-color mt-2 font-bold'>YOGURT CAKE</h2>
                <p className='text-base font-bold'>This simple and delicious cake<br/> is a must:no refined sugar,<br/> no refined flour...</p>
                <Link to='/Yogurt'><button className="rounded-full bg w-36 h-12 text-white font-bold mt-4 ml-8 animation">Read More</button></Link>
             </div>
             <div className='recipe ml-8'>
                <img src={process.env.PUBLIC_URL + '/recipe3.jpg'} className='w-64 h-52'alt='cake recipe'></img>
                <h2 className='text-center h2-color mt-2 font-bold'>CHOCOLATE CAKE</h2>
                <p  className='text-base font-bold'>This easy chocolate cake recipe<br/>is absolutely scrumptious<br/>with a rich chocolate flavor...</p>
                <Link to='/Chocolate'><button className="rounded-full bg w-36 h-12 text-white font-bold mt-4 ml-8 animation">Read More</button></Link>
             </div>
             <div className='recipe ml-8'>
                <img src={process.env.PUBLIC_URL + '/recipe2.jpg'} className='w-64 h-52' alt='cookie recipe'></img>
                <h2 className='text-center h2-color mt-2 font-bold'>APPLE CAKE</h2>
                <p  className='text-base font-bold'>This delicious and moist apple<br/>cake contains 4 large crunchy<br/>apples and 1 cup of yogurt...</p>
                <Link to='/Apple'><button className="rounded-full bg w-36 h-12 text-white font-bold mt-4 ml-8 animation">Read More</button></Link>
             </div>
             <div className='recipe ml-8'>
                <img src={process.env.PUBLIC_URL + '/recipe4.jpg'} className='w-64 h-52' alt='muffin recipe'></img>
                <h2 className='text-center h2-color mt-2 font-bold'>BANANA MOUFFINS</h2>
                <p className='text-base font-bold'>This healthy and easy mouffins<br/>is a German classic recipes<br/>with no sugar added... </p>
                <Link to='/Banana'><button  className="rounded-full bg w-36 h-12 text-white font-bold mt-4 ml-8 animation">Read More</button></Link>
             </div>
        </div>
        <h1 className='font-bold text-2xl p-8'>Trending Food</h1>
        <div className='recipes flex recipe-container'>
             <div className='recipe ml-16'>
                <img src={process.env.PUBLIC_URL + '/cake2.jpg'} className='w-64 h-52' alt='cake'></img>
                <h2 className='text-center h2-color mt-2 font-bold'> Almod Floor Cake</h2>
                <Link to='/Shop'><Cart /></Link>
             </div>
             <div className='recipe ml-8'>
                <img src={process.env.PUBLIC_URL + '/cookie2.jpg'} className='w-64 h-52' alt='cookie'></img>
                <h2 className='text-center h2-color mt-2 font-bold'>Flourless Monster Cookies</h2>
                <Link to='/Shop'><Cart /></Link>
             </div>
             <div className='recipe ml-8'>
                <img src={process.env.PUBLIC_URL + '/muffin1.jpg'} className='w-64 h-52' alt='muffin'></img>
                <h2 className='text-center h2-color mt-2 font-bold'>Peanut Butter-Chocolate </h2>
                <Link to='/Shop'><Cart /></Link>
             </div>
             <div className='recipe ml-8'>
                <img src={process.env.PUBLIC_URL + '/cake1.jpg'} className='w-64 h-52' alt='cake'></img>
                <h2 className='text-center h2-color mt-2 font-bold'>Sweet Potato Dump Cake</h2>
                <Link to='/Shop'><Cart /></Link>
             </div>
            
        </div>
    </div>
  )
}
