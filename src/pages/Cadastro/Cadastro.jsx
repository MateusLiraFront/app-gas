import React, { useState } from 'react'
import './Cadastro.css';
import { Link } from "react-router-dom";

export default function Cadastro() {
   
    return (
          <div className='default-container'>
          
               <div className="login-header text-center mb-4">
                <h2 className="text-2xl font-bold text-center">Cadastro</h2>
                </div>
                    <Link
                    className='button-action'
                    to="/home">
                    Cadastrar
                    </Link>

                   <Link
                    className='link'
                    to="/login">
                    <>Já possuo cadastro</>
                    </Link>
            </div>
    )
}