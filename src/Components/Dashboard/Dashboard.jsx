import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Featured from "../Featured/Featured";
import Chart from "../Chart/Chart";
import Widget from "../Widget/Widget";

const Dashboard = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="sales"/>
          <Widget type="products"/>
          </div>
        <div className="charts" style={{marginTop:'23px'}}>
        <Featured/>
        <Chart title="Last 12 Months (Revenue)" aspect={2/1}/>

        

    

      </div>
      </div>
    </div>
  );
};

export default Dashboard;
