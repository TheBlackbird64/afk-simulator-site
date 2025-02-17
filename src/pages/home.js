import './home.css'

import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import Button from "../components/button.js";

import { useNavigate } from 'react-router-dom';

function Home({col}) {

	const navigate = useNavigate();

    return (
        <>
			<Navbar col={col}/>

			<main className="home-main flexbox-center-col">
				<img src="./images/Titre.png" alt="Titre du jeu"/>
				<span className={`txt-accueil txt-${col}`}>"Le seul jeu où ne rien faire est un art."</span>
				<Button col={col} txt="Jouez maintenant !" icon="./images/icons/play.svg" callback={() => {navigate("/download");}}/>
			</main>

			<Footer col={col} />
		</>
    );
}

export default Home;