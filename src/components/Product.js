import React from 'react'
import  "../styles/Product.css"
import {useStateValue} from "../StateProvider"

function Product({title , productPrice, productRating,productImg,id}) {

  const [state,dispatch]= useStateValue();
  const addToBasket=()=>{
    dispatch({
      type:"ADD_TO_BASKET",
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
      <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                  <small>₹</small>
                  <strong>{productPrice}</strong>
                  </p>
                <div className="">{productRating}</div>
            </div>
            <img src={productImg} alt="Bag Image" />
            <button onClick={addToBasket}>Add to basket</button>
      </div>
  )
}

export default Product
