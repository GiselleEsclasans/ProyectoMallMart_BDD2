import { Outlet } from "react-router-dom";
import NavBar from '../components/Navbar.jsx';
import NavBar2 from '../components/Navbarlogout.jsx';
import Footer from "../components/Footer.jsx";
import { useAuth } from '../context/AuthContext.jsx'; 

export default function Root() {
    const { user } = useAuth();

    return (
        <div>
            {user ? <NavBar /> : <NavBar2 />} 
            <Outlet />
            <Footer />
        </div>
    );
}