// antes de ES6
function newFunction(name, age, country) {
    var name = name || 'oscar'
    var age = age || 32
    var country = country || 'MX'
    console.log(name, age, country)
}

//es6
function newFunctionES6(name = 'oscar', age = 32, country = 'MX') {
    console.log(name, age, country)
}

newFunctionES6()
newFunctionES6('Ricardo', 23)
newFunctionES6('Juan', 30, 'UY')

// concatenación de strings antes de ES6
let hello = 'Hello'
let world = 'World!'
let epicPhrase = hello + ' ' + world
console.log(epicPhrase)

//template literals
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)

//before
let lorem = 'Lorem ipsum dolor sit amet consectetur adipiscing elit\n'
    + 'justo sodales ultrices, vehicula accumsan facilisi sapien\n'
    + 'curabitur per blandit litora.\n'
    + 'Erat eget litora dis nisl hac accumsan himenaeos et pellentesque\n'
    + 'fermentum inceptos montes ad massa, dictumst morbi rhoncus\n'
    + 'etiam vestibulum mollis class mus laoreet consequat tortor ac dictum.\n'
    + 'Parturient gravida orci placerat cras montes'
console.log(lorem)

//ES6
let lorem2 = `Lorem ipsum dolor sit amet consectetur adipiscing elit
justo sodales ultrices, vehicula accumsan facilisi sapien
curabitur per blandit litora.
Erat eget litora dis nisl hac accumsan himenaeos et pellentesque
fermentum inceptos montes ad massa, dictumst morbi rhoncus
etiam vestibulum mollis class mus laoreet consequat tortor ac dictum.
Parturient gravida orci placerat cras montes`
console.log(lorem2)

//desestructuración
let person = {
    name: 'oscar',
    age: 32,
    country: 'MX'
}

console.log(person.name, person.age, person.country)
let {name, age, country} = person
console.log(name, age, country)

//operador de propagación
let team1 = ['Oscar', 'Julian', 'Ricardo']
let team2 = ['Valeria', 'Yesica', 'Camila']
let education = ['David', ...team1, ...team2]

console.log(education)

//var, let, const
{var globalVar = "Variable Global"}
{let globalLet = 'Variable Global Let'}

console.log(globalVar)
console.log(globalLet) //<-- ERROR!!!

let name = 'chuelmo'
let age = 48

//es5
objeto = {name: name, age: age}
console.log(objeto)

//es6
objeto2 = {name, age}
console.log(objeto2)

// arrow functions
const names = [
    {name: 'Christian', age: 48},
    {name: 'Yesica', age:27}
]

let listOfNames = names.map(function(item){
    console.log(`${item.name} ${item.age}`)
})

let listOfNames2 = names.map(item => console.log(`${item.name} ${item.age}`))

const listOfNames3 = ({name, age}) => {
    console.log(`${name} ${age}`)
}

listOfNames3(names[0])

const listOfNames4 = ({name}) => {
    console.log(`${name}`)
}

listOfNames4(names[1])

const square = num => num * num

console.log(square(5))

// Una última prueba
const nombre = 'Jorge'
const edad = 43
const pais = 'Uruguay'

const persona = {
    nombre: 'Juan',
    edad: 45,
    pais: 'Uruguay'
}

const saludar = ({nombre, edad, pais}) => {
    console.log(`Hola, soy ${nombre}, tengo ${edad} años y soy de ${pais}`)
}

saludar(persona)
saludar(nombre, edad, pais) // <-- esto no anda jejejej, pero tenía que probar

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Todo OK!')
        } else {
            reject('Ups! Algo no anduvo bien')
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola, todo muy bien por aquí'))
    .catch(error => console.log(error))

