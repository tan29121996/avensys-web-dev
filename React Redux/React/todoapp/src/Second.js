import { useSelector } from "react-redux";

function Second() {
    const products = useSelector((data) => {
        return data.productsReducer.products
    })

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

export default Second