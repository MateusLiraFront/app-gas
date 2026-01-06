import React, { useState } from 'react'
import './Splash.css';
import logo from '../../assets/logo-gas.png';

export default function Splash() {
   
    return (

               <div className='login-container'>
                   <div className='container'>
                       <div className="login-simple">
                           <div className="login-header text-center mb-4">
                               <img src={logo} alt="Logo" className="app-logo" />
                           </div> 
                           <h2>Carregando...</h2>
                       </div>
                   </div>
               </div>
           
    )
}