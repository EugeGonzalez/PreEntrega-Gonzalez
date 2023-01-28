import Brand from "./Brand";
import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget";


const NavBar = () => {

    return(
        <header>
            
            <div className="contenedorBrand">
            <NavLink to="/">
              <Brand/>
            
            </NavLink>
            </div>

            <nav className="contenedorItemList">
               
            <ul>
                <li className="nav-item">
                   <NavLink to='/productos/productos'  className="nav-link active" aria-current="page" >Productos</NavLink >
                </li>
                <li className="nav-item">
                    <NavLink to='/productos/herramientas' className="nav-link active" aria-current="page" >Herramientas</NavLink >
                </li>
                <li className="nav-item">
                    <NavLink to='/productos/maquinas' className="nav-link active" aria-current="page" >Maquinas</NavLink >
                </li>
                <li className="nav-item">
                    <NavLink to='/' className="nav-link active" aria-current="page" >Todos los productos</NavLink >
                </li>
            </ul>
            
            </nav>


            <div className="contenedorCart">
                <CartWidget/>
            </div>
        </header>
    )
}

export default NavBar;