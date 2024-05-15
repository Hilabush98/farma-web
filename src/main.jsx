import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { AuthProvider } from './context/userContext.jsx';

const token = localStorage.getItem('token');
const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
    headers: {
        authorization: `Bearer ${token}`,
    },
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </AuthProvider>
    </React.StrictMode>
);
