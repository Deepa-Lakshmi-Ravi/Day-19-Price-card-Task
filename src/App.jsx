// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";

const PriceTable = () => {
  return (
    <div className="price-table">
      <div className="price-column-1">
        <p>FREE</p>
        <h2 className="price">$0/month</h2>
        <hr></hr>
        <ul>
          <li>
            <i className="fa-solid fa-check"></i>Single user
          </li>
          <li>
            <i className="fa-solid fa-check"></i>50GB Storage
          </li>
          <li>
            <i className="fa-solid fa-check"></i>Unlimited Public-Projects
          </li>
          <li>
            <i className="fa-solid fa-check"></i>Community Access
          </li>
          <li className="disabled-feature">
            <i className="fa-solid fa-xmark"></i>Unlimited Private-Projects
          </li>
          <li className="disabled-feature">
            <i className="fa-solid fa-xmark"></i>Dedicated Phone Support
          </li>
          <li className="disabled-feature">
            <i className="fa-solid fa-xmark"></i>Free Subdomain
          </li>
          <li className="disabled-feature">
            <i className="fa-solid fa-xmark"></i>Monthly Status Reports
          </li>
        </ul>
        <button>Subscribe</button>
      </div>

      <div className="price-column-2">
        <p>PLUS</p>
        <h2 className="price">$9/month</h2>
        <hr></hr>
        <ul>
          <li>
            <i className="fa-solid fa-check"></i>5 Users
          </li>
          <li>
            <i className="fa-solid fa-check"></i>50GB Storage
          </li>
          <li>
            <i className="fa-solid fa-check"></i> Unlimited Public-Projects
          </li>
          <li>
            <i className="fa-solid fa-check"></i>Community Access
          </li>
          <li>
            <i className="fa-solid fa-check"></i>Unlimited Private-Projects
          </li>
          <li>
            <i className="fa-solid fa-check"></i>Dedicated Phone Support
          </li>
          <li>
            <i className="fa-solid fa-check"></i>Free Subdomain
          </li>
          <li className="disabled-feature">
            <i className="fa-solid fa-xmark"></i>Monthly Status Reports
          </li>
        </ul>
        <button>Subscribe</button>
      </div>

      <div className="price-column-3">
        <p>PRO</p>
        <h2 className="price">$49/month</h2>
        <hr></hr>
        <ul>
          <li>
            <i className="fa-solid fa-check"></i>5 Users
          </li>
          <li>
            <i className="fa-solid fa-check"></i>50GB Storage
          </li>
          <li>
            <i className="fa-solid fa-check"></i> Unlimited Public-Projects
          </li>
          <li>
            <i className="fa-solid fa-check"></i>Community Access
          </li>
          <li>
            <i className="fa-solid fa-check"></i>Unlimited Private-Projects
          </li>
          <li>
            <i className="fa-solid fa-check"></i>Dedicated Phone Support
          </li>
          <li>
            <i className="fa-solid fa-check"></i>Free Subdomain
          </li>
          <li>
            <i className="fa-solid fa-check"></i>Monthly Status Reports
          </li>
        </ul>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default PriceTable;
