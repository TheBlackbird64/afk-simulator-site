import './styles/navbar.css';

import Button from "./button.js";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Navbar({col}) {
    
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <nav className={`flexbox-center-row border-${col} ${location.pathname === "/" ? "home-nav" : ""}`}> {/* Si la page est la page d'accueil on applique l'animation sur la classe home-nav */}
            <button className={`nav-button-home button-anim-${col}`} onClick={() => {navigate("/");}}>
                <img src="./images/icon.png" alt="logo"/>
                
            </button>

            <Button col={col} txt="Tutoriel" icon="./images/icons/tutorial.svg" callback={() => {navigate("/tutorial");}}/>
            <Button col={col} txt="Télécharger le jeu" icon="./images/icons/download.svg" callback={() => {navigate("/download");}}/>
            <Button col={col} txt="Mises à jour à venir" icon="./images/icons/updates.svg" callback={() => {navigate("/updates");}}/>
            <Button col={col} txt="Collaborateurs & autres projets" icon="./images/icons/collaborators.svg" callback={() => {navigate("/collabs");}}/>
            <Button col={col} txt="Contact" icon="./images/icons/contacts.svg" callback={() => {navigate("/contact");}}/>
        </nav>
    );
}

export default Navbar;