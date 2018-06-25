import React from 'react';

import  ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashBoardPage = () =>(
    <div>
        <p>Dashboard component!</p>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
);

export default ExpenseDashBoardPage;