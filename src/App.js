import React from "react";
import { BrowserRouter as Router, Route , Routes, Navigate } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes';

export default function App() {
  const user = null;
  return (
    <Router>
      <Routes>  
        <Route 
          exact path={ROUTES.SIGN_IN} 
          element={ user ? <Navigate to={{ pathname: ROUTES.BROWSE }}/> : <Signin/> }
        />
        <Route 
          exact path={ROUTES.SIGN_IN} 
          element={ user ? <Navigate to={{ pathname: ROUTES.BROWSE }}/> : <Signup/> }
        />
        <Route 
          exact path={ROUTES.HOME} 
          element={ user ? <Navigate to={{ pathname: ROUTES.BROWSE }}/> : <Home/> }
        />
        <Route 
          exact path={ROUTES.BROWSE} 
          element={ <Browse/> }
        />
      </Routes>    
    </Router>
  );
}