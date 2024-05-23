import {React, useEffect, useState} from "react"
import { Link } from "react-router-dom";


export const Banner =()=>{

          const [currentImage, setCurrentImage]=useState('slide.png');
          useEffect(()=>{
          const timeout=setTimeout(()=>{
               switch(currentImage){
                    case 'slide.png':
                    setCurrentImage('slide1.png');
                    break;
                    case 'slide1.png':
                         setCurrentImage('slide3.png');
                         break;
                    default:
                         setCurrentImage('slide.png');
                         break;
               }
          },3000)
           // Nettoie le timer lorsque le composant est démonté ou lorsque l'image change
           return () => clearTimeout(timeout);
          },[currentImage])
          
    return(
          <div className="Container">
               <div className="flex">
               <div className="quote">
                    <p className="text-2xl font-bold p-8 mt-14">By Choosing Healthy Over Skinny You Are <br/>Choosing Self-Love Over Self-Judgement</p>
                    <p className="text-base font-bold ml-8">Indulge in Our Deliciously Nutritious Recipes  <br/>for Cakes, Cookies, and Mouffins, <br/> and Discover the joy of Baking the Healthy Way!</p>
                    <Link to="/Recipes"><button className="rounded-full bg w-40 h-12 text-white font-bold mt-8 animation ml-36">Discover Now!</button></Link>
               </div>
               <div className="slider">
                   <img src={`${process.env.PUBLIC_URL}/${currentImage}`} alt='slide2'></img>
                   
               </div>
               </div>
               <div className="flex rounded-food items-center justify-center">
                    <img src={process.env.PUBLIC_URL + '/fruits.jpg'} className="rounded-full w-20 h-20 ml-8 mt-12" alt='fruits'></img>
                    <img src={process.env.PUBLIC_URL + '/cake.jpg'} className="rounded-full w-20 h-20 ml-8 mt-12" alt='cake'></img>
                    <img src={process.env.PUBLIC_URL + '/cookie.jpg'} className="rounded-full w-20 h-20 ml-8 mt-12" alt='cookie'></img>
                    <img src={process.env.PUBLIC_URL + '/recip.jpg'} className="rounded-full w-20 h-20 ml-8 mt-12" alt='cookie'></img>
                    <img src={process.env.PUBLIC_URL + '/slide3.png'} className="rounded-full w-20 h-20 ml-8 mt-12" alt='muffin'></img>
                    <img src={process.env.PUBLIC_URL + '/cookie1.jpg'} className="rounded-full w-20 h-20 ml-8 mt-12" alt='cake'></img>
               </div>
          </div>
         
     )
}


