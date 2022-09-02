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

const titleElement = document.querySelector('#title') as HTMLTimeElement
const inputElement = document.querySelector('#text-input') as HTMLInputElement


inputElement.addEventListener('input', e => {
  e.preventDefault();

  titleElement.innerText = inputElement.value
})