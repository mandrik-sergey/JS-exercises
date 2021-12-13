//1.Напишите функцию upFirst(str), которая возвращает строку str с заглавным первым символом,
// остальные символы должны быть в нижнем регистре (пример: upFirst("иванов"),
// должно вернуть "Иванов", up_first("ИВАНОВ"), должно вернуть "Иванов")

function upFirst(str) {


        return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();

}

alert(upFirst( 'ИВАН'));


//2. Напишите функцию truncate(str, maxlength), которая проверяет длину строки str,
// и если она превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength

function truncate(str,maxlength,arr){

    if (str.length != maxlength.length){
        arr = str.split('',maxlength);
        let from_element = arr.length;
        arr.splice(maxlength,from_element);
        let delete_last_element = arr.pop;
        let new_element = arr.push('...');
        str = arr.join('');
        alert(str);

    }else {
        alert('не работает')
    }
}

console.log(truncate('убирать',5));

//3. Напишите функцию getShortName(fullName), которая преобразует полное ФИО fullName в краткое.
// Например getShortName("Иванов Сергей Петрович"), функция должна вернуть "Иванов С.П."




function getShortName(fullName,abbreviatedName) {
    let names = fullName.split(' '),
        abbreviated_name = names[1].substring(0,1).toUpperCase();

    if (names.length > 1) {
        abbreviated_name += '.' + names[names.length - 1].substring(0,1).toUpperCase() + '.';
         abbreviatedName = names [0] + " " + abbreviated_name;
    }
    return abbreviatedName;
}
console.log(getShortName('Иванов Сергей Иванович'));


// 4.Напишите функцию, которая принимает массив объектов.
// Функция должна вернуть массив только с теми объектами, у которых есть свойство name

const users = [
    {
        id: 1,
        name: 'John',
        age: 20
    },
    {
        id: 2,
        name: 'Marry',
        age: 22
    },
    {
        id: 3,
        name: 'Poll',
        age: 25
    },
]

function filterArray (arr) {

    let filter = arr.filter(function (user) {
        return user.name;
    });

    return filter;

}
console.log(filterArray(users));

//5. Напишите функцию, которая принимает два массива.
//Функция должна вернуть результат объединения этих массивов без дубликатов

