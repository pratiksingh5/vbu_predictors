

let login = document.querySelector('#login');
let modalCross = document.querySelector('#modalCross');
let modal = document.querySelector('#modal');


login.addEventListener('click', function(){
    modal.style.display = 'block';
    console.log('clci')
})

modalCross.addEventListener('click', function(){
    modal.style.display = 'none';
})

let animate = gsap.timeline();
animate.to('#overlay1',{
    duration:1.4,
    x:1600,
    opacity:0
})
animate.to('#overlay2',{
    duration:1.4,
    x:-1600,
    opacity:0

})
animate.to('#overlay3',{
    duration:1.4,
    y:1500,
    opacity:0

})