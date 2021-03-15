let selection = prompt("average or remainder")

function calcAvgSquare(number1, number2, number3) {
    let sum = number1 + number2 + number3
    let avg = sum / 3
    let square = number1 ** 2
    let ans = avg * square
    return `The answer is ${ans}`
  }
  
function dividing(number1, number2) {
    let divide = Math.floor(number1 / number2)
    let remainder = number1 % number2
    return `The result is ${divide} with a remainder of ${remainder}.`
  }
  

if (selection == 'average') {
  num1 = parseInt(prompt("Enter number 1: "))
  num2 = parseInt(prompt("Enter number 2: "))
  num3 = parseInt(prompt("Enter number 3: "))
  let avgSquare = calcAvgSquare(number1, number2, number3)
  alert(avgSquare)
} else (selection == 'remainder') {
  num1 = parseInt(prompt("Enter number 1: "))
  num2 = parseInt(prompt("Enter number 2: "))
  let divide1 = dividing(number1, number2)
  alert(divide1)
} 