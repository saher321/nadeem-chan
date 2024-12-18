import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ContactDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // Initialize as null instead of empty string

  const getdata = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(response.data); // Assuming the response is a single product object
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  useEffect(() => {
    getdata();
  }, [id]); // Add `id` as a dependency so it re-fetches when `id` changes

  if (!product) {
    return <div>Loading...</div>; // Display loading message while the data is being fetched
  }

  return (
    <div>
      <div className="container bootdey">
        <div className="col-md-12">
          <section className="panel">
            <div className="row">
              <div className="col-md-6">
                <div className="pro-img-details">
                  <img src={product.images} alt={product.title} /> {/* Update the image source */}
                </div>
                <div className="pro-img-list my-3">
                  <a href="#">
                    <img src={product.thumbnail} alt={product.title} /> {/* Thumbnail image */}
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <h4 className="pro-d-title">
                  <a href="#" className="">
                    {product.title} {/* Use product's title */}
                  </a>
                </h4>
                <p>
                  {product.description} {/* Use product's description */}
                </p>
                <div className="product_meta">
                  <span className="posted_in">
                    <strong>Categories:</strong> {product.category}
                  </span>
                </div>
                <div className="m-bot15">
                  <strong>Price: </strong>
                  <span className="amount-old">${product.price}</span> {/* Display product price */}
                  <span className="pro-price"> ${product.discountedPrice || product.price}</span> {/* Use discounted price if available */}
                </div>
                <div className="form-group">
                  <label>Quantity</label>
                  <input type="number" placeholder={1} className="form-control quantity" />
                </div>
                <p>
                  <button className="btn btn-round btn-danger" type="button">
                    <i className="fa fa-shopping-cart" /> Add to Cart
                  </button>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
