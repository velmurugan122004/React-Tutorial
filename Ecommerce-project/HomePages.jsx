import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../../components/Header';
import './HomePages.css';
import { ProductsGrid } from './ProductsGrid';
//import {products} from "../../../ecommerce-project-main/data/products"
export function HomePages({ cart }) {
  const [products, setProducts] = useState([]);

  /*fetch('http://localhost:3000/api/products').then((response)=>{
    //console.log(response);
    return response.json();
  }).then((data)=>{
      console.log(data);
  }); instead of uing above to below code*/
  /*useEffect(()=>{
    axios.get('/api/products')
    .then((response)=>{
    //console.log(response.data);
    setProducts(response.data);
    });
  },[]);*/
  //in above useEffect code add async to wait then goes next
  //useEffect inside only nothing /cleaner function only work which means normal function /remove litner etyc...
  useEffect(() => {
    console.log('useEffect');
    const getData = async () => {
      const response = await axios.get('/api/products');
      //console.log(response.data);
      setProducts(response.data);
    };
    getData();
  }, []);
  return (
    <>
      <title>Ecommerce Project</title>
      <link rel='icon' type='image/svg.xml' href='home-favicon.png' />
      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}