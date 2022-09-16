import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({children}) => {
    return (
        <nav className="navBar">
            <div className="navBarCont">
                {children}
                <Link className="navBrand" to={"/"}>GESCHENKBOX</Link>
                <ul className="navMenu">
                    <li>
                        <NavLink className="navLink" to={"/category/Electrónica"}>
                            Electrónica
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="navLink" to={"/category/Cosmética"}>
                            Cosmética
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="navLink" to={"/category/Experiencias"}>
                            Experiencias
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="navLink" to={"/category/Miscelánea"}>
                            Miscelánea
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="navLink" to={"/contact"}>
                            Contacto
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
