import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDLnDYPKEYpFHgqlUxiSDJzmz8A0gRUPhg',
            authDomain: 'manager-a3b1b.firebaseapp.com',
            databaseURL: 'https://manager-a3b1b.firebaseio.com',
            projectId: 'manager-a3b1b',
            storageBucket: 'manager-a3b1b.appspot.com',
            messagingSenderId: '167550076256'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;