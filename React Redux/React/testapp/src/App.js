import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div>
      <h3>Testing</h3>
      <h1 data-testid="count">{count}</h1>
      <button name="Increase" onClick={() => setCount(count + 1)}>
        Increase
      </button>
      {data.map((i) => {
        return <li key={i.id}>{i.title}</li>;
      })}
    </div>
  );
}

export default App;


