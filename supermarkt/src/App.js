import logo from './logo.svg';
import './App.css';
import HomePage from './Components/Home/HomePage';
import HeaderS from './Components/Header/HeaderS';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import app from './firebaseConfigFile';

import "./App.scss";
import { useState } from "react";
import LoginRegisterForm from "./Components/LoginRegisterContainer/LoginRegisterContainer";
import AdminCustomerContainer from "./Components/AdminCustomerContainer/AdminCustomerContainer";
import CustomerContainer from './Components/CustomerContainer/CustomerContainer';
import Login from './Components/Login/Login';

function App() {
  
  let [isUserAuthenticated, setUserAuthorization] = useState(
    sessionStorage.getItem("isUserAuthenticated") === "true" || false
  );
  let [isAdmin, setAdmin] = useState(
    sessionStorage.getItem("isAdmin") === "true" || false
  );
  let [customerId, setCustomerId] = useState(
    sessionStorage.getItem("customerId") || undefined
  );

  const setUserAuthenticatedStatus = (isAdmin, customerId) => {
    setUserAuthorization(true);
    setAdmin(isAdmin);
    setCustomerId(customerId);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    setUserAuthorization(false);
    setAdmin(false);
    setCustomerId(undefined);
  };

  return (
    <BrowserRouter>  
      <div>
        {!isUserAuthenticated ? (
          <LoginRegisterForm setUserAuthenticatedStatus={setUserAuthenticatedStatus} />
        ) : (
          <>
            <div className="login-button-container">
              <button onClick={handleLogout} className="login-button">
                Logout
              </button>
            </div>

            <AdminCustomerContainer isAdmin={isAdmin} customerId={customerId} />
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
