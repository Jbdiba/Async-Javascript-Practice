function multiply(a,b){
    throw new Error(`cant multiply ${a} and ${b}`)
}
​
function square(n) {
    return multiply(n,n)
}
​
function printSquare(n) {
    const result = square(n)
    console.log(result)
}
​
printSquare(4)