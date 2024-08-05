

let form  =document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weigth = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('.result')

    if(isNaN(height) || isNaN(weigth)){
        result.textContent = 'Invalid input.'
        return
    }
    if(height <= 0 || weigth <= 0){
        result.textContent = 'Height and weight must be positive numbers.'
        return  
    }
    else{
        let calculatedBmi =   (weigth/(height*height)*10000).toFixed(2)
        console.log(calculatedBmi);
        result.innerHTML = `<span> BMI is: ${calculatedBmi} </span>`
    }
    
})

 