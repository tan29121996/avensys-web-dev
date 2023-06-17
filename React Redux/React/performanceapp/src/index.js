import { render } from "react-dom";
import Launch from "./Launch";

function App() {
    return (
        <div>
            <Launch />
        </div>
    )
}

render(<App />, document.getElementById("root"))