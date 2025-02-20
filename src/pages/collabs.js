import './collabs.css'

import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";

function Projet({col, titre, author, desc, icon, lien}) {
	return (
		<article className={`flexbox-center-col collabs-article border-${col} `}>
			<a href={lien}>{titre}</a>
			<h2>Auteur : <span className={`txt-${col}`}>{author}</span></h2>
			<img src={icon} alt={titre}/>
			<p>{desc}</p>
		</article>
	);
}


function Collabs({col}) {

    return (
        <div className="scroll-div">
			<Navbar col={col}/>

			<main className={`main-page border-${col}`}>
				<h1>Collaborateurs et autres projets</h1>
			</main>

			<section className={`flexbox-center-row collabs-section`}>
				<Projet 
					col={col} 
					titre="AFK Simulator" 
					author="TheBlackbird64" 
					desc="Le serveur du jeu AFK Simulator. Codé en c#, il est open-source comme le reste du jeu." 
					icon="./images/icon.png" 
					lien="https://github.com/TheBlackbird64/Serveur-AFKSimulator"
				/>

			</section>

			<Footer col={col} />
		</div>
    );
}

export default Collabs;