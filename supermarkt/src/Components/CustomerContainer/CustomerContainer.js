import React, { useState } from "react";
import CustomerProductList from "../ProductList/CustomerProductList";
import CustomerOrders from "./CustomerOrders";
import HeaderS from "../Header/HeaderS";
import "./CustomerContainer.scss";
import Navbar from "../Navbar/Navbar";
import DisplaySection from "../DisplaySection/DisplaySection";
import Brands from "../Brands/Brands";
import Footer from "../Footer/Footer";

const CustomerContainer = () => {
  const [isProductsActive, setIsProductsActive] = useState(true);

  return (
    <div className="customer-container">
      {/* Display HeaderS at the top */}
      <HeaderS />
      <Navbar />
      <DisplaySection />  

      <div>
        <button onClick={() => setIsProductsActive(!isProductsActive)}>
          {isProductsActive ? "Get My Past Orders" : "Product List"}
        </button>

        <div className="list-container">
          {isProductsActive ? <CustomerProductList /> : <CustomerOrders />}
        </div>
      </div>

      <Brands />
      <Footer></Footer>
    </div>
  );
};

export default CustomerContainer;
