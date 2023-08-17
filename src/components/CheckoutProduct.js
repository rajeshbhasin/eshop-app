import React from 'react'
import "../styles/CheckoutProduct.css"
import Subtotal from './Subtotal'
import { useStateValue } from '../StateProvider'


function CheckoutProduct({id,title, productPrice, productRating, productImg}) {
  const [{basket},dispatch] = useStateValue();
  const removeFromBasket=()=>{
    dispatch({
      type:"REMOVE_FROM_BASKET",
      item: {
        id:id,
        image:productImg,
        price:productPrice,
        rating: productRating,
        title: title
      },
    })

  }
  return (
        <div className="checkoutProduct">
                <img className = "checkoutProduct__image" src={productImg} alt="" />
                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">{title}</p>
                    <p className="checkoutProduct__price">
                       <small>₹</small>
                       <strong>{productPrice}</strong>
                    </p>
                    <div className="checkoutProduct__rating">{productRating}</div>
                    <button className="checkoutProduct__infobutton" onClick={removeFromBasket}>Remove from basket</button>
                </div>
        </div>
  )
}

export default CheckoutProduct
