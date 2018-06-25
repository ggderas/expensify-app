import { createStore } from 'redux';

const add = ({a , b}) => a + b;

console.log(add({a: 1, b: 12}))

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count = 1 } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET',
    count: 0
});

// Reducers

const countReducer = (state = { count: 0 }, action) => {
    
    let incrementBy = typeof action.incrementBy === "number" ? action.incrementBy : 1;
    let decrementBy = typeof action.decrementBy === "number" ? action.decrementBy : 1;
    
    switch(action.type){
        case 'INCREMENT':
            return { count: state.count + incrementBy }
        case 'DECREMENT':
            return { count: state.count - decrementBy }            
        case 'RESET':
            return { count: 0 }                        
        case 'SET':
            return { count: action.count }                                
        default: 
            return state;
    }

};

const store = createStore();

const unsubscribe = store.subscribe(() => {
    console.log("store.getState();", store.getState());
});

const 
    increment  = { type: 'INCREMENT'},
    decrement = { type: 'DECREMENT'},
    reset = { type: 'RESET'},
    set = { type: 'SET', count: 101 };

store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(decrementCount({decrementBy: 50}));
store.dispatch(setCount({count: 500}));
store.dispatch(resetCount());

// store.dispatch(increment);
// store.dispatch(increment);
// store.dispatch(increment);
// store.dispatch(increment);
// store.dispatch(increment);
// store.dispatch(increment);

// store.dispatch(set);

//store.dispatch(reset);

