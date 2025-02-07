import './components.css';
import Button from "./button.js";

function Navbar({col}) {
    
    return (
        <nav className={`flexbox-center-row border-${col}`}>
            <button className='nav-button-home'>
                <img src="./images/icon.png" alt="logo"/>
                
            </button>

            <Button col={col} txt="Tutoriel"/>
            <Button col={col} txt="Télécharger le jeu"/>
            <Button col={col} txt="Mises à jour à venir"/>
            <Button col={col} txt="Collaborateurs & autres projets"/>
            <Button col={col} txt="Contact"/>
        </nav>
    );
}

export default Navbar;