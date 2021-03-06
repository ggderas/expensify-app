import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    let id = props.match.params.id;

    return (
        <div>

            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__titel">Edit Expense Page</h1>
                </div>
            </div>


            <div className="content-container">
                <ExpenseForm
                    expense={props.expense}
                    onSubmit={(expense) => {
                        props.dispatch(startEditExpense(id, expense));
                        props.history.push('/');
                    }}
                />

                <button className="button button--secondary" onClick={() => {
                    props.dispatch(startRemoveExpense(props.expense))
                        .then(() => {
                            props.history.push('/');
                        });
    
                }}>Remove</button>                
            </div>



        </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find(({ id }) => { console.log("id", id); return props.match.params.id === id })
    }
}

export default connect(mapStateToProps)(EditExpensePage);