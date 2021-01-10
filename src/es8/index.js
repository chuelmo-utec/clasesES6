//Objets entries
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

//transforma el objeto en una matriz
const entries = Object.entries(data)
console.log(entries)
//cuantos elementos tiene el objeto? pues fácil
console.log(entries.length)

//Object values, devuelve los valores de un objeto
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}
const values = Object.values(data)
console.log(values)
console.log(values.length)

//padding
const string = 'hello'
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, ' ---------------'))


// Async Await
const helloWorld = () => {
    return new Promise((resolve, reject) =>  {
        if (false) {
            setTimeout( () => {
                resolve('Hello World!', 3000)
            })
        } else {
            reject(new Error('Test Error'))
        }
    })
}

const helloConIfTernario = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World with if ternario!'), 3000)
            : reject(new Error('Test error with if ternario'))
    })
    
}

const helloAsync = async () => {
    const hello = await helloWorld()
    console.log(hello)
}

const helloAsync2 = async () => {
    const hello = await helloConIfTernario()
    console.log(hello)
}

helloAsync()
helloAsync2()

//forma correcta de usar el async, con try y catch
const anotherFunction = async () => {
    try {
        const hello = await helloWorld()
        console.log(hello)
    } catch (error) {
        console.log(error)
    }
}

anotherFunction()