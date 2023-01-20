 import { Link } from "react-router-dom"

const Item = ({ producto }) => {
    return (
        <article className="contenedorProducto card" key={producto.id}>
            <img className="imagenProducto" src={producto.img} alt={producto.img} />
            <p className="precioProducto">${producto.precio}</p>
            <h3 className="nombreProducto">{producto.nombre}</h3>
            
            <button className="btn btn-dark"type="button">Agregar carrito</button>
            {<Link to={"/item/"+producto.id}>ver mas</Link> }
        </article>
    )
}

export default Item;