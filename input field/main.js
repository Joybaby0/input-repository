let myLeads = []
let inputEl = document.getElementById("input-el")
let inputBtn = document.querySelector(".input-btn")
let tabBtn = document.querySelector(".tabs-btn")
let ulEl = document.querySelector(".ul-el")
let deleteBtn = document.querySelector(".delete-btn")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    saveInput()
}

const tabs = [
    { school : "Uniuyo"}
]

tabBtn.addEventListener("click", function(){
    myLeads.push(tabs[0].school)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    saveInput()
})

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    saveInput()
})

function saveInput(){
    let listItems = ""
    for(let i = 0; i<myLeads.length; i++){
    listItems+= 
    `<li><a href='${myLeads[i]}'>${myLeads[i]}</a></li>`
    }

    ulEl.innerHTML =listItems
}

deleteBtn.addEventListener("click", function(){
    myLeads = []
    localStorage.clear("myLeads")
    saveInput()
})