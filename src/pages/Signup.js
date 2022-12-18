import React from 'react';
import SignupBox from "../components/signupBox/SignupBox";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {

  React.useEffect(() => {
    document.title = 'Signup | MERN Registration System';
  });
  
  return (
    <SignupBox />
  )
}

export default Signup
