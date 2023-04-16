let body = document.querySelector(`body`)
let btn = document.querySelector(`button`)
let sunIcon = btn.querySelector (`.sun`)
let text = document.querySelector (`.text`)



function darkModeToggler(){
    body.classList.toggle(`darkmode`)
    // no "add .?";
    let isDarkmode = body.classList.contains (`darkmode`)

    if(isDarkmode){
        text.innerHTML = `dark Mode`
        sunIcon.style.marginTop = `-100%`
    } else{
        text.innerHTML = `light Mode`
        sunIcon.style.marginTop = `0%`
    }
    
}

btn.addEventListener(`click`, darkModeToggler)