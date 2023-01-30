1
//выведите в консоли каждый элемент из массива [45, 12, 3, 2, 1, 35] с помощью forEach()
const numbers = [45, 12, 3, 2, 1, 35]
numbers.forEach((a) =>{
    console.log(a);
})

2
//создайте новый массив с помощью map() из массива [45, 46, 47] в котором все значения будут удвоены и выведите в консоли
let numbers3 = [45, 46, 47]
let number4 = numbers3.map(myFunc)

function myFunc(value) {
    return value * 2
}

console.log(myFunc);

3
//создайте новый массив только из чисел больше 5ти из массива [45, 12, 3, 2, 1, 35] с помощью filter()
let numbers5 = [45, 12, 3, 2, 1, 35]
let over5 = numbers5.filter(myFunc)

function myFunc(value) {
    return value > 5
}

4
//сложите все числа из массива [45, 12, 3, 2, 1, 35] с помощью reduce() и выведите результат в консоли
const numbers1 = [45, 12, 3, 2, 1, 35]
let sum= numbers1.reduce(myFunc);

function myFunc(total, value) {
    return total + value
}
console.log(myFunc);

5
//сложите все числа из массива [45, 12, 3, 2, 1, 35] с помощью reduce() и начального значения 50, выведите результат в консоли
const numbers2 = [45, 12, 3, 2, 1, 35];
let sum1= numbers2.reduce (myFunc, 50);

function myFunc(total, value) {
    return total + value;
}

6
//создайте массив только из чисел больше 5ти используя every() из массива [45, 12, 3, 2, 1, 35]
let numbers6 = [45, 12, 3, 2, 1, 35]
let allOver5 = numbers5.every(myFunc)

function myFunc(value) {
    return value > 5
}

7
//создайте массив только из чисел больше 5ти используя some() из массива [45, 12, 3, 2, 1, 35]
let numbers7 = [45, 12, 3, 2, 1, 35]
let someOver5 = numbers5.some(myFunc)

function myFunc(value) {
    return value > 5
}

8
//используйте метод indexOf чтобы найти индекс 'apple' в массиве ниже
const fruit = ['apple', 'banana', 'grape', 'apple']
let position = fruit.indexOf('apple');

9
//используйте метод lastIndexOf чтобы найти индекс последнего 'apple' в массиве ниже
const fruites = ['apple', 'banana', 'grape', 'apple']
let position1 = fruites.lastIndexOf('apple');

10
//проверьте находится ли 'apple' в массиве ниже
const fruits = ['apple', 'banana', 'grape']
console.log('apple');

11
//выведите в консоли первое число которое больше 5ти из массива [1, 3, 4, 9, 0, 20]
const arr = [1, 3, 4, 9, 0, 20]
console.log(3);

12
//выведите в консоли индекс первого числа который больше 5ти из массива [1, 3, 4, 9, 0, 20]
const number = [1, 3, 4, 9, 0, 20]
console.log([3]);

13
//превратите строку 'Hello' в массив с помощью from()
arr.from('Hello')

14
//выведите в консоли все ключи из массива
let fruits1 = ['apple', 'banana', 'kiwi', 'orange']
let keys = fruits1.keys( ) 

for ( let of keys) {
    text += x + ""
}