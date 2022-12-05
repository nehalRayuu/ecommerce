import React from 'react'
import "../stylecomp/CheckoutProduct.css"
import { useStateValue } from './StateProvider'

function CheckOutProduct(props) {
  const [ {basket} , dispatch] = useStateValue();

   
    const removeFromBasket = ()=>{
        dispatch({
          type: 'REMOVE_FROM_BASKET',
           id:props.id
        })
    }

  return (
    <div>
    <div className='checkoutProduct'>
    <img className='checkoutProduct__image'  src={props.image} alt="" />
    
    <div className='checkoutProduct__info'>
    <p className='checkoutProduct__title' >{props.title}</p>
   
    <p className='checkoutProduct__price'>
      <small>₹</small>
      <strong>{props.price}</strong>
    
    </p>
    <div className='checkoutProduct__rating'>
    {
        Array(props.rating).fill().map((_,i )=>{
            return(
            <p key={i} className='star'>★</p>
        )
        })
      }
      </div>
      <button onClick={removeFromBasket}>Remove from basket</button>
    
    </div>
    </div>
    
    
    </div>
  )
}

export default CheckOutProduct;