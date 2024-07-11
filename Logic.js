const btn = document.querySelectorAll('.btns');
const body = document.querySelector('body')

//console.log(btn);

btn.forEach( (b1)=>{
    // console.log(b1);
    b1.addEventListener('click',(eve)=>{
        // console.log(eve);
        console.log(eve.target.id);  //one, tow, three, four
        switch (eve.target.id) {
            case 'one':
                body.style.backgroundColor = 'pink';
                break;
            case 'tow':
                body.style.backgroundColor = 'skyblue';
                break;
            case 'three':
                body.style.backgroundColor = 'grey';
                break;
            case 'four':
                body.style.backgroundColor = 'violet';
                break;
        
            default:
                break;
        }
    })
});



