//  let date= new Date();  
//  let time = date.toLocaleTimeString()
//  let display= document.querySelector('.display')
//  display.textContent=time;
 
// //  setInterval(()=>{
// //      let date= new Date();
// //      let time = date.toLocaleTimeString()
// //      display.textContent=time;
// //  },1000)        

// setInterval(()=>{
//     display.textContent = new Date().toLocaleTimeString()
// },1000)

let display = document.querySelector('.display')
setInterval(()=>{
    let date = new Date();
    display.innerHTML = date.toLocaleTimeString()
})