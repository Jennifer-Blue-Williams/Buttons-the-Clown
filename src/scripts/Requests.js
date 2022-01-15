import { getRequests } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"


export const Requests = () => {
    const requestsArray = getRequests()
    const sortedRequests = requestsArray.sort((a,b) => b.userDate - a.userDate)
    const requestHtml = (request) => {
        // build entire line of list item
        
        return `
        <li> 
        ${request.parentName} is booking a clown for his child, ${request.childName} with ${request.numOfChildren} children on ${request.userDate} for ${request.duration} hours.

        <button class="request__delete"
                id="request--${request.id}">
            Delete
        </button>
        </li>
        `
    }

    let html = `
        <ul>
            ${
                sortedRequests.map((request) => requestHtml(request))}
    </ul>`
    
    return html
}
   
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})