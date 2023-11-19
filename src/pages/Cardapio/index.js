import './style.css';
import cesto from './cesto-pão.png'

function Cardapio(){
    return(
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
    );
}

export default Cardapio;