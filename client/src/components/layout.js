import React from "react";
import Header from './header.js';
import Contests from "./contests.js";
import { BrowserRouter, Route, Link, Outlet } from "react-router-dom";
import './layout.css';
import la from './la.jpg';
import UncontrolledExample from './carousel';

function Layout(props) {
  return (
    <div className="layout">
        {/* <UncontrolledExample /> */}
      <Header title="VOTE READY" image={la}/>
      <Outlet />
      <div>
        <Contests user={props.user}/>
      </div>
    </div>
  );
}

export default Layout;