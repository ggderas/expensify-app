import  { createStore, combineReducers } from 'redux';




// SORT BY DATE
// SORT BY AMOUNT
// SET START DATE
//SET END DATE



// Store creation



store.subscribe(() => {
    let state = store.getState();
    let visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log("visibleExpenses", visibleExpenses);
    //console.log(store.getState());
})

const expenseOne = store.dispatch(addExpense({description: "Rent", amount: 100, createdAt: -2400 }));
const expenseTwo = store.dispatch(addExpense({description: "Coffee", amount: 350, createdAt: -34 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));
//  store.dispatch(setTextFilter("COFF"));
store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

store.dispatch(setStartDate(125))
//store.dispatch(setEndDate(1025))

const demoSstate = {
    expenses: [
        {
            id: 'QWE123',
            description: "January Rent",
            note: 'This was the final payment for that address.',
            amount: 54500,
            createdAt: 0
        }
    ],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}

const user = {
    name: "Luis",
    age: 24
}

console.log({...user, location: "SAP"});