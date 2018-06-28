import React from 'react';
import  { connect } from 'react-redux';
import numeral from 'numeral';

import  getVisibleExpenses from '../selectors/expenses';
import  getExpensesTotal from '../selectors/expenses-total';

const ExpenseSummary = ({expenseCount, expensesTotal}) => {    
    let expenseWord = expenseCount === 1 ? "expense" : "expenses";
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {numeral(expensesTotal).format('$0,0.00')} </h1>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    let visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary);