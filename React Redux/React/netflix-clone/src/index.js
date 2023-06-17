import { render } from "react-dom"
import Navbar from "./Navbar"
import Home from "./Home"

function App() {
    return (
            <div>
                <Navbar />
            </div>
    )
}

render(<App />, document.getElementById("root"))