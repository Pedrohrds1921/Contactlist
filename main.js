const nameInput= document.querySelector("#name")
const telInput= document.querySelector("#tel")
const btnAddNewcontact= document.querySelector("button")
const form= document.querySelector("form")
const contactList=document.querySelector("tbody")
let newrows=""
const msgerror=document.querySelector(".msgerror")
const namesList=[]
const telList=[]

telInput.addEventListener("input",e=>{
    console.log(e.target)
    e.target.value=telInput.value.replace(/^(\d{2})(\d)/, '($1) $2')
    e.target.value=telInput.value.replace(/(\d{5})(\d)/, '$1-$2')
})//mask the phone




function addNewContact(){
    const nameContact=String(nameInput.value).toLowerCase()
    console.log(nameContact)
    if(namesList.includes(nameContact)){
        msgerror.classList.add("open")
        setTimeout(()=>msgerror.classList.remove("open"),5000)
    }else{
            let newContact= ` <tr>
            <td class="name"><svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14.5" cy="14.5" r="13.5" fill="#3A608C" stroke="white" stroke-width="2"/>
                <path d="M19.7267 20.6667C19.7267 18.0867 17.16 16 14 16C10.84 16 8.27333 18.0867 8.27333 20.6667M14 14C14.8841 14 15.7319 13.6488 16.357 13.0237C16.9821 12.3986 17.3333 11.5507 17.3333 10.6667C17.3333 9.78261 16.9821 8.93477 16.357 8.30965C15.7319 7.68453 14.8841 7.33334 14 7.33334C13.1159 7.33334 12.2681 7.68453 11.643 8.30965C11.0179 8.93477 10.6667 9.78261 10.6667 10.6667C10.6667 11.5507 11.0179 12.3986 11.643 13.0237C12.2681 13.6488 13.1159 14 14 14V14Z" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                ${nameInput.value}</td>
            <td> ${telInput.value}</td>
            </tr>`;
            newrows+=newContact
            contactList.innerHTML=newrows
            namesList.push(nameInput.value)
            telList.push(telInput.value)
        }
        nameInput.value=""
        telInput.value=""
}

form.addEventListener("submit",function(e){
    e.preventDefault()
    addNewContact()

})




