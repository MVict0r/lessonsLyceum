// const people = [
//     { name: "Alice", lastName: "Cooper", age: 25 },
//     { name: "Bob", lastName: "Pinger", age: 30 },
//     { name: "Charlie", lastName: "Davinson", age: 35 }
// ]

// for (let person of people){
//     if(person.age <= 30){
//         result.push(person.age)
//     }
// }

// const res = people.filter((person) => {
//     return person.age <= 30
// })

// const res = people
//     .filter(person => person.name === "Charlie")
//     .map(person=> person.name + ' ' + person.lastName)
//
// console.log(res)


// let num = 143567
// let chapter = 1423
//
// if(num.toString())
// console.log()

// const person = {id:123, name:"John", lastName: "Cooper", age: 25};

// console.log(Object.keys(person));

// const heightAndWeight = [180, 80]

// const height = heightAndWeight[0]
// const width = heightAndWeight[1]
// const [height, width] = [180 ,80];
// console.log(height, width)

// Object.entries(person).forEach(([key, value]) => {
//     console.log('Key: ', key, 'Value: ', value);
// })

// const {id, name} = person
//
// console.log(id, name)

// const a = [1, 2, 3]

// console.log(...a)

// const b = [4, 5 , 6]

// console.log([...a, ...b, 515])
//
// console.log({
//     ...person,
//     address: 'Almaty'
// })

// function prigArgs(...args) {
//     console.log(args)
// }
//
// prigArgs(1, 2, 3, 14, 4535, 53, 2323, 324, 5353, 64, 5)

//------------------------------------------------------------------------
// 9. Асинхронность. Глобальные объекты. Node.js. Введение в TS

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
//
// setTimeout(() => {
//     console.log(5)
// }, 4000)

import axios from "axios";
// fetch('https://yandex.ru')
// .then(response => {
//     console.log(response)
// })

// const promise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(500)
//     }, 3000)
// })
//
// promise.then(res => {
//     console.log(res)
// })

// axios.get("https://yandex.ru").then(res => console.log(res))







// const promise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('Success')
//     }, 2000);
// })
//
// // promise.then(result => console.log(result))
//
// async function print(){
//     const res = await promise
//     console.log(res)
// }
//
// print()


const a = -1

a > 0 ? console.log(a) : console.log('Error')







