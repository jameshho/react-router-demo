import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './Auth'

export const RequireAuth = ({children}) => {
    const location = useLocation()
    const auth = useAuth()

    //check if user is not logged in
    if(!auth.user){
        return <Navigate to='/login' state={{path: location.pathname}} />
    }
    return (
        children
    )
}
