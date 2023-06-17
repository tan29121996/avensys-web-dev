import { render } from "react-dom";
import MyChart from "./MyChart";

function App() {
    return (
        <div>
            <MyChart />
        </div>
    )
}

render(<App />, document.getElementById("root"))