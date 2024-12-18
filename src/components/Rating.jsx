import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  // Helper to render stars dynamically
  const renderStars = (rating) => {
    if(rating <=1){
      return <FaStar style={{ color: "#FFB200" }} />
    }else if(rating <=2){
      return (
       <div>
         <FaStar style={{ color: "#FFB200" }} />
         <FaRegStar style={{ color: "#FFB200" }} />
       </div>
      )
    }else if(rating <=3){
      return (
       <div>
         <FaStar style={{ color: "#FFB200" }} />
         <FaStar style={{ color: "#FFB200" }} />
         <FaRegStar style={{ color: "#FFB200" }} />
       </div>
      )
    }else if (rating <= 4){
      return (
       <div>
         <FaStar style={{ color: "#FFB200" }} />
         <FaStar style={{ color: "#FFB200" }} />
         <FaStar style={{ color: "#FFB200" }} />
         <FaStar style={{ color: "#FFB200" }} />
       </div>
      )
    }
    // const stars = [];
    // for (let i = 1; i <= 5; i++) {
    //   if (rating >= i) {
    //     stars.push(<FaStar key={i} style={{ color: "#FFB200" }} />);
    //   } else if (rating > i - 1) {
    //     stars.push(<FaStarHalfAlt key={i} style={{ color: "#FFB200" }} />);
    //   } else {
    //     stars.push(<FaRegStar key={i} style={{ color: "#FFB200" }} />);
    //   }
    // }
    // return stars;
  };

  return <div className="rating">{renderStars(rating)}</div>;
};

export default Rating;
