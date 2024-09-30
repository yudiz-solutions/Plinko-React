import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        localStorage.setItem('token', 'token')
        navigate('/about')
    }
    return (
        <div>
            <h1>Login Component - (Private Route)</h1>
            <button onClick={() => handleLogin()}>Login</button>
        </div>
    )
}

export default Login
