import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from './views/Login.jsx'
import Signup from './views/Signup.jsx'
import UserLayout from './components/UserLayout'
import DefaultLayout from './components/DefaultLayout.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
    },
    {
        path: '/',
        element: <UserLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/signup" />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]
    }
]);

export default router