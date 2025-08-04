import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'

function ProtectedRoute(props) {
    const { token, isLogin } = useAuth()
  return (
    <React.Fragment>
            {
                token && isLogin ? <Outlet/> : <Navigate to={`/login`} />
            }
    </React.Fragment>
  )
}

// Outlet -> is a router component to handle protected route 
// Navigate -> is used redirect to the specified path

export default ProtectedRoute
