function convert(number1) {
  return  (number1 - thirtyTwo) * myFraction;
}

const myFraction = (5/9);
const thirtyTwo = 32
const number1 = parseInt(prompt("Enter Farenheight to be converted"));
const result = convert(number1, thirtyTwo, myFraction);
alert(result)