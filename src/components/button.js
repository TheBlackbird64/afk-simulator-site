import './components.css';

function Button ({col, txt}) {
    
    function btListenerClic() {
        
    }

    return (
        <button className={`button`} onClick={btListenerClic}> {txt} </button>
    );
}

export default Button;