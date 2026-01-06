import React, { useState } from 'react'
import './Login.css';


export default function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='login-container'>
            <div className='container'>
               <div className="login-header text-center mb-4">
  <h2 className="text-2xl font-bold text-center">Login</h2>
</div>                
                </div>
            </div>
    )
}