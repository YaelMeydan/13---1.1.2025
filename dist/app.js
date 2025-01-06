//1
var favoriteFood = prompt("1: What is your favorite food?");
alert("Wow! " + favoriteFood + " is my favorite to!");
var firstNumber = Number(prompt("1.a: Enter first number"));
var secondNumber = Number(prompt("1.b: Enter second number"));
alert(firstNumber + secondNumber);
//2
var firstNumber = Number(prompt("2.a: Enter first number"));
var secondNumber = Number(prompt("2.b: Enter second number"));
alert(firstNumber / secondNumber);
//3
var firstNumber = Number(prompt("3.a: Enter first number"));
var secondNumber = Number(prompt("3.b: Enter second number"));
var xnum = firstNumber * firstNumber + secondNumber * secondNumber;
alert(Math.sqrt(xnum));
//4
var firstNumber = Number(prompt("4.a: Enter first number"));
var secondNumber = Number(prompt("4.b: Enter second number"));
var xnum = firstNumber * firstNumber - (secondNumber * secondNumber);
alert(Math.sqrt(xnum));
//////
var Firstvariable = Number(prompt("Enter first variable to calculate"));
var changingOperator = prompt("Choose an operator: +, -, *, or /");
var Secondvariable = Number(prompt("Enter second variable to calculate"));
switch (changingOperator) {
    case '+':
        result = number1 + number2;
        System.out.println(number1 + " + " + number2 + " = " + result);
        break;
    // performs subtraction between numbers
    case '-':
        result = number1 - number2;
        return (number1 + " - " + number2 + " = " + result);
        break;
    // performs multiplication between numbers
    case '*':
        result = number1 * number2;
        return (number1 + " * " + number2 + " = " + result);
        break;
    // performs division between numbers
    case '/':
        result = number1 / number2;
        return (number1 + " / " + number2 + " = " + result);
        break;
    default:
        return ("Invalid operator!");
        break;
}
