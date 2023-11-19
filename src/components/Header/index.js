import { Link } from 'react-router-dom';
import './style.css';
import logo from './logo-padaria.png'

function Header(){
    return(
        <header>
            <div class="interface">
                <div class="logo">
                    <Link to = '/'>
                        <img src={logo} alt="Logo da Padaria" width="100%"/>
                    </Link>
                </div>

                <nav class="menu-desktop">
                    <ul>
                        <li><Link to = '/'>Início</Link></li>
                        <li><Link to = '/cardapio'>Cardápio</Link></li>
                        <li><Link to = '/pedido'>Pedido</Link></li>
                        <li><Link to = '/galeria'>Galeria</Link></li>
                    </ul>
                </nav>

                <div class="btn-contato">
                    <Link to = '/contato'>
                        <button>Contato</button>
                    </Link>
                </div>

                <div class="btn-abrir-menu" id="btn-menu">
                    <i class="bi bi-list"></i>
                </div>

                <div class="menu-mobile" id="menu-mobile">
                    <div class="btn-fechar">
                        <i class="bi bi-x-lg"></i>
                    </div>

                    <nav>
                        <ul>
                            <li><Link to = '/'>Início</Link></li>
                            <li><Link to = '/cardapio'>Cardápio</Link></li>
                            <li><Link to = '/pedido'>Pedido</Link></li>
                            <li><Link to = '/galeria'>Galeria</Link></li>
                            <li><Link to = '/contato'>Contato</Link></li>
                        </ul>
                    </nav>

                </div>
                <div class="overlay-menu" id="overlay-menu"></div>
            </div>
        </header>      
    );
}

export default Header;
