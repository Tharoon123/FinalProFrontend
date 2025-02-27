import React, { useState } from "react";
import CustomerProductList from "../ProductList/CustomerProductList";
import CustomerOrders from "./CustomerOrders";
import HeaderS from "../Header/HeaderS";
import "./CustomerContainer.scss";
import Navbar from "../Navbar/Navbar";
import DisplaySection from "../DisplaySection/DisplaySection";
import Brands from "../Brands/Brands";
import Footer from "../Footer/Footer";
import ShoppingCart from "../ShopingCart/ShoppingCart";

const CustomerContainer = () => {
  const [isProductsActive, setIsProductsActive] = useState(true);

  return (
    <div className="customer-container">
      {/* Display HeaderS at the top */}

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
    </div>
  );
};

export default CustomerContainer;
