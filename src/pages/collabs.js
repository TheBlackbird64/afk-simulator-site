import './collabs.css'

import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";

function Collabs({col}) {

    return (
        <>
			<Navbar col={col}/>

			<main className="flexbox-center-col">
				
			</main>

			<Footer col={col} />
		</>
    );
}

export default Collabs;