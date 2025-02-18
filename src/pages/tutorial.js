import './tutorial.css'

import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";


function TitreSection ({col, txt}) {

	return (
		<>
			<h2 className={`tutorial-h2`}>{txt}</h2>
			<hr className={`tutorial-line line-${col}`}></hr>
		</>
	);
}

function Tutorial({col}) {

    return (
        <div className="tutorial-div">
			<Navbar col={col}/>

			<main className={`tutorial-main border-${col}`}>
				<h1>Présentation et tutoriel</h1>

				<TitreSection col={col} txt="Qu'est-ce que AFK Simulator ?"/>
				<p>AFK Simulator est un jeu multijoueur qui se déroule en parties courtes et intenses. </p>
				<p>Le premier joueur qui parvient à rester immobile pendant 1 minute remporte la partie. Mais attention, les autres joueurs feront tout pour vous en empêcher !</p>
				

				<TitreSection col={col} txt="Gameplay"/>
				<p>Vous incarnez un carré noir qui se déplace sur une carte restreinte contenant des murs et des zones de couleurs générés aléatoirement à chaque parties.</p>

				{/* Insérer 1 gifs : 1/ déplacement  */}

				<p>Le gameplay se déroule en plusieurs parties: <br/><br/></p>
				<p><span>- Attaquer et se défendre:   </span><br/><br/>  Chaque joueur peut tirer des projectiles pour déplacer et donc faire bouger ses adversaires, ce qui remet à 0 leur temps sans bouger. 
					Les joueurs ont également une barre de vie, et quand quelqu'un pert, il réapparaît au bout de quelques secondes.<br/>Les projectiles sont en quantité limitées : 
					il faut ramasser des recharges sur la carte.</p>
				
				{/* Insérer 2 gifs : 1/ Attaque deplacement de l'adversaire 2/ Ramasser des projectiles (ou juste l'icone des projectiles)*/}

				<p><span>- Se camoufler pour survivre: </span><br/><br/> 
				Des items de couleur apparaissent aléatoirement sur la carte. En les ramassant, votre carré change de couleur en ajoutant du rouge, du vert ou du bleu à votre apparence. <br/> 
				En modifiant votre couleur, vous pouvez vous fondre dans les zones colorées du terrain. Trouvez la bonne combinaison pour devenir invisible !
				</p>

				{/* Insérer 1 gif : item de couleur + se cacher dans une couleur */}

				<p><span>- Vous êtes prets !</span><br/><br/> 
				
				</p>

			</main>

			<Footer col={col} />
		</div>
    );
}

export default Tutorial;