import { useSelector } from "react-redux";

function Third() {
  const output = useSelector((data) => {
    return data.todoReducer.tasks
  })

  return (
    <div>
      {output.map((i) => {
        return <h3>{i}</h3>
      })}
    </div>
  )
}

export default Third