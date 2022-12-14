import React from 'react';

import AuthNav from './auth-nav';

//parent of everything
const NavBar = (props) => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container">
          <div className="navbar-brand logo" />
          <AuthNav t={props.t}/>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;