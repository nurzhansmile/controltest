// const test = Number(prompt('Баллы за тест (до 50):', ))
// const dz = Number(prompt('Баллы за домашнее задание (до 30):', ))
// const attendance = Number(prompt('Баллы за посещаемость (до 20):', ))

// let total = 0
// if(test <= 50 && dz<=30 && attendance <=20){
// total = test + dz + attendance
// console.log(total);
// alert("Ваш итоговый балл: " + total )
// }else{
//     alert("Данные не правильно указаны")
// }

// if(total >= 90  && total <=100){
//     alert("Отлично!" )
// }else if(total >= 75 && total <= 89){
//         alert("Хорошо)" )
// }else if(total >= 60 && total <= 74){
//     alert("Удовлетворительно..." )
// }else if(total < 60){
//     alert("Неудовлетворительно(" )
// }

var numbers = [5, 12, 8, 130, 44, 2, 9];

// С помощью цикла найти и вывести в консоль:
// Все числа больше 10
// Сумму всех чисел массива
// Максимальное и минимальное число
// Количество чисел больше 10

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i]>10){
        let numbersGreaterThan10 =[numbers[i]]
        console.log("числа больше 10: ", numbersGreaterThan10);
        console.log("количество",numbersGreaterThan10.length);
    }
}
