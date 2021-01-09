/*
// Comentarios hechos por un estudiante: edwintrumpet
Veo un pequeño error en la parte de módulos, Óscar exportó el módulo usando un export default y lo importó como un export nombrado.

También quiero aclarar que si a algunos no les funciona tal vez sea porque es una sintaxis que no está aún soportada por las últimas versiones de Node y para ese caso tocaría usar la sintaxis antigua.
ES6
<h3>export default</h3>

Con export default podemos exportar una variable, o función por defecto de un archivo así:

function hello() {
	return 'Hello!'
}

export default hello

Para importarla no necesitamos hacerlo con su nombre, podemos usar cualquier nombre y por defecto nos traerá la única variable o función que exportó así:

import myHello from './module'

console.log(myHello())

<h3>export nombrado</h3>

A diferencia del export default en esta ocasión podemos exportar más de una variable o función que se encuentre en nuestro archivo, pero para importarlas debemos hacerlo con el nombre exacto de esa variable entre llaves.

Para exportar lo hacemos así:

export function hello() {
	return 'Hello!'
}

export const bye = 'Bye!'

Podemos importar solo lo que necesitemos así:

import { hello } from './module'

console.log(hello())

También podemos importar más de un elemento nombrando cada uno

import { hello, bye } from './module'

console.log(hello())
console.log(bye)

Podemos cambiarles los nombres

import { hello, bye as byeGreeting } from './module'

console.log(hello())
console.log(byeGreeting)

Y podemos importar todas las funciones de una sola vez

import * as allGreetings from './module'

console.log(allGreetings.hello())
console.log(allGreetings.bye)

Anterior sintaxis

Cuando no nos funcione esta sintaxis porque no la tengamos soportada podemos usar la anterior

Para exportar lo hacemos así:

function hello() {
	return 'Hello!'
}

module.exports = hello

Para importar así:

const hello = require('./module')

console.log(hello())

Con la sintaxis antigua también podemos exportar más de una variable o función pasándolas como un objeto.
*/


const hello = () => {
    return 'hello!'
}

export default hello;