//1. Создайте функцию, которая проверяет является ли значние числом. Функция должна возвращать Boolean.

function num(a){
    if (isNaN(a)) {
        return false;
    }else {
        return true;
    }
}
console.log(num(2));


//2. Создайте фукнцию, которая принимает 3 числа. Возвращать должна среднее из этих 3х чисел. (Не забудьте добавить проверки на
// то, что аргументы не пустые и являются числами).
function average(a,b,c){
    if (!isNaN(+a+b+c)) {
        let ave = [a, b, c].sort((a, b) => a - b)[1];
        return ave;
    }else if ('') {
        alert('пустая строка');
    }else if (isNaN(a+b+c)){
        alert('not a number');
    }

}

console.log(average(0,2,3));

//3. Создайте функцию, которая принимает объект и проверяет есть ли в нем свойство 'name'. Вернуть Boolean тип.
let object = {
    name: 'Chris',
    surname:'Pes'
};

function has(object) {
  return 'name' in object;
}

console.log(has(object));

//4. Создайте функцию, которая принимает объект со свойствами name и surname и возвращает строку в формате Имя Фамилия.
let user = {
    name: 'Chris',
    surname:'Pes'
};

function full_name(user){
        return user.name + ' ' + user.surname;
}
console.log(full_name(user));

//5. Создайте функцию, которая принимает объект типа {name1: 200, name2: 500, name3: 400}. Функция должна вернуть сумму всех
// свойств объекта.


let obj = {
    name1: 200,
    name2: 500,
    name3: 400
};

function sum(obj){
    return  obj.name1 + obj.name2 + obj.name3;
}
console.log(sum(obj));

//6. Создайте функцию, которая принимает объект. Все ЧИСЛОВЫЕ свойства объекта нужно поделить на 2,
// если получилось НЕ целое число - округлить его по математическим правилами, а текстовые поменять на строку
// Hello, Palmo. Если свойство не числовое или не текстовое - удалить его из объекта. Функция должна вернуть переделанный объект.

let object1 = {
    num1: 2,
    num2: 3,
    num3: 5,
    str1: 'Hello',
    str2: 'Bie',
    bool: false
};
function adoption(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] = Math.round(obj[key]/2);

        }else if (typeof obj[key] === 'string' ){
            obj[key] = 'Hello Palmo';
        }else {
            delete obj[key];
        }
    }
    return obj;
}

console.log(adoption(object1));

//7. Создайте игру "Викторина". Опираясь на ваши знания по JS, создайте игру, которая поочередно задаст пользователю 10 вопросов.
// За каждый правильный ответ начисляйте пользователю 1 балл. После ответа на все вопросы выведите сколько баллов заработал пользователь.
let questions = {
    'Сколько будет 2+2?':4,
    'Столица Украины?': 'Киев',
    'У какой птицы самый большой клюв?': 'Пеликан',
    'Самая большая река Украины?':'Днепр',
    q5: 'Самая высокая гора Украины?',
    q6: 'Когда родился Шевченко Т.Г.?',
    q7: 'Страусы от опасности прячут голову в песок?',
    q8: 'Молния не может ударить дважды в одно и то же место?',
    q9: 'Какая страна производит больше всего кофе в мире?',
    q10:'Какой вкус у Куантро?'
};
function quiz(obj) {
    for (let key in obj) {
        prompt(obj[key]);
    }
}


