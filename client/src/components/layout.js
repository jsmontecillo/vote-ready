import React from "react";
import Header from './header.js';
import Contests from "./contests.js";
import { BrowserRouter, Route, Link, Outlet } from "react-router-dom";
import './layout.css';
import la from './la.jpg';

function Layout(props) {
  return (
    <>
      <Header title="VOTE READY" image={la}/>
      <Outlet />
      <div className="description">
        We protect wildlife because they inspire us. But we also focus our efforts on those species—like tigers, rhinos, whales and marine turtles—whose protection influences and supports the survival of other species or offers the opportunity to protect whole landscapes or marine areas.
        <Contests />
      </div>
    </>
  );
}

export default Layout;