let array1 = [1,2,3,9,10];
let array2 = [2,3,5,7];
function arrayUnique(array) {
    let a = array.concat();
    for(let i=0; i<a.length; ++i) {
        for(let j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
}
console.log(arrayUnique(array1,array2));


//6. Напишите функцию, которая преобразует строки snake_case в camelCase.
// Например modifyString('super-user-name') // вернуть 'superUserName'


function transformation(string,arr,){
    arr = string.split('-');
    let i = arr.indexOf('-');
    if(i >= 0) {
        arr.splice(i,1);
    }
    let newArr = [];
    arr.forEach((word, index) => {
        if (index === 0){
            newArr.push(word);
        } else {
            newArr.push(word[0].toUpperCase() + word.slice(1));
        }
    });
    string = newArr.join('');
    return string;
}

console.log(transformation('git-hub'));


//7. Напишите функцию, которая принимает значение с математическим выражением и возвращает результат его решения.
// Например: calc('5 + 10') // вернет 15
let spliters = [
    '-',
    '+',
    '*',
    '/'
];
let splitIndex= null;

function math(string){
    let arr = [];
    spliters.forEach((spliter,index) => {
        if(string.indexOf(spliter) > -1){
            splitIndex = index;
            arr = string.split(spliter);
        }
    } );
    switch (splitIndex){
        case 0:
            return parseInt(arr[0]) - parseInt(arr[1]);
            break;
        case 1:
            return parseInt(arr[0]) + parseInt(arr[1]);
            break;
        case 2:
            return parseInt(arr[0]) * parseInt(arr[1]);
            break;
        case 3:
            return  parseInt(arr[0]) / parseInt(arr[1]);
            break;
        default:
            return 'Такого действий нет!';
            break;
    }

}
console.log(math('1+2'));

//8. Напишите функцию, которая принимает объект с пользователями и возвращает массив имён.
// const users = [
//     {
//         id: 1,
//         name: 'John',
//         age: 20
//     },
//     {
//         id: 2,
//         name: 'Marry',
//         age: 22
//     },
//     {
//         id: 3,
//         name: 'Poll',
//         age: 25
//     },
// ]
//
// Функция должна вернуть ['John', 'Marry', 'Poll']
const users1 = [
    {
        id: 1,
        name: 'John',
        age: 20
    },
    {
        id: 2,
        name: 'Marry',
        age: 22
    },
    {
        id: 3,
        name: 'Poll',
        age: 25
    },
];
function getUsersName(arr){
    let names = [];
    arr.forEach((user)  => {
        if(user.name){
             names.push(user.name)
        }
    })
    return names;
}

console.log(getUsersName(users1));
//9. Напишите функцию, которая принимает массив. Каждый элемент массива, который является числом - умножить на 2,
// строки - преобразовать в массив, где каждый символ - отдельный элемент массива. Функция должна вернуть измененный объект

function sampling(str){
    let arr = str.split('');
    let arrs =[];
    arr.forEach((element) => {
        if(!isNaN(+element)){
           arrs.push(element *2);
        }else if (isNaN(element)) {
            arrs.push(element);
        }
    });
    return arrs;
}
console.log(sampling('у меня 2 крысы'));


//10. Напишите функцию, которая проверяет строку на спам. Функция должна возвращать true, если в строке есть 2 одинаковых слова,
// и false - если все слова уникальны.


function spam(str) {
    const element = {};

    let elementSpam = true;

    str.trim().split("").forEach((word)=>{
        if(element[word]===undefined) {
            element[word] = 1;
        } else {
            elementSpam = false;
        }
    })
    return elementSpam;
}

console.log(spam('dad dad'));


//11.Напишите функцию, которая проверяет строку на нецензурную лексику.
// Создайте массив, который будет содержать слова, которые нельзя пропускать.
// Функция должна принимать строку и проверять наличие в ней слов из массива, которые нужно пропускать.
// Если в строке есть слово из массива - вернуть true, если нет - false.


let wordsGap = [
    'mushrooms',
    'hemp',
    'cocaine',
    'apple',
    'blueberry',
    'banana'
];
function vocabulary(str){
    let arr = false;
    arr = str.split(' ');
    arr.forEach((element) =>{
        if (element === wordsGap[element]){
            element = 0;
        } else {
            element = true;
        }
        return element;
    });

}
console.log (vocabulary('mushrooms baby'));


//12. Напишите функцию, которая принимает массив. Функция должна вернуть предложение только из строковых значений массива.
// Например:
// arrayToSentence(['Привет', 1, null, 'как', '{}', 'дела']) // вернуть Привет как дела

//
// let array = [
//     'Привет',
//     1,
//     null,x
//     'как',
//     '{}',
//     'дела'
// ]
//
// function getString(arr){
//     let str = [];
//     arr.forEach((element)  => {
//         if(element.toString()){
//             str.push(arr[element]);
//         } else{
//             delete element;
//         }
//     });
//     return str;
// }
//
// console.log(getString(array));

//13. Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9), который возвращает строку этих чисел в форме номера телефона.
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(numbers){
    let format = '(xxx) xxx-xxxx';

    for (number of numbers) {
        format = format.replace('x', number);
    }

    return format;
}


//14. Напишите функцию, которая массив с пользователями и возвращает имя пользователя с наибольшей заработной платой. Например:
// const users = [
//     {
//         id: 1,
//         name: 'John',
//         age: 20,
//         salary: 1000
//     },
//     {
//         id: 2,
//         name: 'Marry',
//         age: 22,
//         salary: 1500
//     },
//     {
//         id: 3,
//         name: 'Poll',
//         age: 25,
//         salary: 1200
//     },
// ]
//
// getHighestSalarty(users) // должно вернуть 'Marry'

const Users = [
    {
        id: 1,
        name: 'John',
        age: 20,
        salary: 1000
    },
    {
        id: 2,
        name: 'Marry',
        age: 22,
        salary: 1500
    },
    {
        id: 3,
        name: 'Poll',
        age: 25,
        salary: 1200
    },
];
function getHighestSalarty(arr){
    let salarys = [];
    arr.forEach((user)  => {
        if(user.salary){
            salarys.push(user.salary);
        }
    });

    return Math.max.apply(null, salarys);
}
console.log(getHighestSalarty(Users));


//15. Напишите функцию, которая проверяет корректность строки.
// Строка должна быть не менее 3х символов и не более 16ти символов, должна быть не пустая, не должна содержать числа.

function corString(string){
    let minlength = 3;
    let maxlength = 16;
    if (string.length < minlength){
        alert('Строка менее заданого значения');
        // arr = string.split('',maxlength);
        // let from_element = arr.length;
        // arr.splice(maxlength,from_element);
        // let delete_last_element = arr.pop;
        // let new_element = arr.push('...');
        // str = arr.join('');
        // alert(str);

    } else if (string.length > maxlength){
        alert('Строка больше заданого значения!');
    } else if (isNaN(string)){
        alert('Строка не может быть числом');
    } else if (string === ""){
        alert('Строка не может быть пустой');

    } else {
        alert('не работает');
    }
}


//16. Напишите функцию, которая проверяет пароль на корректность.
// Пароль должен быть не менее 6ти символов, должен содержать хотя бы одну цифру и хотя бы одну заглавную букву

// Проверка строчных букв
function password(string){
let lowerCaseLetters = /[a-z]/g;
if(string === lowerCaseLetters) {
    alert("valid");

} else {
    alert('invalid')
}

// Проверка заглавных букв
let upperCaseLetters = /[A-Z]/g;
if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
} else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
}

// Проверка чисел
let numbers = /[0-9]/g;
if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
} else {
    number.classList.remove("valid");
    number.classList.add("invalid");
}

// Проверить длину
if(myInput.value.length >= 6) {
    length.classList.remove("invalid");
    length.classList.add("valid");
} else {
    length.classList.remove("valid");
    length.classList.add("invalid");
}
}