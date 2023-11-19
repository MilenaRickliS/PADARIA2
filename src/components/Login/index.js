import './style.css';
import logo from './logo-padaria.png'


function Login(){
    return(
        <section class="formulario">
            <div class="interface">
                <h2 class="titulo">ENTRE NA CONTA <span>OU INSCREVA-SE</span></h2>

                <div class="flex">
                    <main class="container-login">
                        <img src={logo}  class="logo" alt="logo padaria" width="100%"/>
                        <form action="">
                            <div class="input-field">
                                <input type="text" name="username" id="username"
                                    placeholder="Insira seu login"/>
                                <div class="underline"></div>
                            </div>
                            <div class="input-field">
                                <input type="password" name="password" id="password"
                                    placeholder="Insira sua senha"/>
                                <div class="underline"></div>
                            </div>
                
                            <input id="login" type="submit" value="Entrar"/>
                        </form>
                
                        <div class="footer-login">
                            <span>Ou Conecte com o Google ou Facebook</span>
                            <div class="social-fields">
                                <div class="social-field google">
                                    <a href="#">
                                        <i class="bi bi-google"></i>
                                        Sign in with Google
                                    </a>
                                </div>
                                <div class="social-field facebook">
                                    <a href="#">
                                        <i class="bi bi-facebook"></i>
                                        Sign in with Facebook
                                    </a>
                                </div>
                            </div>
                            <br/>
                            <span>Não possui conta? <a href="#">Crie uma conta</a></span>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
}

export default Login;