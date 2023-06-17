import { useState } from "react";

function Todo() {
    const [data, setData] = useState(["Eating", "Playing", "Dancing"]);
    const [task, setTask] = useState("")

    const collectData = (event) => {
        setTask(event.target.value)
    }

    const clicked = () => {
        setData([...data, task]);
    }

    return (
        <div>
            Enter Task: <input type="text" onChange={collectData}/>
            <button onClick={clicked}>Submit</button>


            {data.map((i) => (
                <li>{i}</li>
            ))}

        </div>
    )
}

export default Todo