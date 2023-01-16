
// import { Link } from "react-router-dom"

const Item = ({ producto }) => {
    return (
        <article key={producto.id}>
            <h3>{producto.nombre}</h3>
            <img src={`../images/peine-jaguar.jpg${producto.img}`} alt={producto.img} />
            <p>{producto.precio}</p>
            {/* <Link to={"/item/"+producto.id}>ver mas</Link> */}
        </article>
    )
}

export default Item;