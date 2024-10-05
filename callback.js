import React, { useEffect } from 'react';
import axios from 'axios';

const Callback = () => {
  useEffect(() => {
    const fetchAccessToken = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');

      if (code) {
        const response = await axios.post('https://connect.garmin.com/oauth/token', null, {
          headers: {
            'Authorization': `Basic ${btoa(`${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}`)}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          params: {
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: process.env.REACT_APP_REDIRECT_URI,
          },
        });

        // Store the access token (you can use localStorage, for example)
        localStorage.setItem('accessToken', response.data.access_token);
        alert('Login successful! You can now fetch data.');
      }
    };

    fetchAccessToken();
  }, []);

  return <h2>Logging you in...</h2>;
};

export default Callback;
