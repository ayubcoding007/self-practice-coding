// const change = ()=>{
//     document.querySelector('h1').innerHTML = 'Async Code'
// }
// const stop = setTimeout(change,2000)
// document.querySelector('button').addEventListener('click',()=>{
//     console.log('stopped');
//     clearTimeout(stop)
// })

let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
 let close;

start.addEventListener('click',()=>{
    let body = document.querySelector('body');
   close =  setInterval(()=>{
        body.style.backgroundColor = getRandomColor();
    },1000)
})

function getRandomColor(){
    let lettters = '0123456789ABCDEF'
     let color = '#'
     for(let i=0;i<6;i++){
      color +=lettters[Math.floor(Math.random() * 16)]
     }
     return color
    //  console.log(color);

}

console.log(getRandomColor());
 
 
function stopInterval(){
    clearInterval(close)
    close =null;
}

stop.addEventListener('click',stopInterval)