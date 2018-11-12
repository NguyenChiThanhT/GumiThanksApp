import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './app/redux/Store';
import Routers from './app/routers/Routers';
export default class App extends Component {
    render() {
        return(
            <Provider store={store}>
                <Routers />
            </Provider>
        );
    }
}
