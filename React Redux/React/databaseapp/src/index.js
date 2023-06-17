import {render} from "react-dom"
import Data from "./Data"

function App() {
    return (
        <div>
            <Data />
        </div>
    )
}

render(<App />, document.getElementById("root"))