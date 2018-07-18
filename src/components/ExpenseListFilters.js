import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input_group__item">
                        <input 
                            className="text-input" 
                            type="text" 
                            value={this.props.filters.text} 
                            placeholder="Search Expense"
                            onChange={(e) => {
                            let value = e.target.value;
                            this.props.dispatch(setTextFilter(value));
                        }} />
                    </div>
                    <div className="input_group__item">
                        <select
                            className="select"
                            value={this.props.filters.sortBy}
                            onChange={(e) => {
                                let value = e.target.value;
                                if (value === "date")
                                    this.props.dispatch(sortByDate())
                                else
                                    this.props.dispatch(sortByAmount())
                            }}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input_group__item">
                        <DateRangePicker
                            startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                            endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                            onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                            focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                            onFocusChange={focusedInput => this.setState({ calendarFocused: focusedInput })} // PropTypes.func.isRequired,      
                            numberOfMonths={1}
                            isOutsideRange={(() => false)}
                            showClearDates={true}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);