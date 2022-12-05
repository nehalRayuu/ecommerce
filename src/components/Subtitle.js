import React from 'react'
import "../stylecomp/Subtitle.css"

import { useStateValue } from './StateProvider';
import "../stylecomp/Subtotal.css"
import { totalAmount } from './reducer';
// import { getBasketTotal } from './reducer';

function Subtitle() {
   const [{basket},dispatch]= useStateValue()

    const total = basket.reduce(( amount,item)=>
                  amount+ item.price,0)
    
  

  return (
    <div className='subtotal'>
     <button>Procees to checkout</button>

     <p>
            Subtotal ({basket.length} items): <strong>{ ` ₹ ${total}`}</strong>
           
         </p>
         <small className='subtotal__gift'>
           <input type="checkbox" />  This order contains a gift</small>


   
    
    </div>
  )
}

export default Subtitle