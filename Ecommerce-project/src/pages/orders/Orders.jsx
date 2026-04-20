import './Orders.css'
import axios from 'axios';
import { useState, useEffect, Fragment } from 'react';
import { Header } from '../../../components/Header';


import { OrdersGrid } from './OrdersGrid';
export function Orders({ cart }) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrderdata = async () => {
      const response = await axios.get('/api/orders?expand=products');
      setOrders(response.data);
    }
    fetchOrderdata();
  }, [])
  return (
    <>
      <title>Orders</title>
      <link rel='icon' type='image/svg.xml' href='/orders-favicon.png' />
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        
        <OrdersGrid orders={orders}/>
        
      </div>
    </>
  );
}