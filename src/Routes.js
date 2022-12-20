import { Routes, Route } from "react-router-dom";

//Routes
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

function routes() {
  return (
      <Routes>
        <Route path='/' >
        <Route index element={<Home />} />
        <Route  exact path="signup" element={<Signup />} />
        <Route  exact path="home" element={<Home />} />
        <Route  exact path="login" element={<Login />} />
        <Route  exact path=":username" element={<Login />} />
        <Route path='/privacy-policy' component={() => { 
         window.location.href = 'https://example.com/1234'; 
         return null;
        }}
        />
        </Route>

        {/* <Route path='election' >
        <Route index element={<Elections />}  />
        <Route exact path=':electionId' element={<OrganizationDashboard />} />
        <Route exact path=':electionId/results' element={<Results />} />
        <Route exact path=':electionId/login' element={<Login />} />
        </Route> */}
       
        <Route path="*" element={<PageNotFound />} />
      </Routes>
  );
}

export default routes;
