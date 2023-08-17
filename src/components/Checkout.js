import React from 'react'
import CheckoutProduct from "./CheckoutProduct"
import "../styles/Checkout.css"
import Subtotal from './Subtotal'
import { useStateValue } from '../StateProvider'

function Checkout() {
  const [{basket},dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className="checkout__left">
        <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
        <div>
            <h2 className='checkout__title'>Your shopping basket</h2>
                {basket.map(item =>(<CheckoutProduct 
                title={item.title}
                id={item.id}
                productPrice={item.price}
                productRating={item.rating}
                productImg={item.image}>

                </CheckoutProduct>)
                )
                }

         </div>
      </div>
      <div className="checkout__right">
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout
