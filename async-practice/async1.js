function fn1() {
    console.log('fn1')
}
function fn2() {
    console.log('fn2')
    fn1()
}
function fn3() {
    console.log('fn3')
    fn2()
}
fn3();