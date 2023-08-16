import { useRef } from "react"
import { Link } from "react-router-dom"

import axiosClient from '../axiosConfigure';
import { useStateContext } from "../contexts/ContextProvider";

const Signup = () => {
  const userRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const {setUser, setToken} = useStateContext();

  const submitPayLoad = (e) => {
    e.preventDefault();
    const payload = {
      'username': userRef.current.value,
      'email': emailRef.current.value,
      'password': passwordRef.current.value,
    }
    console.log(payload);
    axiosClient.post('/signup', payload);
  }
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
          <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
              <h1 className="text-3xl font-semibold text-center text-purple-700">
                  Signup
              </h1>
              <form className="mt-6" method="post" onSubmit={submitPayLoad}>
                  <div id="password" className="mb-2">
                      <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                          Username
                      </label>
                      <input
                          ref={userRef}
                          name='username'
                          type="text"
                          className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                  </div>
                  <div id="email" className="mb-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                          Email
                      </label>
                      <input
                          ref={emailRef}
                          id='email'
                          name='email'
                          type="email"
                          className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                  </div>
                  <div id="password" className="mb-2">
                      <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                          Password
                      </label>
                      <input
                          ref={passwordRef}
                          name='password'
                          type="password"
                          className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                  </div>
                  <div id="password" className="mb-2">
                      <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                          Confirm Password
                      </label>
                      <input
                          name='password'
                          type="password"
                          className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                  </div>
                  <div className="mt-6">
                      <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                          All done
                      </button>
                  </div>
              </form>

              <p className="mt-8 text-xs font-light text-center text-gray-700">
                  Already have an account ? <Link to="/login" className="text-purple-600 font-semibold underline">Login to your account</Link>
              </p>
          </div>
      </div>
  )
}

export default Signup