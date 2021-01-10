//operador de reposo, nos permite extraer las propiedades de un objeto que aún 
//no se ha construido

const obj = {
    name: 'Pedro',
    age: 33,
    country: 'UY'
}

let {name, ...all} = obj
console.log(name, all)//output: Pedro { age:33, country: 'UY' }

const obj = {
    name: 'Pedro',
    age: 33,
    country: 'UY'
}
let {country, ...all} = obj
console.log(all) //output { name: 'Pedro', age: 33 }

const obj = {
    name: 'Julio',
    age: 31
}

const otroObjeto = {
    ...obj,
    country: 'MX'
}

console.log(otroObjeto)

// Promise.finally

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? resolve('Hello World')
            : reject(new Error('Test error'))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizó la promesa'))

const helloWorld2 = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hola Mundo'), 3000)
            : reject(new Error('Test error'))
    })
}
    
helloWorld2()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizó la promesa'))


// expresiones regulares
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')

const year = match[1]
const month = match[2]
const day = match[3]
console.log(year,month,day)