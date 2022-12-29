import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './Auth'


export const Login = () => {
    const [user, setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()

    const location = useLocation()

    const redirectPath = location.state?.path || '/'
    //auth is like a class component that has the function login to it
    const handleLogin = () => {
        auth.login(user)
        navigate(redirectPath, { replace: true })
    }
    return (
        <div>
            <label>
                Username:{''}
                <input type='text' onChange={(e) => setUser(e.target.value)} />
            </label>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
