import './updates.css'

import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";

function Updates({col}) {

    return (
        <>
			<Navbar col={col}/>

			<main className={`main-page border-${col}`}>
				<h1>Site en cours de construction...</h1>

				<p>Cette partie sera bientot accessible !</p>
			</main>

			<Footer col={col} />
		</>
    );
}

export default Updates;