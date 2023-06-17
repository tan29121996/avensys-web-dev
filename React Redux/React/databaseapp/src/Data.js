import { useEffect, useState } from "react"
import { db } from "./firebase"

function Data() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [data, setData] = useState([])

    const save = () => {
        try {
            db.collection("data").add({
                "title": title,
                "description": description
            })
            setTitle("")
            setDescription("")
        }
        catch (e) {
            alert(e)
        }
    }

    useEffect(() => {
        try {
            db.collection("data").onSnapshot((snapshot) => {
                setData(snapshot.docs.map((i) => i.data()));
            })
        }
        catch (e) {
            alert(e)
        }
    }, [])

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", width: "30vw" }}>
                Enter title: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                Enter description: <textarea rows={10} cols={25} value={description} onChange={(e) => setDescription(e.target.value)}></textarea><br />
                <button onClick={save} class="btn btn-primary">Save</button><br />
                <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Title</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((i) => (
                            <tr key={i.title}>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{i.title}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{i.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Data