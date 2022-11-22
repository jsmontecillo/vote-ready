import React from 'react';

import LoginButton from './login-button';
import LogoutButton from './logout-button';
import {useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const saveUser = (user) => {
  return fetch("http://localhost:8888/api/me", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
}

const AuthenticationButton = (props) => {
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if(isAuthenticated) {
      saveUser(user);
    }
  }, [isAuthenticated, user])

  return isAuthenticated ? <LogoutButton t={props.t}/> : <LoginButton t={props.t}/>;
};

export default AuthenticationButton;