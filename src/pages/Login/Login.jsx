import React, { useState } from 'react'
import './Login.css';
import { Link } from "react-router-dom";


export default function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='default-container'>
          
               <div className="login-header text-center mb-4">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                </div>
                <Link
                className='button-action'
                to="/home">
                Entrar
                </Link>
                
                 <Link
                  className='link'
                to="/cadastro">
                <>Realizar Cadastro</>
                </Link>

                 <Link
                  className='link'
                to="/suporte">
                <>Esqueci a senha</>
                </Link>

                 <Link
                  className='link'
                to="/">
                <>sair</>
                </Link>
                
            </div>
    )
}