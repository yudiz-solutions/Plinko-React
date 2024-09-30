import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Router from './Router'

const AllRoutes = () => {
    /* 
        No Change in this file
    */
    function allPaths (children) {
        return children?.map(({ path, Component, exact, props, children: child }, index) => {
            return child?.length ? (
                <Route element={<Component />} key={index}>
                    {allPaths(child)}
                </Route>
            ) : (
                <Route
                    key={path}
                    path={path}
                    element={
                        <Suspense fallback={
                            <div className='d-flex align-items-center justify-content-center top-0 left-0 position-fixed h-100 w-100'>
                                <span>Loading...</span>
                            </div>
                        }>
                            <Component {...props} />
                        </Suspense>
                    }
                    exact={exact}
                />
            )
        })
    }
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {Router?.map(({ isPrivateRoute, children, Component }) => {
                        return (
                            <Route key={isPrivateRoute ? 'private' : 'public'} element={<Component />}>
                                {allPaths(children)}
                            </Route>
                        )
                    })}
                    <Route path='*' element={<Navigate to='/home' />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AllRoutes
