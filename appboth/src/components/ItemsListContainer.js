import { useEffect, useState } from "react"
import ItemList from "./ItemList"

const ItemListContainer = (props) => {
    const {isNav} = props
    const [productos,setProductos] = useState([])
    
    useEffect(() => {
        const pedido = fetch('../productos.json')

        pedido
        .then((respuesta) => {
            const productos = respuesta.json()
            return productos

        })
        .then((productos) => {
            
            setProductos(productos)
            
        })
        .catch((error) => {
            console.log(error)
        })

    }, [])

    

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
            <ItemList productos={productos}/>
            
           </div>
        )
    }
}

export default ItemListContainer;

