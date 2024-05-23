import React, { useContext,useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/CartContext';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import DeleteIcon from '@mui/icons-material/Delete';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
export default function ProductCart() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { cartItemsCount,setCartItemsCount } = useContext(CartContext);
  const [ContentVisible, setContentVisibility] = useState({});

  const handleDeleteClick = (index) => {
    const updatedVisibilityMap = { ...ContentVisible };
    updatedVisibilityMap[index] = false;
    setContentVisibility(updatedVisibilityMap);
  
    // To get the product deleted quantity
    const productDeleted = cartItems[index];
  
    // Mettre à jour les articles du panier en enlevant l'article supprimé
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
     // Réinitialiser la visibilité après la suppression
    const updatedVisibilityReset = {};
    updatedCartItems.forEach((_, i) => {
    updatedVisibilityReset[i] = true;
    });
  setContentVisibility(updatedVisibilityReset);
     // Mettre à jour le stockage local après la suppression
     setCartItems(updatedCartItems);
    // Update the items count in the shop
    setCartItemsCount(cartItemsCount - productDeleted.quantity);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    localStorage.setItem('cartItemsCount', (cartItemsCount - productDeleted.quantity).toString());
  };
  
  // Store the items to display them in the basket
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, [setCartItems]);

   // Calculer la somme totale des prix des produits dans le panier
   const totalAmount = cartItems.reduce((total, item) => {
    // Convertir le prix du produit en nombre et l'ajouter au total
    return total + parseFloat(item.productPrice.replace('$', ''));
  }, 0);
  
  return (
    <div>
      <Navbar />
    <div className='flex'>
      <h1 className='mt-8 font-bold text-5xl ml-4 mb-8'>Cart</h1>
      <div className='mt-12 ml-4'><LocalGroceryStoreIcon></LocalGroceryStoreIcon></div>
      </div>
      {cartItems.length===0 && 
      <h2 className='mt-8 font-bold text-3xl ml-4 mb-8'>You have no items in your shopping cart.<br/>
          <span className='text-base'>Add any item from <Link className='border-b-2 h2-color' to="/Shop">product list.</Link></span></h2>
      }
      <ul>
        <div className='flex'>
        <div>
        {cartItems.map((item, index) => (
        <li key={index}>
          
          {ContentVisible[index] !== false && (
          <>
          <div className='flex'>
            <div className='flex ml-12'>
            <div>
            <div className='mt-12 mr-32 ml-8 cursor-pointer justify-center' onClick={() => handleDeleteClick(index)}><DeleteIcon></DeleteIcon></div>
            <p className='text-xs mt-2'>Remove product</p>
            </div>
            <img src={item.productImg} alt={item.productName} className='w-16 h-16 mt-12 rounded-full' />
            <div className='mt-2 flex'>
            <div className=''>
            <p className='mt-12 ml-12'>{item.quantity}</p>
            <p className='text-xs ml-8'>Quantity</p>
            </div>
            <div className='ml-24 flex flex-col'> {/* Ajout d'une classe pour aligner les prix */}
                <p className='font-bold mt-14'>{item.productPrice}</p>
           </div>
           <div className='ml-24 flex flex-col'>
            <p className='mt-12 text-sm'>{item.productName}</p>
            <p className='text-xs'>Code:{item.productId}</p>
            </div>
            </div>
            </div>
            </div>
            </>
            )}
             
        </li>
        ))}
        
        </div>
        {cartItems.length!==0 && 
        <div className='border-2 rounded-lg shadow-2xl ml-24 w-3/12 p-4'>
                <h1 className='font-bold'>Already have a coupon or gift card?</h1>
                <div className='flex mt-4'>
                    <input type='text' placeholder='Enter coupon code' className='p-4 mb-4 cursor-pointer border-2 border-gray-500 w-56 h-14'></input>
                    <button className='text-white bg cursor-pointer text-xs font-bold w-56 h-14'>use code</button>
            </div>
            <h1 className='mt-4 font-bold'>Order summary</h1>
            <h2 className='mt-4'>Product price including VAT without discount:<span className='ml-32'>{totalAmount}$</span></h2>
            <h2>Delivery: <span className='ml-32'>3.70€</span></h2>
            <h2 className='mt-8'>Total including VAT: <span className='ml-12 font-bold'>{(3.7 + parseFloat(totalAmount.toFixed(2)))}€</span></h2>
            <Link to='/User'><button className='text-white bg mt-4 cursor-pointer shadow-2xl animation rounded-lg font-bold w-10/12 h-12 ml-8'>Proceed to checkout</button></Link>
        </div>
        }
        </div>
      </ul>
      <Footer />
    </div>
  );
}