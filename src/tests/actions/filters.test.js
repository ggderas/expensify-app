import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';

test("should set start date", () => {
    let now = moment(),
        result = setStartDate(now);
    expect(result).toEqual({
        type: 'SET_START_DATE',
        date: now
    })
})

test("should set end date", () => {
    let now = moment(),
        result = setEndDate(now);
    expect(result).toEqual({
        type: 'SET_END_DATE',
        date: now
    })
})

test("should set text filter with a text value ", () => {
    let text = "Something",
        result = setTextFilter(text);

    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
})

test("should set text filter without a text value ", () => {
    let result = setTextFilter();

    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ""
    })
})


test("should sort by amount", () => {
    let result = sortByAmount();

    expect(result).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    })
})

test("should sort by date", () => {
    let result = sortByDate();

    expect(result).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    })
})