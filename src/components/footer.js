import './components.css';
import Button from './button.js';

function Footer({col}) {

    return (
        <footer className={`flexbox-center-raw ${col}`}>
            <Button col={col} txt=""/>

        </footer>
    );
}


export default Footer;