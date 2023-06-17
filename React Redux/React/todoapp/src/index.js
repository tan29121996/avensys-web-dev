import { render } from "react-dom";
import { Provider } from "react-redux";
import { todoStore } from "./redux";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Ecommerce from "./Ecommerce";
import { productsStore } from "./reduxstore";

function App() {
    return (
        <div style={{ display: "flex" }}>
            <Ecommerce />
            <Second />
            <Second />
            <Second />
        </div>
    )
}

render(<Provider store={productsStore}><App /></Provider>, document.getElementById("root"))