// Створити змінну з іменем age і присвоїти їй значення свого віку. Вивести значення цієї змінної в консоль.
const age = 13;
console.log(age);

// Створити змінну з іменем name і присвоїти їй значення свого імені. Вивести значення цієї змінної в консоль.
const name = "Антон";
console.log(name);

// Створити змінну з іменем isStudent і присвоїти їй значення true або false, залежно від того, чи є студентом. Вивести значення цієї змінної в консоль.
const isStudent = true;
console.log(isStudent);

// Створити змінну з іменем myString і присвоїти їй рядок з вашої улюбленою цитатою. Вивести цей рядок в консоль.
const myString = "Йди завжди до кінця";
console.log(myString);

// Створити змінну з іменем myNumber і присвоїти їй довільне числове значення. Потім присвоїти цій змінній результат додавання до неї числа 10. Вивести значення myNumber в консоль.
let myNumber = 6;
myNumber = myNumber + 4;
console.log(myNumber);

// Створити змінну з іменем myNull і присвоїти їй значення null. Вивести значення цієї змінної в консоль.
const myNull = null;
console.log(null);

// Створити скрипт який виводить спливаюче вікно з запитом на введення імені користувача “Введіть своє ім’я” за допомогою prompt(). Результат зберегти в змінній userName. Після вивести alert з отриманим ім’ям. Також перевірити за допомогою typeof тип змінної userName при отриманні імен. 
const userName = prompt("Введіть своє ім’я");
console.log(userName);
alert(`Ваше ім'я - ${userName}`); // Я узнав як вивести змінну у тексті ChatGPT
console.log(typeof(userName));

// Створити скрипт який виводить спливаюче підтвердження за допомогою confirm() з питання “Ви дійсно хочете покинути сторінку?”. Результат зберегти в змінній userAnswer та вивести в консоль. Перевірити результат при натисканні ОК та CANCEL
const userAnswer = confirm("Ви дійсно хочете покинути сторінку?");
console.log(userAnswer);

// Створити скрипт який виводить спливаюче попередження "Увага! Дія може бути небезпечною." за допомогою alert(). Вивести повідомлення про те, що дія небезпечна та попросити користувача підтвердити дію за допомогою confirm() “Ви впевнені, що хочете продовжити?”. 
alert("Увага! Дія може бути небезпечною.");
const userConfirm = confirm("Ви впевнені, що хочете продовжити?");
console.log(userConfirm);