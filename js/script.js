/*
Задание No1. Переменные
1. Объявите две переменные: admin и name.
2. Запишите свое имя в переменную name.
3. Скопируйте значение из переменной name в admin.
4. Выведите на экран значение admin, используя функцию alert.
*/
let myName, admin;
myName = 'Ilya';
admin = myName;
alert(admin);

/*
Задание No2. Константы
Есть следующий код:
const birthday = '18.04.1982';
const age = someCode(birthday);
В нем объявлены константа birthday, а также age, которая вычисляется при помощи
некоторого кода, используя значение из birthday (в данном случае детали не имеют
значения, поэтому код не рассматривается).
Можно ли использовать заглавные буквы для имени birthday? А для age? Или
одновременно для обеих переменных?
const BIRTHDAY = '18.04.1982'; // использовать заглавные буквы?
const AGE = someCode(BIRTHDAY); // а здесь?

Ответ:
const BIRTHDAY = '18.04.1982';  // да, можно
const AGE = someCode(BIRTHDAY); // и здесь. Ошибки из-за присвоения результата выражения константе не будет
*/

/*
Задание No3. Строки
Что выведет этот скрипт:
5. let name = "Ilya";
6. alert( `hello ${1}` ); // ?
7. alert( `hello ${"name"}` ); // ?
8. alert( `hello ${name}` ); // ?
*/
myName = 'Ilya';
alert(`hello ${1}`);      // hello 1
alert(`hello ${"name"}`); // hello name
alert(`hello ${myName}`); // hello Ilya

/*
Задание No4. Преобразования типов
Какой результат будет у выражений ниже?
"" + 1 + 0                          // 10
"" - 1 + 0                          // -1
true + false                        // 1
6 / "3"                             // 2
"2" * "3"                           // 6
4 + 5 + "px"                        // 9px
"$" + 4 + 5                         // $45
"4" - 2                             // 2
"4px" - 2                           // NaN
7 / 0                               // Infinity
" -9 " + 5                          //  -9 5
" -9 " - 5                          // -14
null + 1                            // 1
undefined + 1                       // NaN
*/

/*
Задание No5. Постфиксная и префиксная формы
Чему будут равны переменные a, b, c и d в примере ниже?
let a = 1, b = 1;
let c = ++a; ?
let d = b++; ?
*/
let a = 1, b = 1;
let c = ++a; // c = 2, a = 2
let d = b++; // d = 1, b = 2

/*
Задание No6. Результат присваивания
Чему будут равны переменные a и x в примере ниже?
let a = 2;
let x = 1 + (a *= 2);
*/
a = 2;
let x = 1 + (a *= 2); // x = 5, a = 4

/*
Задание No7. Операторы сравнения
Каким будет результат этих выражений?
5 > 4                               // false
"ананас" > "яблоко"                 // false
"2" > "12"                          // true
undefined == null                   // true
undefined === null                  // false
null == "\n0\n"                     // false
null === +"\n0\n"                   // false
*/

/*
Задание No8. Операторы взаимодействия
Создайте страницу, которая спрашивает имя у пользователя и выводит его.
*/
let username = prompt('Введите ваше имя');
alert(username);

/*
Задание No9. Условные операторы
Выведется ли alert?
if ("0") {
alert( 'Привет' );      // сообщение выведется
}
*/

/*
Задание No10. Условные операторы
Используя конструкцию if..else, напишите код, который будет спрашивать: „Каково
«официальное» название JavaScript?“
Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае –
отобразить: «Не знаете? ECMAScript!»
*/
let jsName = prompt('Каково «официальное» название JavaScript?');
if (jsName === 'ECMAScript') {
    alert('Верно!');
} else if (jsName !== null) {
    alert('Не знаете? ECMAScript!');
}

/*
Задание No11. Покажите знак числа
Используя конструкцию if..else, напишите код, который получает число через prompt, а
затем выводит в alert:
1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа.
*/
let number = prompt('Введите число');
if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else if (number == 0) {
    alert(0);
}

/*
Задание No12. ИЛИ
Что выведет код ниже?
alert( null || 2 || undefined );        // 2
*/

/*
Задание No13. ИЛИ
Что выведет код ниже?
alert( alert(1) || 2 || alert(3) );     // сначала выведет 1, а потом 2
*/

/*
Задание No14. И
Что выведет код ниже?
alert( 1 && null && 2 );                // null
*/

/*
Задание No15. И
Что выведет код ниже?
alert( alert(1) && alert(2) );          // cначала 1, а потом undefinded
*/

/*
Задание No16.
Что выведет код ниже?
alert( null || 2 && 3 || 4 );           // 3
*/

