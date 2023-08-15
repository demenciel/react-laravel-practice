import React from 'react';
import { useRef } from 'react';
import { useStateContext } from '../contexts/ContextProvider'
import { Link } from 'react-router-dom'
import axiosClient from '../axios-client';

const Signup = () => {

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();

  const {setUser, setToken} = useStateContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmation: confirmRef.current.value
    };
    axiosClient.post('/signup', payload)
      .then(({data}) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch((error) => {
        const response = error.response
        if (response && response.status == 422) {
          console.log(response.data.errors);
        }
      })
  }

  return (
    <div className='animated fadeInDown'>
        <form onSubmit={onSubmit} action="">
          <h1 className='title'>Signup for free</h1>
          <input ref={nameRef} type="text" placeholder='Username'/>
          <input ref={emailRef} type="email" placeholder='Email'/>
          <input ref={passwordRef} type="password" placeholder='Password'/>
          <input ref={confirmRef} type="password" placeholder='Password Confirmation'/>
          <button type='submit' className='btn btn-block'>Signup</button>
          <p className='message'>
            Already registered <Link to="/login">Go to your account</Link>
          </p>
        </form>
    </div>
  )
}

export default Signup