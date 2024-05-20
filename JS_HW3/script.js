// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const numCub = (digit) => digit**3;
const numSum = (digit1, digit2) => +digit1 + +digit2;

const enteredFirstNum = +prompt(`Please, enter the first digit`);
const enteredSecondNum = +prompt(`Please, enter the second digit`);

console.log(`First digit: ${numCub(enteredFirstNum)}`);
console.log(`Second digit: ${numCub(enteredSecondNum)}`);
console.log(`Sum of the digit in the cube: ${numSum(numCub(enteredFirstNum), numCub(enteredSecondNum))}`);

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

function checkNum() {
    const num = +prompt(`Enter the digit`);

    if (Number.isInteger(num) && num >= 0) {   
        return num;               
    } else {
        console.log(`Entered data is not a digit.`);              
    }    
}

const calcSalary = (num) => num*0.87;

const num = checkNum();
console.log(`Salary is: ${calcSalary(num)}`);

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

const firstNum = +prompt(`Entered first digit`);
const secondNum = +prompt(`Entered second digit`);
const thirdNum = +prompt(`Entered third digit`);

function checkMax(firstNum, secondNum, thirdNum) {
    const arrNum = [firstNum, secondNum, thirdNum];
    let maxNum = firstNum;

    for (let index = 0; index < arrNum.length-1; index++) {
        if (maxNum < arrNum[index+1]) {
            maxNum = arrNum[index+1];            
        };        
    }
    return maxNum;    
}
console.log(`Max of entered digit is: ${checkMax(firstNum,secondNum,thirdNum)}`);

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

const digit1 = 2;
const digit2 = 2;

const funcSum = (num1, num2) => num1 + num2;
// const funcDiff = (num1, num2) => (num1 > num2) ? num1 - num2 : num2 - num1;
const funcDiv = (num1, num2) => num1 / num2;
const funcMult = (num1, num2) => num1 * num2;

function funcDiff(num1, num2) {
    if (num1===num2) {
        return 0;        
    } else if (num1>num2) {
        return num1-num2;
    } else return num2-num1;      
}

console.log(`Summa: ${funcSum(digit1,digit2)}`);
console.log(`Difference: ${funcDiff(digit1,digit2)}`);
console.log(`Division: ${funcDiv(digit1,digit2)}`);
console.log(`Multiplication: ${funcMult(digit1,digit2)}`);