/*
Задание No17. Проверка значения из диапазона
Напишите условие if для проверки, что переменная age находится в диапазоне между
14 и 90 включительно.
«Включительно» означает, что значение переменной age может быть равно 14 или 90.
*/
let age = prompt('Введите ваш возраст');
if (age >= 14 && age <= 90) {
    console.log('Ваш возраст попадает в диапазон!');
} else if (age !== null) {
    console.log('Ваш возраст не попадает в диапазон!');
}

/*
Задание No18. Проверка значения вне диапазона
Напишите условие if для проверки, что значение переменной age НЕ находится в
диапазоне 14 и 90 включительно.
Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого
оператора.
*/
age = prompt('Введите ваш возраст');

// 1
if (age != 14 && age < 14 && age != 90 && age > 90) {
    console.log('Ваш возраст не попадает в диапазон!');
} else if (age !== null) {
    console.log('Ваш возраст попадает в диапазон!');
}

// 2
if (age <= 14 && age >= 90) {
    console.log('Ваш возраст не попадает в диапазон!');
} else if (age !== null) {
    console.log('Ваш возраст попадает в диапазон!');
}

/*
Задание No19. If
Какие из перечисленных ниже alert выполнятся?
Какие конкретно значения будут результатами выражений в условиях if(...)?
if (-1 || 0) alert( 'first' );              // выполнится, -1
if (-1 && 0) alert( 'second' );             // не выполнится, 0
if (null || -1 && 1) alert( 'third' );      // выполнится, 1
*/

