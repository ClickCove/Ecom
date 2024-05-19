import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


import Login from './components/Login/Login.jsx'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Signup from './components/Signup/Signup.jsx';
import Shippingadd from './components/Shippingadd/Shippingadd.jsx';
import Hero from './components/Home/Hero.jsx';
import MainGrid from './components/Home/MainGrid.jsx';
import MensClothing from './components/categories/MensClothing.jsx';
import WomensClothing from './components/categories/WomensClothing.jsx';
import Electronics from './components/categories/Electronics.jsx';
import Jewelery from './components/categories/Jewelery.jsx';
// import About from './components/Home/About.jsx'
import { Products } from './components/products/Products.jsx';


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
      // element:<Shippingadd/>
    },
    {
      path:"/SignUP",
      element:<Signup/>
    },
  ])
  return (
    <>
      <RouterProvider router={router}/>
      <Hero/>
      <MainGrid/>
      <div id="men's clothing"><MensClothing /></div>
      <div id="women's clothing"> <WomensClothing /> </div>
      <div id="electronics"> <Electronics /></div>
      <div id="jewelery"><Jewelery /> </div>
      {/* <About/> */}
      <Products/>
    </>
  )
}

export default App
