import { useMemo, useState } from 'react'

function Launch() {

    const [number, setNumber] = useState(0)
    const [name, setName] = useState("")

    const cube = (num) => {
        let i = 0
        let anotherNum
        while (i < 100000) {
            anotherNum = num * num * num
            i++
        }
        return anotherNum
    }

    const increase = () => {
        setNumber(number + 1)
    }

    const decrease = () => {
        setNumber(number - 1)
    }

    const getName = (e) => {
        setName(e.target.value)
    }

    let result = useMemo(() => {
        return cube(number)
    }, [number])

    return (
        <div>
            <h1>The Number is: {number} and its cube is: {result}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>

            <h1>The Name is: {name} </h1>
            Enter Name: <input type="text" onChange={getName}/>
        </div>
    )
}

export default Launch