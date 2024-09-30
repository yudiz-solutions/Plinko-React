import React, { Suspense } from 'react'
import PropTypes from 'prop-types'

function AuthLayout ({ children }) {
    return (
        <div className='auth-main'>
            <div className='login-form-container'>
                <Suspense
                    fallback={
                        <div className='d-flex align-items-center justify-content-center top-0 left-0 position-fixed h-100'>
                            <span>Loading...</span>
                        </div>
                    }>
                    {children}
                </Suspense>
            </div>
        </div>
    )
}

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthLayout
