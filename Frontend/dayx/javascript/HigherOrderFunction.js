
// function greet(name){
//     console.log(`Hello ${name}`);
// }

function processGreet(callback) {
    console.log(callback);
    callback('Akash')
}

processGreet((name) => {
    console.log('Hello', name)
});
// Higher Order Function =  Function which accepts the other fumction as argument