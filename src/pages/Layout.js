import { Outlet, Link } from "react-router-dom"; 
import './App.css';

const Layout = () => {
    return (
        <>
            <nav className="navbar">
                <ul>
                    <input className="searchbar" type="text" placeholder="Search users..."></input>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/friends">Friends</Link></li>
                    <li><Link to="/">status.NU</Link></li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;


  