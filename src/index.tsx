import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App  from './container/App';

/* apollo client */
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';


const client = new ApolloClient({
    uri: 'https://api.graphql.jobs/'
  });


const app = document.getElementById("app");

 
ReactDOM.render(
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>,
        app
        );