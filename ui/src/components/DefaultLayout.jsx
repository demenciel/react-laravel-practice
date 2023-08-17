import { Link, Outlet } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider'

const DefaultLayout = () => {

  const token = useStateContext();
  if (!token) {
    return <Navigate to="/login"/>
  }else  {
     console.log(token); 
  }

  return (
    <div className="min-h-screen">
      <nav className="bg-purple-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">MyApp</h1>
          <button className="bg-purple-400  hover:bg-purple-600 focus:outline-none text-white font-bold py-2 px-4 rounded">
            <Link to="/login">Sign out</Link>
          </button>
        </div>
      </nav>
      <div className="container mx-auto p-8">
        <div className="bg-white rounded shadow-md p-8">
          <h2 className="text-3xl font-semibold mb-4">Welcome, User!</h2>
          <p className="text-gray-700">
            You are now signed in. Explore our features and enjoy your stay!
          </p>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout