import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = (props) => {
  let t = props.t;
  console.log(props.t);
  const { logout } = useAuth0();
  return (
    <button
      className="btn btn-danger btn-block"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
      style={{float: "right", border: "none", backgroundColor: "black"}}>
      {t('logout')}
    </button>
  );
};

export default LogoutButton;