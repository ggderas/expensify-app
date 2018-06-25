import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import { getVisibleExpenses } from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({description: "Water Bill", amount: 4500}));
store.dispatch(addExpense({description: "Gas Bill", createdAt: 100}));
store.dispatch(addExpense({description: "Rent", amount: 109500}));

let state = store.getState();
console.log("state", state);

//add expense water bill
// addexpense gas bill      
// set text filter bill 


import AppRouter from './routers/AppRouter';
let jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));