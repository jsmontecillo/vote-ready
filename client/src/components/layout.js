import React from "react";
import Header from './header.js';
import Candidates from "./candidates.js";
import { BrowserRouter, Route, Link, Outlet } from "react-router-dom";
import './layout.css';

function Layout() {
  return (
    <>
      <nav className="nav-bar">
        <Link to="/" className="link">HOME</Link>
        <Link to="/mission" className="link">MISSION</Link>
        <Link to="/location" className="link">LOCATIONS</Link>
      </nav>

      <Header title="VOTE READY"/>
      <Outlet />
      <div className="description">
        We protect wildlife because they inspire us. But we also focus our efforts on those species—like tigers, rhinos, whales and marine turtles—whose protection influences and supports the survival of other species or offers the opportunity to protect whole landscapes or marine areas.
        <Candidates />
      </div>
    </>
  );
}

export default Layout;