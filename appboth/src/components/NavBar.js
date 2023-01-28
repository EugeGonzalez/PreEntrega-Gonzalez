import Brand from "./Brand";
import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemsListContainer";

const NavBar = () => {

    const isNav = true
    return(
        <header>
            
            <div className="contenedorBrand">
            <NavLink to="/">
              <Brand/>
            
            </NavLink>
            </div>

           

            <nav className="contenedorItemList">
               
               <ItemListContainer isNav={isNav}
               productos= "Productos"
               herramientas= "Herramientas"
               maquinas= "Maquinas"

               />
            </nav>

            

            <div className="contenedorCart">
                <CartWidget/>
            </div>
        </header>
    )
}

export default NavBar;