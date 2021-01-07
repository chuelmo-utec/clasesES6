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