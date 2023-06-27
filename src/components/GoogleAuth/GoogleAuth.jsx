import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';

export const GoogleAuth = () => {
  function handleLoginSuccess(res) {
    console.log('credential in response: ', res);
    const userData = jwt_decode(res.credential);
    console.log('userData: ', userData);
  }
  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id:
        '678634402419-djp8c1atoej0ssbmb7sosa28mspt0kpt.apps.googleusercontent.com',
      callback: handleLoginSuccess,
    });

    google.accounts.id.renderButton(document.getElementById('signinButton'), {
      theme: 'outline',
      size: 'large',
    });
  }, []);

  return <div id="signinButton"></div>;
};
