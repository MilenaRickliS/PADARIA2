import { Link } from 'react-router-dom';
import './style.css';
import logo from './logo-padaria.png'

function Header(){
    return(
        <header>
            <div className="interface">
                <div className="logo">
                    <Link to = '/'>
                        <img src={logo} alt="Logo da Padaria" width="100%"/>
                    </Link>
                </div>

                <nav className="menu-desktop">
                    <ul>
                        <li><Link to = '/'>Início</Link></li>
                        <li><Link to = '/cardapio'>Cardápio</Link></li>
                        <li><Link to = '/pedido'>Pedido</Link></li>
                        <li><Link to = '/galeria'>Galeria</Link></li>
                    </ul>
                </nav>

                <div className="btn-contato">
                    <Link to = '/contato'>
                        <button>Contato</button>
                    </Link>
                </div>

                <div className="btn-abrir-menu" id="btn-menu">
                    <i className="bi bi-list"></i>
                </div>

                <div className="menu-mobile" id="menu-mobile">
                    <div className="btn-fechar">
                        <i className="bi bi-x-lg"></i>
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
                <div className="overlay-menu" id="overlay-menu"></div>
            </div>
        </header>      
    );
}

export default Header;
