import React from 'react';
import  { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    let id = props.match.params.id;
    
    return (
        <div>
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense) => {
                    console.log("expense", expense);
                    props.dispatch(editExpense(id, expense));
                    props.history.push('/');
                }}
            />

            <button onClick={() => {
                props.dispatch(removeExpense(props.expense));
                props.history.push('/');
            }}>Remove</button>            
        </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find(({id}) => { console.log("id", id); return props.match.params.id === id})
    }
}

export default connect(mapStateToProps)(EditExpensePage);