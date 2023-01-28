import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
const ItemListContainer = () => {
    const [productos,setProductos] = useState([])
    const {categoria}= useParams()
    
    useEffect(() => {
        const pedido = fetch('../productos.json')
        pedido
        .then((respuesta) => {
            const productos = respuesta.json()
            return productos

        })
        .then((productos) => {
            if(categoria){
                setProductos(productos.filter((prod)=> prod.categoria === categoria))
            }else{
                setProductos(productos)
            } 
        })
        .catch((error) => {
            console.log(error)
        })

    }, [categoria])

    

    
        
        return(
            
           <div>
            <ItemList productos={productos}/>
            
           </div>
        )
    
}

export default ItemListContainer;
