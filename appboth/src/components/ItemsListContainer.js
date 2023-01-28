import { useEffect, useState } from "react"
import ItemList from "./ItemList"

const ItemListContainer = () => {
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

    

    
        
        return(
            
           <div>
            <ItemList productos={productos}/>
            
           </div>
        )
    
}

export default ItemListContainer;
