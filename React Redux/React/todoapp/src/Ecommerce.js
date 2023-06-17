import get from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from './reduxstore';

function Ecommerce() {
    const ud = useDispatch()
    const products = useSelector((data) => {
        return data.productsReducer.products
    })

    useEffect(() => {
        get("https://fakestoreapi.com/products")
            .then((res) => {
                console.log(res.data);
                ud(setProducts(res.data));
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            {products.map((i) => (
                <div key={i.id} class="card" style={{ padding: "20px"}}>
                    <img class="card-img-top" src={i.image} />
                    <div class="card-body">
                        <h3 class="card-text">{i.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Ecommerce