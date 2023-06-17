function Contact(data) {
    return (
        <div class="card" style={{width: "18rem"}}>
            <img width = "200px" height = "300px" src={data.image} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h3 class="card-title">{data.name}</h3>
                    <p class="card-text">{data.message}</p>
                    <a href="#" class="btn btn-primary">Start Chat</a>
                </div>
        </div>
    )
}

export default Contact