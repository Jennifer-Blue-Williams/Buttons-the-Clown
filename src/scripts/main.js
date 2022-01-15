import { ClownParty } from "./ClownParty.js"
import { fetchRequests } from "./dataAccess.js"




const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = ClownParty();
        }
    )
}
// this was just render
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)
render()