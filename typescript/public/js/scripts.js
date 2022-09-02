// const calculator = (number1: number, number2: number, operator: string = '+'): number => {
//   let result: number
//   switch (operator) {
//     case '-':
//       result = number1 - number2
//       break;
//     case '*':
//       result = number1 * number2
//       break;
//     case '/':
//       result = number1  / number2 
//       break;
//     default:
//       result = number1 +  number2
//       break;   
//   }
//   return result
// }
// console.log(calculator(32, 5))
var titleElement = document.querySelector('#title');
var inputElement = document.querySelector('#text-input');
inputElement.addEventListener('input', function (e) {
    e.preventDefault();
    titleElement.innerText = inputElement.value;
});
