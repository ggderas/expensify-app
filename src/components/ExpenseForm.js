import React from 'react';
import moment from 'moment';

import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { EAFNOSUPPORT } from 'constants';

let now = moment();
console.log("now", now.format('MMMM Do, YYYY'));

export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note :'',
            amount: props.expense ? (props.expense.amount/100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) :moment(),
            calendarFocused: false,
            error: ''
        }        
    }



    onDescriptionChange = (e) => {
        let description = e.target.value;
        this.setState(() => ({ description }));
    }

    onNoteChange = (e) => {
        let note = e.target.value;
        this.setState(() => ({ note }));        
    }

    onAmountChange = (e) => {
        let amount = e.target.value;
        if (amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}));
        }
            
    }

    onDateChange = (createdAt) => {
        if(createdAt)
            this.setState(() => ({createdAt}));
    }

    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}));
    }

    onSubmitForm = (e) => {
        e.preventDefault();

        let error = ''

        if(!this.state.description || !this.state.amount)
            this.setState(() => ({error: 'Provide required info'}));
        else{
            this.setState(() => ({error}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
            

        
    }

    isNew() {  return !this.props.expense; }


    render(){
        return (
            <form className="form" onSubmit={this.onSubmitForm}>
                {this.state.error  && <p className="form__error">{this.state.error}</p>}
                <input className="text-input" value={this.state.description} onChange={this.onDescriptionChange} type="text" placeholder="Description" autoFocus/>
                <input className="text-input" value={this.state.amount} onChange={this.onAmountChange} type="number" placeholder="Amount" autoFocus/>

                <SingleDatePicker 
                    id="createdAtPicker" 
                    date={this.state.createdAt} 
                    onDateChange={this.onDateChange} 
                    focused={this.state.calendarFocused} 
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={(() => false)}
                />

                <textarea className="text-area" value={this.state.note} onChange={this.onNoteChange} placeholder="Add a note for your expense (Optional)"></textarea>

                <div>
                    <button className="button">{this.isNew() ? "Add" : "Update"} Expense</button>
                </div>
            </form>        
        )
    }
}