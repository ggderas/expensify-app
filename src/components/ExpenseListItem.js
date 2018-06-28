import React from 'react';
import { connect } from 'react-redux';
import  { removeExpense } from '../actions/expenses';
import  { Link } from 'react-router-dom';
import numeral from 'numeral';

import moment from 'moment';

const ExpenseListItem = (props) => (
    <div>
        <Link to={"/edit/" + props.id}>
            <p>Description: {props.description}</p>
        </Link>        
        <p>
            {numeral(props.amount/100).format('$0,0.00')}
            -
            {moment(props.createdAt).format("MMMM Do YYYY")}
        </p>
    </div>
)

export default connect()(ExpenseListItem);