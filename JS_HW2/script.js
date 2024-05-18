// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

// let variable1 = prompt(`Enter first variable`);
// let variable2 = prompt(`Enter second variable`);

// if (variable1==="" || variable2===""){
//     alert(`Entered variable is undefined`);
// } else if (variable1<=1 && variable2 >=3 ){
//     alert(`${variable1} is equal or less to 1 and ${variable2} is more or equal to 3`);
// } else if (variable1>1 && variable2 <3 ){
//     alert(`${variable1} is more to 1 and ${variable2} is less to 3`);
// }


// Задание 2
// Перепишите код к тернарному оператору

// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }

// let test = false;
// if(test===true?console.log('+++'):console.log('---'));



// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// function inputDay() {
//     let day = +prompt(`Enter day`);

//     if (day === "" || day<=0 || day>31 || isNaN(day)){
//         alert(`Entered day is incorrect`);
//         inputDay();
//     } else{
//         return day;
//     }
    
// }

// let day = inputDay();

// if(day>=1 && day<=10){
//     alert(`${day} it's first decade`);
// } else if(day>=11 && day<=20){
//     alert(`${day} it's second decade`);
// } else {
//     alert(`${day} it's third decade`);
// }

// Задание 4
// Необязательное задание. (Если вам показалось домашнее задание простым, выполняем данный пункт)
// (Для решения задания вам потребуется оператор остаток от деления %, например 10%3 === 1 , десять разделить на 3, остаток 1, второй пример 7 % 5, тут остаток от деления будет 2, ну и 3 пример это 14 % 10 === 4, остаток от деления на 10 будет равен 4)

// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

// Пример:
// Пользователь ввел число 163. Программа должна вывести:
// "В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

// Пример 2:
// Пользователь ввел число 74. Программа должна вывести:
// "В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

// Пример 3:
// Пользователь ввел число 9537. Программа должна вывести:
// "В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

// Уточнение: пользователь всегда вводит корректное положительное целое число.

function inputNum() {
    let num = +prompt(`Enter number`);
    // let num2=parseInt(num)*1

    // if (num!==num2){
    if (num === "" || num<=0 || isNaN(num)){
        alert(`Entered number is incorrect`);
        inputNum();
    } else return num;
    
    
}

let num = inputNum();

let myStr = "";

while (num!==0) {
    if (Math.floor(num/1000)>>0) {
        myStr += `Num is ${num}: thousands is ${String(Math.floor(num/1000))}, `;         
        num -= (Math.floor(num/1000))*1000;          
    } 
    if (Math.floor(num/100)>>0) {
        myStr += `hundreds is ${String(Math.floor(num/100))}, `;          
        num -= (Math.floor(num/100))*100;            
    }
    if (Math.floor(num/10)>>0) {
        myStr += `tens is ${String(Math.floor(num/10))}, `;         
        num -= (Math.floor(num/10))*10;
        myStr += `ones is ${String(num)}`;        
        console.log(myStr);
    }      
    num-=num;
}

// console.log(Math.floor(10 / 3));    // 3
// console.log(Math.floor(-10 / 3));   // -4

// console.log(Math.ceil(10 / 3));     // 4
// console.log(Math.ceil(-10 / 3));    // -3
