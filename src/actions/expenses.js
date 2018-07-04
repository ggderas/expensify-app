import uuid from 'uuid';
import database from '../firebase/firebase';

const setExpenses = (expenses) => {
    return {
        type: 'SET_EXPENSES',
        expenses
    }
};

const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value', (snapshot) => {
            let result = [];
            snapshot.forEach((childSnap) => {
                result.push({ id: childSnap.key, ... childSnap.val()})
            });

            dispatch(setExpenses(result));
        })        
    }
};

const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const { description = "", note = "", amount = 0, createdAt = 0 } = expenseData;
        const expense = { description, note, amount, createdAt };
        
        database.ref('expenses').push(expense)
                .then((ref) => { dispatch(addExpense({ id: ref.key, ... expense})) })
                .catch(() => { });
    }
}

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    expense: { id }
})

const editExpense = (id, updates) =>({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export {
    startAddExpense,
    removeExpense,
    editExpense,
    startSetExpenses
}