import React, { useState } from 'react'
import './Suporte.css';
import { Link } from "react-router-dom";

export default function Suporte() {
   
    return (
          <div className='default-container'>
          
               <div className="login-header text-center mb-4">
                <h2 className="text-2xl font-bold text-center">Recuperar Senha</h2>
                </div>
                <button>enviar</button>

                <Link
                className='link'
                to="/cadastro">
                <>Realizar Cadastro</>
                </Link>

                <Link
                 className='link'
                to="/login">
                <>Já possuo conta</>
                </Link>
            </div>
    )
}