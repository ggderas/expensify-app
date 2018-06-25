import React from 'react';
import { connect } from 'react-redux';
import  { removeExpense } from '../actions/expenses';
import  { Link } from 'react-router-dom';

import moment from 'moment';

const ExpenseListItem = (props) => (
    <div>
        <Link to={"/edit/" + props.id}>
            <p>Description: {props.description}</p>
        </Link>        
        <p>Amount: {props.amount}</p>
        <p>Created At: {moment(props.createdAt).format("MMMM Do YYYY")}</p>
    </div>
)

export default connect()(ExpenseListItem);