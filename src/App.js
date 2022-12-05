import React, { Fragment } from 'react';
import './App.css';
import { Route,Routes}  from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';


function App() {
  return (
      
    <div className='app'>
  
    <Routes>
     
    
    <Route path='/checkout' element={<Fragment><Header/>,<Checkout/></Fragment>  }/>
    
     
      <Route path='/login' element={<Login/>}/>
      <Route path='/'   element={<Fragment><Header/><Home/></Fragment> } /> 
      
    </Routes>

   
    
    </div>
   
    
  
   
    
   
  );
}

export default App;
