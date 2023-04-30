let buttons = document.querySelector('.buttons');
let num = document.querySelector('.num');

buttons.addEventListener('click', function(evt){
    let count = Number(num.textContent);

    // decrease or increase number
    if(evt.target.classList.contains('decrease'))
        count--;
    else if(evt.target.classList.contains('reset'))
        count = 0;
    else if(evt.target.classList.contains('increase'))
        count++;

    num.textContent = count;
    
    // change number color
    if(count > 0){
        num.classList.remove('rednum');
        num.classList.add('greennum');
    } else if(count < 0){
        num.classList.add('rednum');
        num.classList.remove('greennum');
    } else {
        num.classList.remove('rednum', 'greennum');
    }
});