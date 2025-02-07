import './components.css';

function Button ({col, txt, callback = () => {}}) {

    return (
        <button className={`button back-${col}`} onClick={callback}> {txt} </button>
    );
}

export default Button;