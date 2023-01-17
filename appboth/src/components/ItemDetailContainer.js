import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const params = useParams()
    const [producto,setProducto] = useState({})
    
    useEffect(() => {
        const pedido = fetch('../productos.json')

        pedido
        .then((respuesta) => {
            const productos = respuesta.json()
            return productos

        })
        .then((productos) => {
            
            setProducto(productos.find((item)=> item.id === parseInt(params.id)))
            
        })
        .catch((error) => {
            console.log(error)
        })

    }, [])
    
    return (
        <>
        <ItemDetail producto={producto}/>
        </>
    )
}

export default ItemDetailContainer;