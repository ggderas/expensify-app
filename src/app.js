import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import { getVisibleExpenses } from './selectors/expenses';
import { startSetExpenses } from './actions/expenses';
import './firebase/firebase';

const store = configureStore();


import AppRouter from './routers/AppRouter';
let jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);



ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));
store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById("app"));
});
