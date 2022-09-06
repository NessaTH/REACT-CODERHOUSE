import './NavBar.css';

const NavBar = ({children}) => {
    return (
        <nav className="navBar">
            <div className="navBarCont">
                {children}
                <a className="navBrand">GESCHENKBOX</a>
                <ul className="navMenu">
                    <li><a className="navLink" href="#">Tú y Nosotros</a></li>
                    <li><a className="navLink" href="#">Armar Caja</a></li>
                    <li><a className="navLink" href="#">Pedidos Especiales</a></li>
                    <li><a className="navLink" href="#">Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
