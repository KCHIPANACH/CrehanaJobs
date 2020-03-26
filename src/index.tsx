import React from 'react';
import ReactDOM from 'react-dom';
import App  from './container/App';

/* apollo client */
import ApolloClient, { gql, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';


const client = new ApolloClient({
    uri: 'https://api.graphql.jobs/',
    cache: new InMemoryCache
  });


const app = document.getElementById("app");
ReactDOM.render(
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>,
        app
);