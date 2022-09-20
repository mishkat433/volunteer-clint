import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import navLogo from "../../logos/Group 1329.png";
import "./navbar.css"

const Navbar = () => {
    const [loginUser, setLoginUser] = useContext(UserContext)
    return (
        <div>
            <nav className="navbar navbar-expand-lg h6 pt-4  mr-auto">
                <img src={navLogo} alt="" className="logo" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link to="/" className="nav-link mr-5 hover">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-5 hover" href="/">Donation</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link mr-5 hover">Events</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link mr-5 hover" href="#">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin" className="nav-link mr-5 hover">Admin</Link>
                        </li>
                        {
                            loginUser.name && setLoginUser ? <li className="nav-item">
                                <Link to="/author" className="nav-link mr-5 hover">{loginUser.name}</Link>
                            </li> : <li className="nav-item">
                                <Link to="/login" className="nav-link mr-5 hover">Login</Link>
                            </li>
                        }
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;