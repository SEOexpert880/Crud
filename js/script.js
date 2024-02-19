let input =document.querySelector(".input")
let add =document.querySelector(".add")
let list =document.querySelector(".list")
let updt =document.querySelector(".updt")
let data = [];
let id ;

add.addEventListener("click",()=>{
    if(input.value){
     data.push(input.value)
    addtodo()
    input.value = ""
    }
})
updt.addEventListener("click",()=>{
    data [id] = input.value
    addtodo()
    input.value = ""
})

function addtodo(){
    list.innerHTML=""
    data.map((item)=>{
        list.innerHTML += `<li>${item} <button class="delete">Delete</button> <button class="edit">Edit</button> </li>`
    })
    let deletesingle = document.querySelectorAll(".delete")
    let edit = document.querySelectorAll(".edit")
    let deleteArr = Array.from(deletesingle)
    let editsingle = Array.from(edit)
    
    deleteArr.map((itemd, index)=>{
        itemd.addEventListener("click",()=>{
            data.splice(index,1)
            addtodo()
        })
    })

    editsingle.map((iteme,index)=>{
        iteme.addEventListener("click",()=>{
            input.value = data [index]
            addtodo()
            id = index
        })
    })



}
