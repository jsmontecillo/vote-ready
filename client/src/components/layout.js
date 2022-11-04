import React from "react";
import Header from './header.js';
import Contests from "./contests.js";
import { BrowserRouter, Route, Link, Outlet } from "react-router-dom";
import './layout.css';
import la from './la.jpg';
import UncontrolledExample from './carousel';

function Layout(props) {
  return (
    <>
        <UncontrolledExample />
      {/*<Header title="VOTE READY" image={la}/>*/}
      <Outlet />
      <div className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit dui vel venenatis dapibus. Etiam eu erat suscipit, accumsan libero sit amet, mollis tortor. Sed quis sodales est. Vestibulum sodales erat a purus venenatis, sit amet hendrerit dolor congue. Integer vestibulum, erat eu hendrerit mollis, elit metus ultrices orci, sed aliquet neque arcu id magna. Sed volutpat libero sit amet aliquet vulputate. Nunc consequat leo viverra facilisis blandit.
        <Contests user={props.user}/>
      </div>
    </>
  );
}

export default Layout;