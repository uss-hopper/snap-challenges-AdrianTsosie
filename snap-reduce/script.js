const array1 = [1,2,3,5,8,13,21,34];
const reducer = (accumulator, currentValue) => accumulator * currentValue;

//1*2*3*5*8*13*21*34
console.log(array1.reduce(reducer));
