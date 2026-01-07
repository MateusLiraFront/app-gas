import React, { useState } from 'react'
import './Splash.css';
import logo from '../../assets/logo-gas-second.png';
import { Link } from "react-router-dom";

export default function Splash() {
   
    return (
               <div className='splash-container'>
                           <div className="login-header text-center mb-4">
                               <img src={logo} alt="Logo" className="app-logo" />
                           </div> 

                           <Link
                            className='link'
                           to="/login">
                           <i>Começar</i>
                           </Link>
               </div>
           
    )
}