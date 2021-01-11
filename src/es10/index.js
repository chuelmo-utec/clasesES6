// Cambios en ES10
// Esta versión salió en junio 2019

let array = [1,2,3, [1,2,3, [1,2,3]]]

console.log(array)
console.log(array.flat())
console.log(array.flat(2))

let array = [1,2,3,4,5]
console.log(array.flatMap(value => [value, value * 2]))

let cadena = '        hola mundo   '
console.log(cadena)
console.log(cadena.trimStart())

let cadena2 = 'Hola mundo con espacios al final                '
console.log(cadena2)
console.log(cadena2.trimEnd())

// Puedo utilizar el valor error dentro del catch sin declararlo explicitamente

//Devolver un objeto a partir de un array
let entries = [['name', 'Oscar'], ['age',32]]
console.log(Object.fromEntries(entries))

let mySymbol = `My Symbol`
let symbol = Symbol(mySymbol)
console.log(symbol.description)
