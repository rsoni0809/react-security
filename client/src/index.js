import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import serviceWorker from './serviceWorker';

import { Auth0Provider } from "@auth0/auth0-react";
import history from "./history";
import { getConfig } from "./config";


const onRedirectCallback = (appState) => {
  history.push(
    appState?.returnTo ? appState.returnTo : window.location.pathname
  );
};
const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin,
  onRedirectCallback,
};

const root = createRoot(document.getElementById('root'));


root.render(
  <Auth0Provider {...providerConfig}>
    <App />
  </Auth0Provider>
);

//serviceWorker.unregister();