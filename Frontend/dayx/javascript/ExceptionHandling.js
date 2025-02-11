function disp(){
    console.log(a);
}

function process(){
    console.log("Processing ");
}
try {
    disp();
}
catch(e){
    console.log('Exception occured and Handled');
}
finally {
    console.log("disp function done");
    
}

process();