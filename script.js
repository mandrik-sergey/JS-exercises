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


function getShortName(fullName){

}

let getInitials = function (string) {
    let names = string.split(' '),
        initials = names[1].substring(0, 1).toUpperCase();

    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
};


console.log(getInitials('FirstName MiddleName LastName'));