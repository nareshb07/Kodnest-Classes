let age = 99;

if ( age>18 && age < 65) {
    console.log('Adult');
} else if (age<18){
    console.log('child');
} else {
    console.log('Senior Citizen');   
}

//switch 

let day = "Friday";

switch(day){
    case "Friday":
        console.log("today is weekday");
        break
    case "Sunday":
        console.log("today weekend");
        break
    default :
        console.log("not friday and sunday");
        break
}


// LOOPING CONTROL CONSTRUCT.

//Normal for Loop
for (let i = 0; i < 10; i++){
    // console.log(i);
}

arr = [1,2,4,5]

for(let i = 0; i < arr.length; i++){
    // console.log(arr[i]);
}


// using forEach method
arr.forEach((ele, index) => console.log(`the element ${index} is ${ele}`));

// for "in"

for(i in arr){
    console.log(i);
}

// for "of "
for(i of arr){
    console.log(i);
}

// while loop
let j = 0; 
while (j<=4){
    console.log(j);
    j++;
}

//do while loop 
do{
    console.log(j);
    j--;
}while (j>=0)

