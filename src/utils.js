console.log("Utils.js is runnign");

const square = (x) => (x * x);
const add = (a,b) => a + b;
const substract = (a, b) => a - b;

export { square, add, substract as default };

// exports - default export - named exports