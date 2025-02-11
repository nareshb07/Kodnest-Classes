let g = 200;

function outer() {
    let out = 100;
    console.log("global variable",g);
    console.log("outer variable",out);
    // console.log("inner variable",inn );

    function inner( ){
        let inn = 50;
        console.log("global variable",g);
        console.log("outer variable",out);
        console.log("inner variable",inn );

    }  
    inner(); 
}
outer()

console.log("outer variable",out);
        console.log("inner variable",inn );
        