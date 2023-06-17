import { useState } from "react";
import { add } from "./redux";
import { useDispatch } from "react-redux";

function First() {
    const [allTasks, setAllTasks] = useState([])
    const [task, setTask] = useState()

    const ud = useDispatch()

    const collectData = (e) => {
        setTask(e.target.value)
    }

    const sendData = () => {
        ud(add(task))
    }

    return (
        <div>
            Enter Task: <input type="text" onChange={collectData} />
            <button onClick={sendData}>Submit</button>
            {allTasks.map((i) => {
                return <li>{i}</li>
            })}
        </div>
    )
}

export default First