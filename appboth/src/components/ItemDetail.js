const ItemDetail = ({producto}) => {
    return (
        <div>
            <h2>{producto.nombre}</h2>
            <img className="imagenDesc" src={producto.img} alt={producto.img} />
            <p> $ {producto.precio}</p>
            <p>Descripcion</p>
            <p> {producto.descripcion}</p>
        </div>
    )
}

export default ItemDetail;