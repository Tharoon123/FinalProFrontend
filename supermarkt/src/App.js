import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/HeaderS";

import "./App.scss";
import { useState } from "react";
import LoginRegisterForm from "./Components/LoginRegisterContainer/LoginRegisterContainer";
import AdminCustomerContainer from "./Components/AdminCustomerContainer/AdminCustomerContainer";
import CustomerContainer from "./Components/CustomerContainer/CustomerContainer";
import Login from "./Components/Login/Login";
import DisplaySection from "./Components/DisplaySection/DisplaySection";
import HomePage from "./Components/Home/HomePage";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Register from "./Components/Register/Register";
import AdminProductDetails from "./Components/AdminProductDetails/AdminProductDetails";
import AdminProductList from "./Components/ProductList/AdminProductList";

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
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/customer" element={<CustomerContainer />} />
        <Route path="/admin-dashboard" element={<AdminProductList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
