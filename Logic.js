const btn = document.querySelectorAll('.btns');
const body = document.querySelector('body')

//console.log(btn);

btn.forEach( (b1)=>{
    // console.log(b1);
    b1.addEventListener('click',(eve)=>{
        // console.log(eve);
        console.log(eve.target.id);  //one, tow, three, four
        if (eve.target.id==='one') {
            body.style.backgroundColor = 'pink'
        }
        if (eve.target.id==='tow') {
            body.style.backgroundColor = 'skyblue'
        }
        if (eve.target.id==='three') {
            body.style.backgroundColor = 'black'
        }
        if (eve.target.id==='four') {
            body.style.backgroundColor = 'violet'
        }
    })
});



