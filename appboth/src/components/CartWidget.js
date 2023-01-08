import cart from "../img/cart.svg";

const CartWidget = () => {
    return (
        <div className="contenedor">
         <img className="img_carrito"src={cart} alt="carrito de compra"></img>

         <span className="contadorCarrito">
            0
         </span>
        </div>
    )
}





export default CartWidget;