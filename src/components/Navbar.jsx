import {React,useContext,useEffect} from 'react'
import logo from '../Logo.png'
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import PersonIcon from '@mui/icons-material/Person';
import { CartContext } from './CartContext';

export const  Navbar=()=> {
    const { cartItemsCount, setCartItemsCount ,setCartItems} = useContext(CartContext) || {};

    useEffect(() => {
        const storedCartItemsCount = localStorage.getItem('cartItemsCount');
        if (storedCartItemsCount) {
          setCartItemsCount(parseInt(storedCartItemsCount, 10));
        }
    }, [setCartItemsCount]);
    // Store the items to display them in the basket
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, [setCartItems]);
    return (
      <div className='navbar flex bg'>
              <div className='search-logo flex'>
                   <img src={logo} alt='logo' className='w-16'></img>
                   <input type="search" placeholder="Search..." className="rounded-full border-2 custom-border p-2 w-80 h-10 mt-4 ml-12" />
                   <div className="search-icon cursor-pointer absolute flex items-center justify-center  rounded-full w-10  h-10 mt-4">
                   <FaSearch size={24} />
                   </div>
              </div>
              <div className='menu-items'>
                  <ul className='flex'>
                    <li className='p-4 animation'><Link to='/'>Home</Link></li>
                    <li className='p-4 animation'><Link to='/Recipes'>Recipes</Link></li>
                    <li className='p-4 animation'><Link to='/Shop'>Products</Link></li>
                    <li className='p-4 animation'><a href='#About'>About</a></li>
                    <Link to='/User'><li className='p-4 cursor-pointer'><PersonIcon /></li></Link>
                    <div>
                       <Link to='/Product'><li className='p-4 cursor-pointer absolute'><LocalGroceryStoreIcon/></li></Link>
                       <li className='text-center text-sm '>{cartItemsCount > 0 && <div className='border rounded-full bg-3 ml-8 w-5 h-5 mt-2 relative'>{cartItemsCount}</div>}</li>
                    </div>
                  </ul>
              </div>
        </div>
    
    )
    }