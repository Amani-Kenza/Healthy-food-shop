import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Navbar} from '../components/Navbar'
import { Footer } from './../components/Footer';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
const Form = () => {
  //
  const [loginData, setLoginFormData] = useState({
    email: '',
    password: '',
  });
  //
  const [signData, setSignFormData] = useState({
    fullName:'',
    email: '',
    password: '',
    passwordConfirm:''
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginData,
      [name]: value,
    });
  };
  //
  const handleSignChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...signData,
      [name]: value,
    });
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Faire quelque chose avec les données du formulaire, comme les envoyer à un serveur
    console.log(loginData);
    // Réinitialiser le formulaire après la soumission
    setLoginFormData({
      email: '',
      password: '',
    });
  };
  //
  const handleSignSubmit = (e) => {
    e.preventDefault();
    // Faire quelque chose avec les données du formulaire, comme les envoyer à un serveur
    console.log(signData);
    // Réinitialiser le formulaire après la soumission
    setSignFormData({
      fullName:'',
      email: '',
      password: '',
      passwordConfirm:''
    });
  };
  return (
  <div>
    <Navbar />
    <div className='border-2 rounded-lg flex mt-12 ml-48 shadow-2xl ml-24 w-9/12 p-8'>
    <div className='ml-12 text-center'>
    <h1 className='font-bold mt-4 mb-4'>Log In</h1>
    <form onSubmit={handleLoginSubmit}>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='email'
          value={loginData.email}
          onChange={handleLoginChange}
          className='p-4 mb-4 cursor-pointer border-2 border-gray-500 rounded-full w-56 h-10'
        />
      </div>
      <div>
        <input
          type="password"
          id="password"
          name="password"
          placeholder='password'
          value={loginData.password}
          onChange={handleLoginChange}
          className='p-4 mb-2 cursor-pointer rounded-full border-2 border-gray-500 w-56 h-10'
        />
        <Link to='/ForgotPassword'><h5 className='ml-24 mb-4 cursor-pointer'>Forget password?</h5></Link>
      </div>
      <div className="flex justify-center items-center">
      <Link to='/Order'><button className='text-white bg-2 ml-2 cursor-pointer shadow-2xl animation rounded-full font-bold w-32 h-12'>Log in</button></Link>
      </div>
      <div className='border border-solid w-48 mt-4 ml-4'></div>
      <div>
        <button className='cursor-pointer animation mt-2 rounded-full border-2 w-56 h-12'><GoogleIcon/> Continue with Google</button>
      </div>
      <div>
        <button className='ml-2 cursor-pointer animation mt-2 rounded-full border-2 w-56 h-12'><FacebookIcon/> Continue with Facebook</button>
      </div>
    </form>
    </div>
    <div className='text-white border border-solid h-99 ml-14'></div>
    <div className='ml-4 text-center'>
    <h1 className='text-left font-bold'>Become a member</h1>
     <p className='text-left'>By registering to healthyCrumb you'll be able to shop easier and quicker, check the status of your orders and earn other benefits.<br/>
        - Faster and easier shopping<br/>
        - Better user interface on more devices<br/>
        - Special offers</p>
    <h1 className='font-bold mt-4 mb-4'>Sign Up</h1>
    <form onSubmit={handleSignSubmit}>
      <div>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder='FullName'
          value={signData.fullName}
          onChange={handleSignChange}
          className='p-4 mb-4 cursor-pointer border-2 border-gray-500 rounded-full w-56 h-10'
        />
      </div>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Email'
          value={signData.email}
          onChange={handleSignChange}
          className='p-4 mb-4 cursor-pointer border-2 border-gray-500 rounded-full w-56 h-10'
        />
      </div>
      <div>
        <input
          type="password"
          id="passwordSign"
          name="passwordSign"
          placeholder='Password'
          value={signData.passwordSign}
          onChange={handleSignChange}
          className='p-4 mb-4 cursor-pointer border-2 border-gray-500 rounded-full w-56 h-10'
        />
      </div>
      <div>
        <input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          placeholder='Confirm Password'
          value={signData.passwordConfirm}
          onChange={handleSignChange}
          className='p-4 mb-4 cursor-pointer border-2 border-gray-500 rounded-full w-56 h-10'
        />
      </div>
      <div className="flex justify-center items-center">
      <button className='text-white bg-2 ml-2 cursor-pointer shadow-2xl animation rounded-full font-bold w-32 h-12'>Sign up</button>
      </div>
      
    </form>
    </div>
    </div>
    <Footer />
  </div>
  );
};

export default Form;
