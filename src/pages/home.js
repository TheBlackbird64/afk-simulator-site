

import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import Button from "../components/button.js";

function Home() {
    return (
        <div className="App">
			<Navbar col={colSite}/>

			<main className="flexbox-center-col">
				<img src="./images/Titre.png" alt="Titre du jeu"/>
				<span className={`txt-accueil txt-${colSite}`}>"Le seul jeu où ne rien faire est un art."</span>
				<Button col={colSite} txt="Jouez maintenant !" icon="./images/icons/play.svg"/>
			</main>

			<Footer col={colSite} />
		</div>
    );
}

export default Home;