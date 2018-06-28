export default (expenses)  => {
    return expenses
            .map(({amount}) => amount)
            .reduce((sum, total) => sum + total, 0);
}