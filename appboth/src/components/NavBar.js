import Brand from "./Brand";
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemsListContainer";

const NavBar = () => {
    return(
        <header>
            <div className="contenedorBrand">
               <Brand/>
            </div>

            <nav className="contenedorItemList">
               <ItemListContainer
               productos= "Productos"
               nosotros= "Nosotros"
               />
            </nav>

            <div className="contenedorCart">
                <CartWidget/>
            </div>
        </header>
    )
}

export default NavBar;