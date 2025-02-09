import './components.css';

function Button ({col, txt, icon="", callback = () => {}}) {

    // Si le bouton a une icone spécifié dans icon on crée l'image à coté

    let iconButton = <></>;

    if (icon !== "") {
        iconButton = (
            <img src={icon} alt={txt} />
        );
    }

    return (
        <>
            <button className={`button flexbox-center-row back-${col}`} onClick={callback}> 
                {iconButton}
                <div></div>
                <p>{txt}</p>
            </button>
        </>
    );
}

export default Button;