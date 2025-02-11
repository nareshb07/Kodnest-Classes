function fetchUserdata(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('Fetching user data');
            resolve('user data');
        }, 2000)
    })
}

async function processData(){
    console.log('Data Processing started');
    let userdata = await fetchUserdata();   
    console.log(userdata);
    console.log("processData ended");
    
}

processData();
console.log("others");
