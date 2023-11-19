import './style.css';
import cesto from './cesto-pão.png'

function Pedido(){
    return(
        <section className="topo-do-site">
            <div className="interface">
                <div className="flex">
                    <div className="txt-topo-site">
                        <h1>PEDIDO<span></span></h1>
                        <p>Não perca tempo, faça já o seu pedido.
                           Insira seu login ou crie uma conta, e então adicione produtos ao carrinho para receber o seu pedido em casa.</p>

                    </div>

                    <div className="img-topo-site">
                        <img src={cesto} alt="cesto-de-pão"/>
                    </div>
                </div>
            </div>
        </section>       
    );
}

export default Pedido;