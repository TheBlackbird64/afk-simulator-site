import './components.css';
import './styles/footer.css';

function Footer({col}) {

    return (
        <footer className={`flexbox-center-row border-${col} back-${col}`}>
            <p>© AFK Simulator. Tous droits réservés.</p>
            <a href="./test">Mentions légales</a>
        </footer>
    );
}


export default Footer;