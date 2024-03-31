import React from 'react';
import "./widget.scss";
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Link } from "react-router-dom";

const Widget = ({ type }) => {
  let data;
  let count = 0;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        count: 100, // Static count value
        isMoney: false,
        link: <Link to={'/admin/users'}>"See all users"</Link>,
        icon: (
          <PersonOutlineOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "NEW ORDERS",
        isMoney: false,
        count: 50, // Static count value
        link: <Link to={'/admin/order'}>"View all orders"</Link>,
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "sales":
      data = {
        title: "SALES",
        isMoney: true,
        count: 5000, // Static count value
        link: "View sales",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "products":
      data = {
        title: "PRODUCTS",
        count: 200, // Static count value
        isMoney: true,
        link: <Link to={'/admin/products'}>"See all Products"</Link>,
        icon: (
          <LocalMallIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    case "soleDistributors":
      data = {
        title: "USERS",
        count: 75, // Static count value
        isMoney: true,
        link: "See details",
        icon: (
          <PersonOutlineOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(255, 0, 0, 0.2)",
              color: "crimson",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter" >
          {typeof data.count === "undefined" ? "N/A" : (data.isMoney ? `${data.count}` : data.count)}
        </span>
        <span className="link">{data.link}</span>
      </div>

      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpRoundedIcon />
          20 %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
