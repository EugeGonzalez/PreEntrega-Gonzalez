import ItemListContainer from "./ItemsListContainer";
import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";


const Main = () => {
    return(
        <main>
        <Routes>
           <Route path='/' element={<ItemListContainer/>} />
           <Route path='/item/:id' element={<ItemDetailContainer/>} />
        </Routes> 
        </main>
    )
}


export default Main;