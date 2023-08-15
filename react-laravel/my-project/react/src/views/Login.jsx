import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const onSubmit = (e) =>{
    e.preventDefault;
  }
  return (
    <div className='animated fadeInDown'>
        <form onSubmit={onSubmit} action="">
          <h1 className='title'>Login into your account</h1>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password'/>
          <button className='btn btn-block'>Login</button>
          <p className='message'>
            Not Registered? <Link to="/signup">Create an account</Link>
          </p>
        </form>
    </div>
  )
}

export default Login