import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const RequireAuth = ({children}) => {
    const location = useLocation();
    const {accessToken, loading} = useSelector((store) => store.auth)

  

  return (
    <> 
    {
       !accessToken && !loading ? <Navigate to="/login" state={{from : location}} replace /> : children
    }
    </>
  )
}

export default RequireAuth