import React from 'react'
import { useStateValue } from './StateProvider'
import "../stylecomp/Checkout.css"
import CheckOutProduct from './CheckOutProduct';
import Subtitle from './Subtitle';


function Checkout() {
    const [{basket}] =useStateValue();
  return (
    
    <div className='checkout'>
    <div className='checkout__left'>
    
       {basket.length === 0 ?(
         <div>
             <h2>Basket is empty</h2>
         </div>  
     

       ): (
        <>
        <h2 className='checkout__title'>Your shoping basket</h2>
        {basket.map(item =>(
            <CheckOutProduct  id={item.id}
                               title={item.title}
                               image={item.image}
                               price={item.price}
                               rating={item.rating}
                                key={item.id}
            
            
            
            />
        ))}
       
        </>
       )}
     </div>
     {basket.length > 0 && (
        <div className='checkout__right'> 
          <Subtitle/>
        </div>

     )}
    </div>
  )
}

export default Checkout
