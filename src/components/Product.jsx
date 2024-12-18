import React from 'react'
import Card from './Card';

const Product = (props) => {
  const {data}= props;
  return (
    <div className=''>
      <div className="row">
        {data.map((item) => (
        <div className='col-md-4 col-lg-3 col-sm-6 col-12 mb-4'>
            <Card key={item.id} item={item} />
          </div>
        ))}
  </div>
    </div>
  )
}

export default Product
