// Task 1//
// let x = 10;
// let y = 7;
// if(x > y) {
//   alert("x больше чем y");
// } else {
//   alert("x не больше y");
// }
//Task 2//
// let num = +prompt("Укажите ваше число");
// if(num % 2 === 0) {
//   alert("Число " + num + " четное");
// } else {
//   alert("Число " + num + " нечетное");
// }
//Task3//
// let num = prompt("Укажите ваше число");
// let secondMassag = num.length;
// if(+num >= 0) {
//   alert(" Число " + num + " положительное \n длиной " + secondMassag +" символа");
// } else {
//   alert(" Число " + num + " отрицательное \n длиной " + secondMassag +" символа");
// }
//Task4//
// let a = +prompt("Put your nomber here please");
// let b = +prompt("Put your nomber here please");
// let c = +prompt("Put your nomber here please");
// if (a> b && a > c) {
//   alert( a + " is the bigest nomber");
// } else if (b > a && b > c) {
//    alert( b + " is the bigest nomber");
// } else if (c > a && c > b) {
//    alert( c + " is the bigest nomber");
// } else {
//    alert("Ups");
// }
//Task5//

let a = +prompt("Put first length here please");
let b = +prompt("Put second length  here please");
let c = +prompt("Put third length nomber here please");

if (a + b > c || a + c > b || b + c > a) {
  alert("Треугольник существует");
} else {
  alert("Треугольник не существует");
}
