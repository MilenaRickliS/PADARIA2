import './style.css';
import cesto from './cesto-pão.png'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Especialidades from '../../components/Especialidades';

function Cardapio(){
    return(
        <div>
            <section className="topo-do-site">
            <div className="interface">
                <div className="flex">
                    <div className="txt-topo-site">
                        <h1>CARDÁPIO<span></span></h1>
                        <p>Pães, Salgados, Lanches e Doces</p>

                    </div>

                    <div className="img-topo-site">
                        <img src={cesto} alt="cesto-de-pão"/>
                    </div>
                </div>
            </div>
            </section> 
            <Especialidades/>
            <section class="portfolio">
            <div class="interface">
                <h2 class="titulo">NOSSAS <span>PROMOÇÕES</span></h2>
                <div class="flex">
                    <div class="img-port1">
                        <div class="overlay">Desconto de 30%</div>
                    </div>
                    <div class="img-port2">
                        <div class="overlay">Compre 1 leve 2</div>
                    </div>
                    <div class="img-port3">
                        <div class="overlay">Tudo com 50%</div>
                    </div>
                </div>
            </div>
        </section>
        </div>      
    );
}

export default Cardapio;