import Item from "./Item"

const ItemList = ({productos}) => {
    return (
        <div className="divPro">
            {productos.map((producto) => {
                return (
                    <Item producto={producto} key={producto.id}/>
                )
            })}
        </div>
    )
}

export default ItemList;