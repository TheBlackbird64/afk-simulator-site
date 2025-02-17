import './components.css'
import './styles/footer.css';
import { useLocation } from 'react-router-dom';

function Footer({col}) {

    const location = useLocation();

    return (
        <footer className={`flexbox-center-row border-${col} back-${col} ${location.pathname === "/" ? "home-footer" : ""}`}>
            <p>© AFK Simulator. Tous droits réservés.</p>
            <a href="./test">Mentions légales</a>
        </footer>
    );
}


export default Footer;