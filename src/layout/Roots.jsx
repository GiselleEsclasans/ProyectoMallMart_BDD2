import { Outlet } from "react-router-dom";
import NavBar from '../components/Navbar.jsx';
import NavBar2 from '../components/Navbarlogout.jsx';
import Footer from "../components/Footer.jsx";

export default function Root() {
    return (
        <div>
            <NavBar />
            <NavBar2 />
            <Outlet />
            <Footer />
        </div>
    );
}