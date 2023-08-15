import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'

const DefaultLayout = () => {
  
    const {user, token } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />
    } else {

    }

    const onLogout = (e) => {
        e.preventDefault;
    }

    return (
    <div className='' id='defaultLayout'>
        <aside>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/users">Users</Link>
        </aside>
        <div className='content'>
            <header >
                <div>
                    header
                </div>
                <div>
                    {user.name}
                    <a href="#" onClick={onLogout} className='btn-logout'>Logout</a>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    </div>
  )
}

export default DefaultLayout