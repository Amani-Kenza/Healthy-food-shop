import {React,useEffect,useRef} from 'react'
import { Footer } from '../components/Footer'
import logo from '../Logo.png'
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
export default function Cakes() {
  const appRef = useRef(null);
  const appRef1 = useRef(null);
  const appRef2 = useRef(null);
  useEffect(() => {
    const tl1 = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
    tl1.to(appRef1.current.children, { rotation: 360, duration: 1 });
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
    tl.to(appRef.current, { y: -50, duration: 1 }) // Déplace l'élément vers le haut de 50 pixels
      .to(appRef.current, { y: 50, duration: 1 }); // Puis le déplace vers le bas de 50 pixels
    const tl2 = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
    tl2.to(appRef2.current, { y: -50, duration: 1 }) // Déplace l'élément vers le haut de 50 pixels
      .to(appRef2.current, { y: 50, duration: 1 }); // Puis le déplace vers le bas de 50 pixels
    return () => {
      tl.kill();
      tl1.kill();
      tl2.kill();
    };
  }, []);
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
                    <li className='p-4'><a href='/Shop'>Shop Now</a></li>
                    <li className='p-4'><a href='#About'>About</a></li>
                   </ul>
              </div>
        </div>
        <h1 className='text-white text-center p-24 text-6xl font-bold'>Healthy Recipes</h1>
      </div>
      <div className=' justify-start items-start flex' ref={appRef1}>
        <img  src={process.env.PUBLIC_URL + '/cookiee.png'}  alt='cakes' className='w-32'></img>
        <div className='ml'>
        <img  src={process.env.PUBLIC_URL + '/cookiee2.png'}  alt='cakes' className='w-32'></img>
        </div>
      </div>
      <div>
            <div  className="flex">
               <div className=" ml-48 mt-8">
                 <img src={process.env.PUBLIC_URL + '/cake2.jpg'}  alt='cakes' className="rounded-full w-96 h-72 "/>
                 <Link to="/Almond"><button className='rounded-2xl text-white bg ml-24 p-4 font-bold w-56 mt-2 animation'>Almond Floor Cake</button></Link>
               </div>
               <div className="mt-8 ml-32">
                 <img src={process.env.PUBLIC_URL + '/recipe1.jpg'} alt='cakes' className="rounded-full w-96 h-72 "/> 
                 <Link to="/Yogurt"><button className='rounded-2xl text-white bg ml-24 p-4 font-bold mt-2 w-56 animation'>Yogurt Cake</button></Link>
               </div>
            </div>
            <div className="flex">
              <div className="ml-48 mt-8">
                 <img src={process.env.PUBLIC_URL + '/recipe2.jpg'}  alt='cakes' className="rounded-full w-96 h-72 "/>
                 <Link to="/Lemon"><button className='rounded-2xl text-white bg ml-24 p-4 font-bold mt-2 w-56 animation'>Apple cake</button></Link>
              </div>
              <div className="ml-32 mt-8">
                 <img src={process.env.PUBLIC_URL + '/cookie.jpg'}  alt='cakes' className="rounded-full w-96 h-72 "/>
                 <Link to="/Cookie"><button className='rounded-2xl text-white bg ml-24 p-4 font-bold mt-2 animation w-56'>Chocolate Cookies</button></Link>
              </div>
            </div>
            <div className="flex">
              <div className="ml-48 mt-8">
                 <img src={process.env.PUBLIC_URL + '/recip.jpg'}  alt='cakes' className="rounded-full w-96 h-72 "/>
                 <Link to="/Muffin"><button className='rounded-2xl text-white bg ml-20 p-4 font-bold mt-2 animation w-56'>Blueberry Muffins</button></Link>
              </div>
              <div className="ml-32 mt-8">
                 <img src={process.env.PUBLIC_URL + '/cookie1.jpg'}  alt='cakes' className="rounded-full w-96 h-72 "/>
                 <Link to="/Cookie2"><button className='rounded-2xl text-white bg ml-20 p-4 font-bold mt-2 animation'>Flourless Monster Cookies</button></Link>
              </div>
            </div>
            <div  className="flex">
               <div className=" ml-48 mt-8">
                 <img src={process.env.PUBLIC_URL + '/recipe3.jpg'}  alt='cakes' className="rounded-full w-96 h-72 "/>
                 <Link to="/Chocolate"><button className='rounded-2xl text-white bg ml-24 p-4 font-bold w-56 mt-2 animation'>Chocolate Cake</button></Link>
               </div>
               <div className="mt-8 ml-32">
                 <img src={process.env.PUBLIC_URL + '/recipe4.jpg'} alt='cakes' className="rounded-full w-96 h-72 "/> 
                 <Link to="/Banana"><button className='rounded-2xl text-white bg ml-24 p-4 font-bold mt-2 w-56 animation'>Banana Muffins</button></Link>
               </div>
            </div>
            <div className="flex p-20">
              <div className="ml-4" ref={appRef}>
                <img src={process.env.PUBLIC_URL + '/slide.png'} alt='icon' className="w-62 h-48"/>
              </div>
              <div className="ml-32">
                 <img src={process.env.PUBLIC_URL + '/cake3.jpg'}  alt='cakes' className="rounded-full w-96 h-72 "/>
                 <Link to="/Apple"><button className='rounded-2xl text-white bg ml-16 p-4 font-bold mt-2 w-56 animation'>Fresh Apple Cake</button></Link>
              </div>
              <div ref={appRef2}> 
                <img src={process.env.PUBLIC_URL + '/slide3.png'} alt='icon' className="w-48 h-48 ml-48"/>
              </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
