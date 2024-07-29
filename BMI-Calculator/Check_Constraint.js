//console.log(this)  // will give me an empty object '{}'


//so here making check for parameter in function 



//handeling such proble 

function handelDefault(){
    throw new Error("Param Required!!");
}


function greetUser(name = handelDefault()){      //here as per ES-6 feature this is the default value for the parameter passing to the function
    console.log(`Hey There, ${name} Wlcome to BMI Calculator.`);
}

//greetUser(); //it will return the undefine 

greetUser();


