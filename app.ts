//1
const favoriteFood = prompt("1: What is your favorite food?");
alert("Wow! " + favoriteFood + " is my favorite to!");
const firstNumber = Number(prompt("1.a: Enter first number"));
const secondNumber = Number(prompt("1.b: Enter second number"));
alert(firstNumber + secondNumber);
//2
const firstNumber = Number(prompt("2.a: Enter first number"));
const secondNumber = Number(prompt("2.b: Enter second number"));
alert(firstNumber / secondNumber);
//3
const firstNumber = Number(prompt("3.a: Enter first number"));
const secondNumber = Number(prompt("3.b: Enter second number"));
const xnum = firstNumber*firstNumber + secondNumber*secondNumber;
alert(Math.sqrt(xnum));
//4
const firstNumber = Number(prompt("4.a: Enter first number"));
const secondNumber = Number(prompt("4.b: Enter second number"));
const xnum = firstNumber*firstNumber -( secondNumber*secondNumber);
alert(Math.sqrt(xnum));
//////
const Firstvariable = Number(prompt("Enter first variable to calculate"));
const changingOperator = prompt("Choose an operator: +, -, *, or /");
const Secondvariable = Number(prompt("Enter second variable to calculate"));
switch (changingOperator){
    case '+':
        result = number1 + number2;
        System.out.println(number1 + " + " + number2 + " = " + result);
        break;

      // performs subtraction between numbers
      case '-':
        result = number1 - number2;
      return(number1 + " - " + number2 + " = " + result);
        break;

      // performs multiplication between numbers
      case '*':
        result = number1 * number2;
        return(number1 + " * " + number2 + " = " + result);
        break;

      // performs division between numbers
      case '/':
        result = number1 / number2;
        return(number1 + " / " + number2 + " = " + result);
        break;

      default:
        return("Invalid operator!");
        break;
    }