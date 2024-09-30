import React from 'react'
import { useNavigate } from 'react-router-dom'
import Plinko from '../../shared/components/Plinko'

function About () {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }
    return (
        <>
            <h1>Home View - (Public Route)</h1>
            <button onClick={() => handleLogout()}>Logout</button>
            <br /><br />

            <Plinko />
        </>
    )
}

export default About
