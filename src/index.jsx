import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink
} from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({uri:'https://back-end-nodejs-production.up.railway.app/graphql'}),
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

