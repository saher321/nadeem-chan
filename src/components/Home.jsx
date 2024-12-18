import React from 'react'
import Product from './Product';
import Card from './Card';
import { saree } from '../data/Saree/lenghaCholiPage2';

const Home = () => {
  return (
    <div>
<img src="./image/banner1.png" alt="" width="100%" />
<Product data = {saree}/>
    </div>
  )
}

export default Home


