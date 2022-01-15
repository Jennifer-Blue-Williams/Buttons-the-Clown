import { Requests } from "./Requests.js"
import { sendRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const parentName = document.querySelector("input[name='parentName']").value
        const childName = document.querySelector("input[name='childName']").value
        const numOfChildren = document.querySelector("input[name='numOfChildren']").value
        const address = document.querySelector("input[name='address']").value
        const length = document.querySelector("input[name='length']").value
        const userDate = document.querySelector("input[name='serviceDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: parentName,
            childName: childName,
            numOfChildren: numOfChildren,
            length: length,
            address: address,
            userDate: userDate,

        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})

export const ClownParty = () => {
    return `
    <div class="flexUse">
        
    <h1>Maude and Merle's Sink Repair</h1>
        <section class="serviceForm">
            ${ServiceForm()}
        </section>
        
        <section class="serviceRequests">
        <h2>Service Requests</h2>
        ${Requests()}
        </section>
        
        </div>
        `
}


export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent's Name</label><br>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
        <label class="label" for="childName">Child's Name</label><br>
        <input type="text" name="childName" class="input" />
    </div>
        <div class="field">
            <label class="label" for="numOfChildren">Number of Children</label><br>
            <input type="text" name="numOfChildren" class="input" />
        </div>
        <div class="field">
            <label class="label" for="address">Address</label><br>
            <input type="text" name="address" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Date needed</label><br>
            <input type="date" name="serviceDate" class="input" />
        </div>
        <div class="field">
        <label class="label" for="length">Hours Needed</label><br>
        <input type="number" name="length" class="input" />
    </div>
        <button class="button" id="submitRequest">Submit Party Request</button>
    `

    return html
}