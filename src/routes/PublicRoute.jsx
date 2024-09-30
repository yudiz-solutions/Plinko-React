import React from 'react'
import PropTypes from 'prop-types'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import AuthLayout from '../layouts/auth-layout/index'

function PublicRoute () {
    /* 
       No Change in this file
   */
    const token = localStorage.getItem('token') || sessionStorage.getItem('token')
    const location = useLocation()
    const redirect = location?.pathname === '/' ? location?.pathname : '/home'
    if (token) return <Navigate to={redirect} replace />
    return (
        <AuthLayout>
            <Outlet />
        </AuthLayout>
    )
}

PublicRoute.propTypes = {
    element: PropTypes.element
}
export default PublicRoute
