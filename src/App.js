import './App.css';
import './styles_pages/home.css';

import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
import Button from "./components/button.js";

function App() {

	// Choix de la couleur du site
	const cleStorageCol = "col";

	const colors = ["red", "green", "blue"];
	const colStocke = localStorage.getItem(cleStorageCol);
	let colSite = colStocke;
	console.log(colStocke);
	
	while (colSite === colStocke) {
		colSite = colors[Math.floor(Math.random() * colors.length)];
	}
    
	localStorage.setItem(cleStorageCol, colSite);

	// App
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

export default App;
