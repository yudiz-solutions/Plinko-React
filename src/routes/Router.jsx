import { lazy } from 'react'

const PublicRoute = lazy(() => import('./PublicRoute'))
const PrivateRoute = lazy(() => import('./PrivateRoute'))

/* 
   Add your all routes which are not private like login, forgot password, policy page etc.
*/
// public Routes Files
const Login = lazy(() => import('../views/login'))
// const PageNotFound = lazy(() => import('shared/components/404'))


/* 
   Add your all routes which are not public, means you can only access after login. etc.
*/
// Private Routes Files
// About
const Home = lazy(() => import('../views/home/index'))


const RoutesDetails = [
    {
        defaultRoute: '',
        Component: PublicRoute,
        props: {},
        isPrivateRoute: false,
        children: [
            { path: '/login', Component: Login, exact: true },
        ]
    },
    {
        defaultRoute: '',
        Component: PrivateRoute,
        props: {},
        isPrivateRoute: true,
        children: [
            // { path: route.pageNotFound, Component: PageNotFound, exact: true },
            { path: '/home', Component: Home, exact: true },
        ]
    }
]

export default RoutesDetails
