import CardWidget from '../NavBar/CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div>
                <CardWidget>

                </CardWidget>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
            </div>
            <div>
                <button>Login</button>
            </div>
        </div>
    );

};

export default NavBar;