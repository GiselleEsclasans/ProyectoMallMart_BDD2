
import logo from '../img/logo2.png';
import { Link } from 'react-router-dom';

export default function Footer() {
    
    return (
        <div className="bg-rojoencendido"> 
            <Link onClick={() => {scroll(0, 0)}} to="/">
                <img className="py-4 px-2 "src={logo}></img>
            </Link>
            
        </div>
    );
}