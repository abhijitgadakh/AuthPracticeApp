import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function RefreshHandler({setIsAuth}) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('token')){
            setIsAuth(true);
            if(location.pathname === "/" || location.pathname === "/login" || location.pathname === "/sign-up"){
                navigate('/home', {replace: false});
            }
        }
    },[location, navigate, setIsAuth]);

  return (
    null
  )
}

export default RefreshHandler;