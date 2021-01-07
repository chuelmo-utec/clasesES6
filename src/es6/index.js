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

