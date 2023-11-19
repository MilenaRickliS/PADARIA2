import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header'
import Topodosite from './components/Topodosite'

import Inicio from './pages/Inicio'
import Cardapio from './pages/Cardapio'
import Pedido from './pages/Pedido'
import Galeria from './pages/Galeria'
import Contato from './pages/Contato'


function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Topodosite/>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/cardapio" element={<Cardapio/>}/>
                <Route path="/pedido" element={<Pedido/>}/>
                <Route path="/galeria" element={<Galeria/>}/>
                <Route path="/contato" element={<Contato/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;