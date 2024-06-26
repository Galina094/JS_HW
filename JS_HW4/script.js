// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

const lenString = 11;

function outputString(len) {
    for (let i = 0; i < len; i++) {
        if (i===0) {
            console.log(`0 – это ноль`);            
        } else if (i%2===0) {
            console.log(`${i} - четное число`);
        } else {
            console.log(`${i} - нечетное число`);
        }        
    }    
}

outputString(lenString)

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(...arr.slice(0,3).concat(arr.slice(5,7)));

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const numMax = 9;
const numMin = 0;
const number = 5;
const numberForSearch = 3;

function generateArr(min, max, num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(Math.floor(Math.random(min, max) * 10));
    }

    return arr;
}


function searchMinOfArr(arr) {
    let element = array[0];
    for (let i = 1; i < arr.length; i++) {
        if (element > arr[i]) {
            element = arr[i];
        }
    }
    console.log(`Min of the elements is ${element}`);
}

function searchNum(arr, num) {
    if (arr.indexOf(num)!== -1) {
        console.log(`Array include number ${num}`);        
    } else {
        console.log(`There's no ${num} `);
    }
}

const array = generateArr(numMin, numMax, number);
array.forEach(element => console.log(element));
console.log(`Sum of elements array is ${array.reduce((a, b) => a + b)}`);
searchMinOfArr(array);
searchNum(array, numberForSearch);


// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

const numOfRow = 20;
outputRowsStars(numOfRow);

function outputRowsStars(numOfRow) {
    let count = 0;
    let stroka = ``;
    for (let i = 0; i < numOfRow; i++) {        
        do {
            stroka+=`+`;
            count++;
        } while (count<=i);
        console.log(stroka);        
    }    
}

