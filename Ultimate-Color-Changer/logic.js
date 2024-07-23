//first have to create the hexa codes for color

const randomColor =function(){
    let hexCode = "0123456789ABCDEF"
    let sym = "#"
    for(i = 0; i<6; i++){
    sym = sym+hexCode[Math.floor(( Math.random()*16))]
}   
return sym; 
}
console.log(randomColor()); 
