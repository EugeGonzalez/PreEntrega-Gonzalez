import ItemListContainer from "./ItemsListContainer";
import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
import Carrusel from "./Carrusel";


const Main = () => {
    return(
        <main>
            <Carrusel/>
        <Routes>
           <Route path='/' element={<ItemListContainer/>} />
           <Route path='/item/:id' element={<ItemDetailContainer/>} />
           <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
        </Routes> 
        </main>
    )
}


export default Main;