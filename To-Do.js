const userINput = document.getElementById('user-input')
const button = document.getElementById('button')
const list = document.getElementById('list')
const clearAllButton = document.getElementById('clear-all')


function addToList(){
    if(list.childElementCount < 20){
    const li = document.createElement('li')
    const checkbox = document.createElement('input')

    checkbox.type = 'checkbox'
    checkbox.id = "box"
   
    if(userINput.value !== ""){
    li.textContent = userINput.value
    li.append(checkbox)
    list.appendChild(li)

    li.addEventListener('click',function(){
        if(li.style.textDecoration === "line-through"){
            li.style.textDecoration = "none"
        } else {
            li.style.textDecoration = "line-through"
        }
    })
    }
    

    checkbox.addEventListener('click',function(){
        list.removeChild(li)
    })



    userINput.value = ""
}
}

button.addEventListener('click', addToList);

button.addEventListener('click',function(){
    buttonutton.classList.add('clicked')

    setTimeout(function(){
        button.classList.remove('clicked')
    }, 1000)
})

userINput.addEventListener('keydown', function(event){
    if(event.key === 'Enter') {
        addToList()
    }

})

clearAllButton.addEventListener('click', function(){
    const allLi = document.querySelectorAll('li')
    allLi.forEach(function(li){
    list.removeChild(li)
    })
})







