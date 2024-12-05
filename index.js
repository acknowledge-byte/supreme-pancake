/*input = document.querySelector('#username_in')
button = document.querySelector("#send")
p = document.querySelector('#username_val')

input.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        if(input.value.length > 0){
            p.textContent = `Hi, ${input.value}!`
            input.value = ''
        }
    }
})*/

input = document.querySelector('#username_in')
button = document.querySelector("#send")
p = document.querySelector('#username_val')

input.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        if(input.value.length > 0){
            p.textContent = `Hi, ${input.value}!`
            input.value = ''
            setTimeout(()=>{
                p.textContent = 'Serás redireccionado a un login'
            }, 3000)
            window.location.href = ''
        }
    }
})