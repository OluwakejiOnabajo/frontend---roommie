import React from 'react'
import Routes from "./Routes";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <NavBar/>
      <Routes/>
      <Footer/> 
    </>
  )
}

export default App