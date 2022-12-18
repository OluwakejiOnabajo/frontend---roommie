import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import LoginBox from "../components/loginBox/LoginBox";

const Login = () => {

  React.useEffect(() => {
    document.title = 'Login | MERN Registration System';
  });
  
  return (
    <LoginBox />
  )
}

export default Login
