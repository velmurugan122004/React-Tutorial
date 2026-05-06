import './Tracking.css';

import axios from 'axios';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Link } from 'react-router'
import { useParams } from 'react-router';
import { NotFoundPage } from './NotFoundPage';
export function Tracking({ cart }) {
  /*const params=useParams();
  //console.log(params);
  console.log(orderId);
  console.log(productId);*/
  const { orderId, productId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrackingData = async () => {
      try {
        const response = await axios.get(`/api/orders/${orderId}?expand=products`);
        setOrder(response.data);
      } catch (error) {
        setOrder(null);
      } finally {
        setLoading(false);
      }
    };

    fetchTrackingData();
  }, [orderId]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!order) {
    return (
      <NotFoundPage />
    );
  }
  const orderProduct = order.products.find((orderProduct) => {
    return orderProduct.productId === productId;
  });
  //console.log("--------------");
  //console.log(orderProduct);
  const totalDeliveryTimeMs = orderProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
  const timePassedMs = dayjs().valueOf() - order.orderTimeMs;
  let deliveryPercent = (timePassedMs / totalDeliveryTimeMs) * 100;
  if (deliveryPercent > 100) {
    deliveryPercent = 100;
  }
  return (
    <>
      <title>Tracking</title>
      <link rel='icon' type='image/svg.xml' href='tracking-favicon.png' />

      <Header cart={cart} />

      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>

          <div className="delivery-date">
            {deliveryPercent >= 100 ? 'Delivered on' : 'Arrived on'} {dayjs(orderProduct.estimatedDeliveryTimeMs).format('dddd, MMMM D YYYY')}
          </div>

          <div className="product-info">
            {orderProduct.product.name}
          </div>

          <div className="product-info">
            Quantity: {orderProduct.quantity}
          </div>

          <img className="product-image" src={orderProduct.product.image} />

          <div className="progress-labels-container">
            <div className={`progress-label ${deliveryPercent < 33 ? 'current-status' : ''}`}>
              Preparing
            </div>
            <div className={`progress-label ${deliveryPercent >= 33 && deliveryPercent < 100 ? 'current-status' : ''}`}>
              Shipped
            </div>
            <div className={`progress-label ${deliveryPercent >= 100 ? 'current-status' : ''}`}>
              Delivered
            </div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar" style={{
              width: `${deliveryPercent}%`
            }}></div>
          </div>
        </div>
      </div>
    </>
  );
}