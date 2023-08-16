import { Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider'

const DefaultLayout = () => {

  const token = useStateContext();
  if (!token) {
    return <Navigate to="/login"/>
  }else  {
     console.log(token); 
  }

  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default DefaultLayout