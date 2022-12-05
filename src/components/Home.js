import React from 'react'
import "../stylecomp/Home.css"
import Product from './Product'

function Home() {
  return (
    <div className='home'>
    <img 
     className='home_image'
    src={require('../images/banner.png')}
    alt="img"/>
       
          <div className='home_row'>
         
          <Product  id="22658" 
           title ="Digital clock"
           price={225}
           rating={3}
           

           image ="https://www.ikea.com/in/en/images/products/filmis-clock-thermometer-alarm-black__0905223_pe713200_s5.jpg?f=s"
          />
         
          
         
          <Product  id="2588" 
          title ="Oppo smart phone"
          price={22500}
          rating={4}
          

          image="https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/reno7/listpage/Reno7_listpage-blue_2.png.thumb.webp"
          />
          
          
        </div>

         
         
         
          <div className='home_row'>
         
          <Product  id="2268" 
          title ="Shoes"
          price={800}
          rating={5}
          key={3}

          image="https://images.squarespace-cdn.com/content/v1/5911f31c725e251d002da9ac/1613210424136-AS3MY547OBB5Y3GSQ359/Product+Photography?format=1000w"
         />
           
         
       
         <Product  id="226586" 
         title ="Laptop"
         price={28500}
         rating={4}
         key={4}

         image="https://www.cnet.com/a/img/resize/468ea42b69875136295b704ea9b0ed459612de62/hub/2022/04/27/b796792b-5b34-4405-83eb-efc66371ee06/samsung-galaxy-book-2-pro-360-01.jpg?auto=webp&fit=crop&height=675&width=1200"
         />
        
        
        
          <Product  id="26586" 
         title ="clothes"
         price={2850}
         rating={4}
         key={5}
         image="https://media.gq.com/photos/622902db43716a8f1697bc58/master/pass/cheap-clothes.jpg"
         />
        
        
         </div>

  
    </div>
  )
}

export default Home