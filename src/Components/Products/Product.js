import React from "react";
import { useStateValue } from "../../StateProvider";
import "./Product.css";
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';




function Product({ id, title, image, price, rating }) {
  const [{basket}, dispatch] = useStateValue();
    console.log("add to basket",basket);
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };



  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
              <p>{rating}</p>
          
        </div>
      </div>

       <img src={image}  alt=""/>
       <>
      
      <button
        onClick={() => {
          store.addNotification({
            title: 'Added to the cart',
            message: `${title}`,
            type: 'success',                         // 'default', 'success', 'info', 'warning'
            container: 'top-right',                // where to position the notifications
            animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
            animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
            dismiss: {
              duration: 3000
            }
          })
        }}
      >
         <span onClick={addToBasket}> Add to basket </span>
      </button>
    </>
    </div>
  );
}

export default Product;