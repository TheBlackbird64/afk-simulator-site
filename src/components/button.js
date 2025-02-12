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
            <button className={`button back-${col}`} onClick={callback}> 
                {iconButton}
                <div className='flexbox-center-col'>
                    <p>{txt}</p>
                </div>
                
            </button>
        </>
    );
}

export default Button;