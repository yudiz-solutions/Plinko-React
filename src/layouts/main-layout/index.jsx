import React from 'react'
import PropTypes from 'prop-types'

function MainLayout ({ children }) {
    return (
        <div className='main-layout'>
            {/* Header Component */}
            {/* Sidebar Component or main Component */}
            {children}
            {/* Footer Component */}
        </div>
    )
}
MainLayout.propTypes = {
    children: PropTypes.node.isRequired
}
export default MainLayout
