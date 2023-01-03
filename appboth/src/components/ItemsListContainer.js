const ItemListContainer = (props) => {
    return (
            <ul>
                <li className="nav-item">
                   <a className="nav-link active" aria-current="page" href="#">{props.productos}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">{props.nosotros}</a>
                </li>
            </ul>
    )
}

export default ItemListContainer;


