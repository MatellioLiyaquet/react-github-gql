import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { StyledEngineProvider } from '@mui/material/styles';
import { constants } from './constants';

// NEED TO PASS TOKEN FOR AUTHORIZATION
// YOU CAN CREATE YOUR OWN TOKEN FROM 'https://github.com/settings/tokens'
// CREATE .ENV FILE IN ROOT DIRECTORY SUCH AS REACT_APP_GITHUB_KEY = xxxxxxxxxxxxxxxxxxxxxxxx and access it
const apolloClient = new ApolloClient({
  uri: constants.URI,
  cache: new InMemoryCache(),
  headers: {
    'Authorization': `bearer ${process.env.REACT_APP_GITHUB_KEY}`
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </ApolloProvider>
  </React.StrictMode>
);
reportWebVitals();
