import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'

const Contact = () => {
  const [search , setSearch]= useState('')
  const [product, setProduct]=useState([])
  console.log(product)
  const getdata = async()=>{
 const response =   await axios.get("https://dummyjson.com/products")
 const result =   response.data;
 setProduct(result.products);
  }
useEffect(()=>{
  getdata();
})
  const filterProduct = product.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className='container'>
      <input type='text' placeholder='enter search  ' className='form-control w-50 m-auto my-3'  onChange={(e)=>setSearch(e.target.value)} value={search}/>
    <div className='row'>
{filterProduct.map((item)=>{
return (
  <div key={item.id} className='col-md-4 col-lg-3 col-sm-6 col-12 mb-4'>
  <Card item = {item}/>
  </div>

)
})}
    </div>

    </div>
  )
}

export default Contact
