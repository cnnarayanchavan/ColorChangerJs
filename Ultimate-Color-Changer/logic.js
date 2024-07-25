const changeColor = ()=>{
    //function to generate a random color
    let hex = '0123456789ABCDEF';
    let color = '#'
    for(i=0; i<6; i++){
        color = color+hex[Math.floor(Math.random()*16)]
    }
    return color
}

let startChanging;

const changeChange= ( )=>{
    startChanging = setInterval(() => {
        document.body.style.backgroundColor=changeColor();
    }, 1000);
}

const stopStop = ()=>{
    clearInterval(startChanging)
}


document.getElementById('btn1').addEventListener('click',changeChange)
document.getElementById('btn2').addEventListener('click',stopStop)



