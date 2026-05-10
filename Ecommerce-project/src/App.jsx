import { Routes, Route } from 'react-router'
import { HomePages } from './pages/home/HomePages';
import { CheckoutPages } from './pages/checkout/CheckoutPages';
import { Orders } from './pages/orders/Orders';
import { Tracking } from './pages/Tracking';
import { NotFoundPage } from './pages/NotFoundPage';
import './App.css'
import axios from 'axios';
import { useState, useEffect } from 'react';

// This makes axios available in the Console.
// - Then, you can try running axios.post('/api/reset') in the Console.
window.axios=axios;
console.log(axios.post('/api/reset'));
 - Now, in the Console, we can run window.axios.post(...)
// - And JavaScript has another shortcut we can use. If we just type
//   "axios", this is a shortcut for "window.axios"
// - That's why the code window.axios = axios; lets us use "axios"
//   anywhere (including in the Conosle).

function App() {
  const [cart, setCart] = useState([]);
  const loadCart = async () => {
    const response = await axios.get('/api/cart-items?expand=product')
    //console.log(response.data);
    setCart(response.data);
  };
  useEffect(() => {
    loadCart();
  }, []);
  return (
    <Routes>
      {/*<Route path='/' element={<HompePages />}></Route> this same of below*/}
      <Route index element={<HomePages cart={cart} loadCart={loadCart}/>} />
      <Route path='checkout' element={<CheckoutPages cart={cart} loadCart={loadCart}/>}></Route>
      <Route path='orders' element={<Orders cart={cart} loadCart={loadCart}/>}></Route>
      <Route path='tracking/:orderId/:productId' element={<Tracking cart={cart} />}></Route>
      <Route path='*' element={<NotFoundPage />}></Route>
    </Routes>
  )
}

export default App
