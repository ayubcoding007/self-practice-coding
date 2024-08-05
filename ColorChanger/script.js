// let first = document.querySelector('.first')
// let second = document.querySelector('.second')
// let third = document.querySelector('.third')
// let four = document.querySelector('.four')
// let main = document.querySelector('.main')

 

// first.addEventListener('click',()=>{
//     main.style.backgroundColor = 'red'
// })
// second.addEventListener('click',()=>{
//     main.style.backgroundColor = 'red'
// })
// third.addEventListener('click',()=>{
//     main.style.backgroundColor = 'red'
// })
// four.addEventListener('click',()=>{
//     main.style.backgroundColor = 'red'
// })

let button = document.querySelectorAll('.button') 
let body = document.querySelector('body')
  button.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
      if(e.target.id === 'gray'){
        body.style.backgroundColor = 'gray';
      }
        if(e.target.id ==='blue'){
        body.style.backgroundColor = 'blue';
      }
      if (e.target.id === 'cyan'){
        body.style.backgroundColor = 'cyan';
      }
     if(e.target.id === 'green'){
        body.style.backgroundColor = 'green'
      }
    })
  })