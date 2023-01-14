const ItemListContainer = (props) => {
    const {isNav} = props

    if(isNav){
    return (

            <ul>
                <li className="nav-item">
                   <a className="nav-link active" aria-current="page" href="#">{props.productos}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">{props.herramientas}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">{props.maquinas}</a>
                </li>
            </ul>
    )}

    else{
        return(
            <div>
                <p>hola main</p>
            </div>
        )
    }
}

export default ItemListContainer;


