const taskInput = document.getElementById('input')
const addButton = document.getElementById('btn')
const box = document.querySelector('.box')


addButton.addEventListener('click',function(){
    if(taskInput.value == "" || taskInput.value == " "){
        validInput()
    }else{
        console.log(taskInput.value)
    newPara = document.createElement('p')
    newPara.className = 'newPara'
    newPara.textContent = taskInput.value
    newPara.classList.add('para')
    const button = document.createElement('button')
    button.id = 'remove'
    button.textContent = 'remove'
    button.classList.add('delete')
    newPara.appendChild(button)
    box.appendChild(newPara)
    taskInput.value = ""


    const removeButton = document.querySelectorAll('#remove');
    Array.from(removeButton).forEach((e) => {
        e.addEventListener('click',(e) => {
            newPara.remove()
        })
    })
}  
})
    
    // const removeButton = document.getElementById('remove')
    // removeButton.addEventListener('click',function(){
    //     newPara.remove()
    // })
    // }
// })

// removeButton.addEventListener('click',function(){
//     newPara.remove()
// })

// window.removeButton = document.querySelectorAll('.remove');
// Array.from(window.removeButton);
// for(let i=0;i<window.removeButton.length;i++){
//     window.removeButton.addEventListener('click',function(){
//         window.newPara.remove()
//     })
// }


function validInput(){
    const para = document.createElement('p')
    para.className = "errorPara"
    para.textContent = `Write some task!`
    box.appendChild(para)
    setTimeout(() => {
        para.remove()
    }, 3000);
}