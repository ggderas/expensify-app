import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div className="content-container">
    {
        props.expenses.length > 0 ? (
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>            
        ) : null
    }

        {
            props.expenses.map((exp, key) => (<ExpenseListItem key={key} {...exp} />))
        }

        {props.filters.text}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseList);