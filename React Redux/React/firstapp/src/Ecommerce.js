import get from "axios";
import { useEffect, useState } from "react";

function Ecommerce() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        get("https://fakestoreapi.com/products")
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err))
    }, []);

    return (
        <div>
          <h1>Ecommerce</h1>
          {products.map((i) => (
            <div key={i.id}>
              <h2>{i.title}</h2>
              <img src={i.image} alt={i.title} />
            </div>
          ))}
        </div>
    );
}

export default Ecommerce