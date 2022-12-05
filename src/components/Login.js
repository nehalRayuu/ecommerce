import React, { useState } from 'react'
import "../stylecomp/Login.css"
// import { auth } from './firebase';
function Login() {

    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');

    const signIn =(e)=>{
               e.preventDefault();


    }
    const register =(e)=>{
      e.preventDefault();}
    //   auth.createUserWithEmailAndPassword(email,password)
    //   .then((auth)=>{
    //     console.log(auth);

    //   })
    //   .catch(error => alert(error.message))

                
    // }

  return (
    <div className='login'>
         <div className='login__container'>

            <h1>Sign in</h1>

            <form className='login__container1'>
              <label>
                <strong>E-mail :</strong>
              </label>
              <input type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              <label>
               
                <strong> Password :</strong>
              </label>
              <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
              
              <button className='login__signInButton' type='submit' onClick={signIn}>Sign in</button>
              
            </form>
            <p>If you dont have an account</p>
              <button className='login__registerButton' onClick={register}>Create account</button>
         </div>


    </div>
  )
}

export default Login