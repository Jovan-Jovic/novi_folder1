let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse ( localStorage.getItem("myLeads") ) 

const tabBtn = document.getElementById("tab-btn")

if  ( leadsFromLocalStorage ) {
  myLeads = leadsFromLocalStorage
  render( myLeads)
}

// const tabs = [
//   {url:"http://www.linkedin.com/in/per-harald-borgen/"}
// ] // brisemo jer nam ne treba vise ova unapred odredjena..

tabBtn.addEventListener("click", function() {
  // Grab the URL of the current tab! (ovo smo ispod kopirali iz stack overflow-a:

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      // prebacili smo ove funkcije unutar, jer je potrebno za extension da bude aktivna stranica i da smo na trenutnoj stranici da bi je sacuvao.
      myLeads.push(tabs[0].url)
      localStorage.setItem("myLeads", JSON.stringify (myLeads) )
      render(myLeads)
    })

})

function render(leads) {
  let listItems = ""
  for (let i = 0; i < leads.length; i++){
    listItems += `
    <li>
    <a target='_blank' href='${leads[i]}'>  
    ${leads[i]}
    </a>
    </li>
    `
}
ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
  console.log("double click!")
  localStorage.clear()
  myLeads = []
  render(myLeads) 
})

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  inputEl.value = ""
   localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
  
  console.log ( localStorage.getItem("myLeads") )
})


// EVO KAKO JE BILO PRE
// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// // localStorage.clear()
// // 1. Store the delete button in a deleteBtn variable
// const deleteBtn = document.getElementById("delete-btn")
// const leadsFromLocalStorage = JSON.parse ( localStorage.getItem("myLeads") ) // promenili smo u const jer necemo da ponovo dodeljujemo i da menjamo dalje u kodu. 
// console.log(leadsFromLocalStorage ) 

// if  ( leadsFromLocalStorage ) {
//   myLeads = leadsFromLocalStorage
//   renderLeads()
// }

// // 2. Listen for double clicks on the delete button (google it)
// // 3. When clicked, clear localStorage, myLeads and the DOM

// deleteBtn.addEventListener("dblclick", function() {
//   console.log("double click!")
//   localStorage.clear()
//   myLeads = []
//   renderLeads() // da bi nam ucitao ponovo listItems da bi nam obrisao i sa stranice listu koju smo imali!
// })

// inputBtn.addEventListener("click", function() {
//   myLeads.push(inputEl.value)
//    inputEl.value = ""
//    localStorage.setItem("myLeads", JSON.stringify(myLeads))
//   renderLeads()
  
//   console.log ( localStorage.getItem("myLeads") )
// })

// function renderLeads() {
//   let listItems = ""
//   for (let i = 0; i < myLeads.length; i++){
//     listItems += `
//     <li>
//     <a target='_blank' href='${myLeads[i]}'>  
//     ${myLeads[i]}
//     </a>
//     </li>
//     `
// }
// ulEl.innerHTML = listItems
// }

