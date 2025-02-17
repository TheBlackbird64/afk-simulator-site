import './tutorial.css'

import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";


function Tutorial({col}) {

    return (
        <>
			<Navbar col={col}/>

			<main className={`tutorial-main flexbox-center-col border-${col}`}>
				
			</main>

			<Footer col={col} />
		</>
    );
}

export default Tutorial;