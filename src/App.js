import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store} >
                <Router />
            </Provider>
        );
    }
}

export default App;
