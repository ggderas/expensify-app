import { createStore, combineReducers, applyMiddleware  } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import ReduxThunk from 'redux-thunk' // no changes here 😀

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        applyMiddleware(ReduxThunk)
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    
    return store;
}


