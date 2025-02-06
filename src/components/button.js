import './components.css';

function Button ({col, txt}) {
    
    function btListenerClic() {
        
    }

    return (
        <button className={`${col} button`} onclick={btListenerClic}> {txt} </button>
    );
}

export default Button;