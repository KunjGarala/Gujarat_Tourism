let left=document.querySelector("#left")
let right=document.querySelector("#right")
let slider=document.querySelector("#slider")
let allimages=document.querySelectorAll("img")

allimages.forEach((image)=>{
    image.loading="lazy"
})

let count=1

left.style.opacity='0.3'

right.addEventListener('click',() => {
    if(count==20){
        right.style.opacity="0.3"
    }else{
        slider.style.transform=`translateX(-${(count++)*700}px)`
    }
    if(count==1){
        left.style.opacity='0.3'
    }
    else if(count==20){
        right.style.opacity='0.3'
    }
    else{
        left.style.opacity='1'
        right.style.opacity='1'
    }
})

left.addEventListener('click',() => {
    if(count==1){
        left.style.opacity='0.3'
    }else{
        slider.style.transform=`translateX(${-(--count)*700+700}px)`
    }
    if(count==1){
        left.style.opacity='0.3'
    }
    else if(count==20){
        right.style.opacity='0.3'
    }
    else{
        left.style.opacity='1'
        right.style.opacity='1'
    }
})
