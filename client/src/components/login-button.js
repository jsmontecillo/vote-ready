import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = (props) => {
  let t = props.t;
  const { loginWithRedirect } = useAuth0();
  return (
    <button
    className="btn btn-primary btn-block"
    onClick={() => loginWithRedirect()}
    style={{border: "1px solid black", backgroundColor: "black"}}>
      {t('login')}
    </button>
  );
};

export default LoginButton;