const form = document.querySelector('form')

form.addEventListener('submit', (eve)=>{
eve.preventDefault();
const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const result = document.querySelector('#result');

const weightguide = document.getElementById('weight-guide');
const underWeight  = document.getElementById('underWeight');
const normalWeight = document.getElementById('normalWeight');
const overWeight = document.getElementById('overWeight');


if (height === '' || isNaN(height) || height<0 ) {
    //result.innerHTML = 'Please enter valid height';
    alert(`Please enter valid height it is: ${height}`)
}

else if (weight === '' || isNaN(weight) || weight<0 ) {
    //result.innerHTML = 'Please enter valid weight';
    alert(`Please enter weight it is: ${weight}`)
}
else{
    const BMI = (weight/ ((height*height)/10000).toFixed(2))
    result.innerHTML = `<span>Your BMI is: ${BMI}</span>`
   

    weightguide.style.display='block';
    underWeight.style.fontWeight = 'normal';
    normalWeight.style.fontWeight = 'normal';
    overWeight.style.fontWeight = 'normal';

    if (BMI < 18.6) {
        underWeight.style.fontWeight = 'bold';
    } else if (BMI >= 18.6 && BMI <= 29.8) {
        normalWeight.style.fontWeight = 'bold';
    } else {
        overWeight.style.fontWeight = 'bold';
    }
    }


});

