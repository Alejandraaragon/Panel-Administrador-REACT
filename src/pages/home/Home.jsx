import React from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget"
import "./Home.css";
import Featured from '../../components/featured/Featured';
import Charts from "../../components/charts/Charts";
import LisTable from "../../components/table/Table";

const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
      <div className='homeContainer'>
        <Navbar />
      <div className="widgets">
        <Widget type="user"/>
        <Widget type="order"/>
        <Widget type="earning"/>
        <Widget type="balance"/>
      </div>
      <div className='charts'>
        <Featured />
        <Charts title="Last 6 Months (Revenue)" aspect={2 / 1}/>
      </div>
      <div className="listContainer">
        <div className="listTitle">Latest Transactions
      </div>
      <LisTable/>
      </div>
      </div>
    </div>
  )
}

export default Home
