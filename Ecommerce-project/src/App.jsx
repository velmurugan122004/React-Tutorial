import {Routes ,Route} from 'react-router'
import { HomePages } from './pages/HomePages';
import { CheckoutPages } from './pages/checkout/CheckoutPages';
import { Orders } from './pages/Orders';
import { Tracking } from './pages/Tracking';
import { NotFoundPage } from './pages/NotFoundPage';
import './App.css'
import axios from 'axios';
import { useState,useEffect } from 'react';

function App() {
  const [cart,setCart]=useState([]);
  useEffect(()=>{
    axios.get('/api/cart-items?expand=product').then((response)=>{
      //console.log(response.data);
      setCart(response.data);
    });
  },[]);
  return (
    <Routes>
      {/*<Route path='/' element={<HompePages />}></Route> this same of below*/}
      <Route index element={<HomePages cart={cart}/>} />
      <Route path='checkout' element={<CheckoutPages cart={cart} />}></Route>
      <Route path='orders' element={<Orders />}></Route>
      <Route path='tracking' element={<Tracking />}></Route>
      <Route path='*' element={<NotFoundPage />}></Route>
    </Routes>
  )
}

export default App
