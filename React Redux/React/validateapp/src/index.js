import {render} from "react-dom"
import RegistrationForm from "./RegistrationForm"

function App() {
    return (
        <div>
            <RegistrationForm />
        </div>
    )
}

render(<App />, document.getElementById("root"))