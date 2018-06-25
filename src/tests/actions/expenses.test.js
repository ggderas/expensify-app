import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test("Should setup remove expense action object", () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        expense: {
            id: "123abc"
        }
    })
})

test("Should setup edit expense action object", () => {
    const action = editExpense('123abc', {note: "This is a note"});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abc",
        updates : {
            note: "This is a note"
        }
    })
})

test("Should setup add expense action object", () => {
    let expenseData = {description: 'This is a description', amount: 4500, createdAt: 1000, note:'Last month '};
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {...expenseData, id: expect.any(String)}
    })
})

test("Should setup add expense action for empty object", () => {
    let expenseData = {};
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: 
        {
            id: expect.any(String),
            description : "", 
            note : "", 
            amount : 0, 
            createdAt : 0
        }
    })
})