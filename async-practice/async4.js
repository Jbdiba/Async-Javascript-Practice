// first, the console log '1' enters the callstack. It pops off when completed.
console.log('1')
// second, setTimeout enters the callstack and starts the timer.
setTimeout(function(){ console.log('2');}, 2000);
// third console log '3' enters the callstack. It pops off when completed.
console.log('3');
// fourth, when the timer is complete, console log '2' enters the callstack. It pops off when completed.