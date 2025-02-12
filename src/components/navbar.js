import './components.css';
import './styles/navbar.css';
import Button from "./button.js";

function Navbar({col}) {
    
    return (
        <nav className={`flexbox-center-row border-${col}`}>
            <button className='nav-button-home'>
                <img src="./images/icon.png" alt="logo"/>
                
            </button>

            <Button col={col} txt="Tutoriel" icon="./images/icons/tutorial.svg" callback={() => {alert("test");}}/>
            <Button col={col} txt="Télécharger le jeu" icon="./images/icons/download.svg"/>
            <Button col={col} txt="Mises à jour à venir" icon="./images/icons/updates.svg"/>
            <Button col={col} txt="Collaborateurs & autres projets" icon="./images/icons/collaborators.svg"/>
            <Button col={col} txt="Contact" icon="./images/icons/contacts.svg"/>
        </nav>
    );
}

export default Navbar;