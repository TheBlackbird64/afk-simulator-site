import './updates.css'

import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import TitreSection from "../components/titreSection.js";

function Updates({col}) {

    return (
        <div className="scroll-div">
			<Navbar col={col}/>

			<main className={`main-page border-${col}`}>
				<h1>Mises à jour à venir sur le jeu</h1>

				<p>AFk SImulator est un jeu très simple mais qui a beaucoup de possibilités d'amélioration ! Dans
					 cette section on vous propose de découvrir certéaines idées d'amélioration qui pourront être intégrées dans le jeu.</p>

				<TitreSection col={col} txt="Nouveaux objets"/>

				<p>
					Le champ de bataille évolue avec une toute nouvelle gamme d’objets ! <br/><br/>
					- Détecteurs de mouvement : Repérez les joueurs cachés plus facilement.<br/>
					- Amplificateurs de camouflage : Gagnez des points de couleur à intervalle réguliers.<br/>
					- Ralentissement : Ralentissez temporairement les ennemis à proximité, idéal pour les neutraliser sans attaquer.<br/>
					- Distorsion du temps  : Rallongez le temps de respawn de vos adversaires ou réduisez le vôtre pour revenir plus vite dans l’action !<br/><br/>

					Adaptez votre stratégie avec ces nouveaux outils et prenez l’ascendant sur vos rivaux !
				</p>

				<TitreSection col={col} txt="Capacités spéciales pour les joueurs"/>

				<p>
					Chaque joueur peut désormais choisir des compétences uniques pour s’adapter à son style de jeu.<br/><br/>
					- Téléportation éclair : Déplacez-vous instantanément sur une courte distance.<br/>
					- Sprint fantôme : Une accélération soudaine qui vous rend intangible pendant un instant.<br/>
					- Tir perçant : Une attaque qui traverse les obstacles pour surprendre vos ennemis.<br/>
					- Champ de protection : Un bouclier temporaire qui absorbe une attaque.<br/>
					- Echange : Echange des points de couleur avec un joueur proche.<br/><br/>

					À vous de choisir la meilleure combinaison pour être imprévisible et redoutable.
				</p>

				{/*
				<TitreSection col={col} txt="Système de classement des joueurs basé sur un système de points Elo"/>

				<p>
					Le nouveau classement compétitif arrive avec un système de points Elo.<br/>

					- Gagnez des matchs et augmentez votre rang.<br/>
					- Comparez vos performances avec celles des autres joueurs dans un classement mondial.<br/>
					- Débloquez des titres et des badges exclusifs en fonction de votre progression.<br/>
					Participez à des tournois hebdomadaires pour grimper plus vite dans le classement et gagner des récompenses spéciales.<br/>
					Seuls les plus stratèges et les plus patients atteindront le sommet.<br/>
				</p>
				
				*/}

				<TitreSection col={col} txt="Différents modes de jeu"/>

				<p>
					Dites adieu à la routine avec l’arrivée de nouveaux modes de jeu.<br/><br/>

					- Hide & Seek : Un joueur devient le chasseur et doit éliminer les autres avant la fin du temps imparti.<br/>
					- Capture de zone : Maintenez une position sur la carte plus longtemps que vos adversaires pour remporter la victoire.<br/>
					- Mode "Mutation" : Chaque joueur débloque des capacités aléatoires au fil de la partie.<br/>
					- Inversion de contrôle : Un mode chaotique où vos commandes changent à intervalles réguliers.<br/><br/>
					Ces modes apporteront plus de variété, plus de fun et plus de rebondissements à AFK Simulator.
				</p>
				

				<p>
					<br/><br/><br/><br/>
					Si vous avez d'autres idées n'hésitez pas à nous en faire part en nous contactant !
				</p>
			</main>

			<Footer col={col} />
		</div>
    );
}

export default Updates;