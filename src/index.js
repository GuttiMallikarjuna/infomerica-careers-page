import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://api-ap-south-1.hygraph.com/v2/clnygylo4821201ufbbek0ff5/master"

});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);