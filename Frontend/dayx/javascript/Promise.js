let p1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('Fetching the Data');
        resolve('Images');
        reject();
    }, 3000)
})

p1.then((data)=>{
    console.log('display:', data);
}).then(()=>{
    console.log('display once again data:');
}).catch(() => {
    console.log('Prmosie rejected')
})
