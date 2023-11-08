const narcissic = (nombre) => {
    return nombre === nombre
        .toString()
        .split('')
        .map((x, i, arr) => x ** arr.length)
        .reduce((a, b) => a + b)
}

console.log(narcissic(153))
console.log(narcissic(1634))