/*
Задание No20. Проверка логина
Напишите код, который будет спрашивать логин с помощью prompt.
Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не
введено или нажата клавиша Esc – показать «Отменено», в противном случае
отобразить «Я вас не знаю».
Пароль проверять так:
1. Если введён пароль «Я главный», то выводить «Здравствуйте!»,
2. Иначе – «Неверный пароль»,
3. При отмене – «Отменено».
Для решения используйте вложенные блоки if. Обращайте внимание на стиль и
читаемость кода.
*/
let login = prompt('Введите ваш логин');
if (login === 'Админ') {
    let password = prompt('Введите ваш пароль');
    if (password === 'Я главный') {
        alert('Здравствуйте!');
    } else if (password === null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (login === null) {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}

/*
Задание No21. Переписать условия "if" на "switch"
Перепишите код с использованием одной конструкции switch:
let a = +prompt('a?', '');
if (a == 0) {
alert( 0 );
}
if (a == 1) {
alert( 1 );
}
if (a == 2 || a == 3) {
alert( '2,3' );
}
*/
a = +prompt('a?', '');
switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2, 3');
}

/*
Задание No22.
Дано целое число. Если оно является положительным, то прибавить к нему 1; в
противном случае не изменять его. Вывести полученное число.
*/
number = prompt('Введите число');
if (number !== null && number % 2 === 0) {
    number++;
}
console.log(number ?? '');

/*
Задание No23.
Дано целое число. Если оно является положительным, то прибавить к нему 1; в
противном случае вычесть из него 2. Вывести полученное число.
*/
number = prompt('Введите число');
if (number !== null && !isNaN(+number)) {
    if (number % 2 === 0) {
        number++;
    } else {
        number -= 2;
    }
}
console.log(number ?? '');

/*
Задание No24.
Дано целое число. Если оно является положительным, то прибавить к нему 1; если
отрицательным, то вычесть из него 2; если нулевым, то заменить его на 10. Вывести
полученное число.
*/
number = prompt('Введите число');
if (number !== null && !isNaN(+number)) {
    if (number == 0) {
        number = 10;
    } else if (number % 2 === 0) {
        number++;
    } else {
        number -= 2;
    }
}
console.log(number ?? '');

/*
Задание No25.
Даны три целых числа. Найти количество положительных чисел в исходном наборе.
*/
let numbers = [
    prompt('Число а'),
    prompt('Число b'),
    prompt('Число c')
];
let amountPositiveNums = 0;

for (let i = 0; i < 3; i++) {
    if (numbers[i] >= 0 && numbers[i] !== null) {
        amountPositiveNums++;
    }
}

console.log('Количество положительных чисел = ', amountPositiveNums);

/*
Задание No26. Даны три целых числа. Найти количество положительных и количество
отрицательных чисел в исходном наборе.
*/
numbers = [
    prompt('Число а'),
    prompt('Число b'),
    prompt('Число c')
];
amountPositiveNums = 0;
let amountNegativeNums = 0;

for (let i = 0; i < 3; i++) {
    if (numbers[i] !== null) {
        if (numbers[i] <= 0) {
            amountNegativeNums++;
        } else {
            amountPositiveNums++;
        }
    }
}

console.log('Количество положительных чисел = ', amountPositiveNums);
console.log('Количество отрицательных чисел = ', amountNegativeNums);

/*
Задание No27.
Даны два числа. Вывести большее из них.
*/
let number1 = prompt('Число а');
let number2 = prompt('Число b');

if (number1 > number2) {
    console.log(number1 ?? number2);
} else if (number1 < number2) {
    console.log(number2 ?? number1);
}

/*
Задание No28.
Даны два числа. Вывести вначале большее, а затем меньшее из них.
*/
number1 = +prompt('Число а');
number2 = +prompt('Число b');

if (number1 > number2) {
    console.log(number1);
    console.log(number2);
} else if (number1 < number2) {
    console.log(number2);
    console.log(number1);
}

/*
Задание No29. Даны две переменные вещественного типа: A, B. Перераспределить
значения данных переменных так, чтобы в A оказалось меньшее из значений, а в B —
большее. Вывести новые значения переменных A и B.
*/
a = prompt('Число а');
b = prompt('Число b');
if (a > b) {
    let temp = a;
    a = b;
    b = temp;
}
console.log('a = ', a);
console.log('b = ', b);

/*
Задание No30.
Даны две переменные целого типа: A и B. Если их значения не равны, то присвоить
каждой переменной сумму этих значений, а если равны, то присвоить переменным
нулевые значения. Вывести новые значения переменных A и B.
*/
a = +prompt('Число а');
b = +prompt('Число b');
if (a == b) {
    a = b = a + b;
} else {
    a = b = 0;
}
alert('a = ', a);
alert('b = ', b);

/*
Задание No31.
Даны две переменные целого типа: A и B. Если их значения не равны, то присвоить
каждой переменной большее из этих значений, а если равны, то присвоить
переменным нулевые значения. Вывести новые значения переменных A и B.
*/
a = +prompt('Число а');
b = +prompt('Число b');
if (a == b) {
    a = b = 0;
} else {
    a = b = a > b ? a : b;
}
console.log('a = ', a);
console.log('b = ', b);

/*
Задание No32.
Даны три числа. Найти наименьшее из них.
*/
numbers = [
    +prompt('Число а'),
    +prompt('Число b'),
    +prompt('Число c')
];
let maxNumber = numbers[0];
for (let i = 1; i < 3; i++) {
    if (maxNumber < numbers[i]) {
        maxNumber = numbers[i];
    }
}
console.log(maxNumber);

/*
Задание No33.
Даны три числа. Найти среднее из них (то есть число, расположенное между
наименьшим и наибольшим).
*/
number1 = +prompt('Число а');
number2 = +prompt('Число b');
let number3 = +prompt('Число c');

if ((number1 > number2 && number1 < number3) || (number1 < number2 && number1 > number3)) {
    console.log(number1);
} else if ((number2 > number1 && number2 < number3) || (number2 < number1 && number2 > number3)) {
    console.log(number2);
} else if ((number3 > number1 && number3 < number2) || (number3 < number1 && number3 > number2)) {
    console.log(number3);
}

/*
Задание No34.
Даны три числа. Вывести вначале наименьшее, а затем наибольшее из данных чисел.
*/
numbers = [
    +prompt('Число а'),
    +prompt('Число b'),
    +prompt('Число c')
];
maxNumber = numbers[0];
let minNumber = numbers[0];

for (let i = 1; i < 3; i++) {
    if (maxNumber < numbers[i]) {
        maxNumber = numbers[i];
    } else if (minNumber > numbers[i]) {
        minNumber = numbers[i];
    }
}

console.log('Максимальное из числел = ', maxNumber);
console.log('Минимальное из чисел = ', minNumber);

/*
Задание No35.
Даны три числа. Найти сумму двух наибольших из них.
*/
number1 = +prompt('Число а');
number2 = +prompt('Число b');
number3 = +prompt('Число c');

if (number1 >= number3 && number2 >= number3) {
    console.log(number1 + number2);
} else if (number1 >= number2 && number3 >= number2) {
    console.log(number1 + number3);
} else {
    console.log(number2 + number3);
}

/*
Задание No36.
Даны три целых числа, одно из которых отлично от двух других, равных между собой.
Определить порядковый номер числа, отличного от остальных.
*/
number1 = +prompt('Число а');
number2 = +prompt('Число b');
number3 = +prompt('Число c');

if (number1 === number2) {
    console.log(3);
} else if (number1 === number3) {
    console.log(2);
} else if (number2 === number3) {
    console.log(1);
}
