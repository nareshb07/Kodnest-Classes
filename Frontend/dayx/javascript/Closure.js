function Outer() {
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}

let counter = Outer();
counter();
counter();


