import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Resume from './containers/Resume';
import configureStore from './configureStore';
import Api from './api/index';
import {getUserData} from './redux/actions';
const isProduction = process.env.NODE_ENV === 'production';
const api = new Api();
const store = configureStore(!isProduction, { api });

render(
    <Provider store={store}>
        <div className="container">
            <Resume />
        </div>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getUserData());