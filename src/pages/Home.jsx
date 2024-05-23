//import {React,useEffect,useContext} from "react";
import { Navbar } from '../components/Navbar';
import { Banner } from '../components/Banner';
import { Trending } from '../components/Trending';
import { About } from '../components/About';
import { Footer } from '../components/Footer';
import { CartProvider } from '../components/CartContext';

import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';

function Home() {
  return (

      <div className="Home">
        <CartProvider>
        <Navbar />
        <Banner />
        <Trending />
        <About />
        <Footer />
        </CartProvider>
      </div>

  );
}

export default Home;
