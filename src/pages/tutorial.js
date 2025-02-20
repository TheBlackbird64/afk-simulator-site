import './tutorial.css'

import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import TitreSection from "../components/titreSection.js";

function Tutorial({col}) {

    return (
        <div className="scroll-div">
			<Navbar col={col}/>

			<main className={`main-page border-${col}`}>
				<h1>Présentation et tutoriel</h1>

				<TitreSection col={col} txt="Qu'est-ce que AFK Simulator ?"/>
				<p>AFK Simulator est un jeu multijoueur qui se déroule en parties courtes et intenses. </p>
				<p>Le premier joueur qui parvient à rester immobile pendant 1 minute remporte la partie. Mais attention, les autres joueurs feront tout pour vous en empêcher !</p>
				

				<TitreSection col={col} txt="Gameplay"/>
				<p>Vous incarnez un carré noir qui se déplace sur une carte restreinte contenant des murs et des zones de couleurs générés aléatoirement à chaque parties.</p>

				<div className='tutorial-gif flexbox-center-row'>
					<img src="images/gifs/afk-sim-dep.gif" alt="Animation mouvement"/>
				</div>

				<p>Le gameplay se déroule en plusieurs parties: <br/><br/></p>
				<p><span>- Attaquer et se défendre:   </span><br/><br/>  Chaque joueur peut tirer des projectiles pour déplacer et donc faire bouger ses adversaires, ce qui remet à 0 leur temps sans bouger. 
					Les joueurs ont également une barre de vie, et quand quelqu'un pert, il réapparaît au bout de quelques secondes.<br/>Les projectiles sont en quantité limitées : 
					il faut ramasser des recharges ( <img src="images/img-tutorial/recharge.png" alt="item recharge"/> ) sur la carte.</p>
				
				<div className='tutorial-gif flexbox-center-row'>
					<img src="images/gifs/afk-sim-tir.gif" alt="Animation tir"/>
				</div>

				<p><span>- Se camoufler pour survivre: </span><br/><br/> 
				Des items de couleur ( <img src="images/img-tutorial/item_orbe_col_R.png" alt="item couleur rouge"/> <img src="images/img-tutorial/item_orbe_col_G.png" alt="item couleur vert"/> <img src="images/img-tutorial/item_orbe_col_B.png" alt="item couleur bleu"/> ) apparaissent aléatoirement sur la carte. En les ramassant, votre carré change de couleur en ajoutant du rouge, du vert ou du bleu à votre apparence. <br/> 
				En modifiant votre couleur, vous pouvez vous fondre dans les zones colorées du terrain. Trouvez la bonne combinaison pour devenir invisible !
				</p>
				
				<div className='tutorial-gif flexbox-center-row'>
					<img src="images/gifs/afk-sim-hide.gif" alt="Animation caché"/>
				</div>

				<p><span>- Vous êtes prêts !</span><br/><br/> 
				Il ne vous reste plus qu'à télécharger le jeu et à ne rien faire pour gagner !
				</p>

			</main>

			<Footer col={col} />
		</div>
    );
}

export default Tutorial;