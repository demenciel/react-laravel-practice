import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from './views/Login.jsx'
import Signup from './views/Signup.jsx'
import UserLayout from './components/UserLayout'

const router = createBrowserRouter([
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