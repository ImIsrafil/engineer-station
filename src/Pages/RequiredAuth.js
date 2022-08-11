import React from 'react'
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../Firebase/firebase.init'
import Loading from './Shared/Loading';


const RequiredAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation()

    if (loading) {
        return <Loading />
    }
    if(!user) {
        return <Navigate to='/login' state={{from: location}} replace={true}></Navigate>
    }

  return children
}

export default RequiredAuth
