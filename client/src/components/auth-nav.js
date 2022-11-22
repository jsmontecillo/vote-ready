import React from 'react';
import AuthenticationButton from './authentication-button';

const AuthNav = (props) => {
  let t = props.t;
  console.log(t);
  return (
  <div className="navbar-nav ml-auto">
    <AuthenticationButton t={props.t}/>
  </div>
)};

export default AuthNav;