const clock = document.querySelector('.clock');
//console.log(clock);


//we will use set intervel function in js 
// we have to give me the function and the time interval on which we want to run the function 

setInterval(()=>{
    let date = new Date();
    //console.log(date.toLocaleTimeString());
    // clock.innerHTML=date.toLocaleTimeString();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    clock.innerHTML = date.toLocaleTimeString(undefined, options);
},1000)