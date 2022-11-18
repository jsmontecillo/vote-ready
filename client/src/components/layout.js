import React from "react";
import Header from './header.js';
import Contests from "./contests.js";
import { BrowserRouter, Route, Link, Outlet } from "react-router-dom";
import './layout.css';
import la from './la.jpg';
import Fade2 from 'react-reveal/Fade';
import LA from '../front.jpg';

function Layout(props) {
  return (
    <div className="layout">
        {/* <UncontrolledExample /> */}
      {/* <Header title="VOTE READY" image={la}/> */}
      <Outlet />
      <div>
        <Contests user={props.user}/>
        <div>
          <Fade2 top cascade>
            <div>
              <h1>Referendums</h1>
              <h1>Referendums</h1>
              <h1>Referendums</h1>
            </div>
          </Fade2>
        </div>
      </div>
    </div>
  );
}

export default Layout;