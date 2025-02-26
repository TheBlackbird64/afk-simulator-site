import './download.css'

import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import Button from "../components/button.js";

function Installer({col, titre, txt, icon, callback}) {
	return (
		<article className={`flexbox-center-col download-article border-${col} `}>
			<h1>{titre}</h1>
			<img src={icon} alt={titre}/>
			<p>{txt}</p>
			<Button col={col} txt={"Télécharger"} icon="./images/icons/download.svg" callback={callback}/>
		</article>
	);
}

function Download({col}) {


    return (
        <div className="scroll-div">
			<Navbar col={col}/>

			<main className={`main-page border-${col}`}>
				<h1>Télécharger le jeu</h1>
			</main>

			<section className={`flexbox-center-row download-section`}>
				<Installer 
					col={col} 
					titre="Windows" 
					txt="Installer le fichier, exécutez le et suivez les instructions. Le launcher mettra à jour le jeu à chaque lancement et un raccourci est créé sur votre bureau." 
					icon="./images/icons/windows.svg" 
					callback={() => {window.location.href = "http://afk-simulator.com/download-windows";}} 
				/>

				<Installer 
					col={col} 
					titre="Linux" 
					txt="Installer le fichier, exécutez le et suivez les instructions. Le launcher mettra à jour le jeu à chaque lancement et un raccourci est créé sur votre bureau." 
					icon="./images/icons/linux.svg"
					callback={() => {alert("Fichier indisponible pour le moment.");}/*window.location.href = "http://afk-simulator.com/download-linux";}*/} 
				/>
				
				<Installer 
					col={col} 
					titre="MacOS" 
					txt="Installer le fichier, exécutez le et suivez les instructions. Le launcher mettra à jour le jeu à chaque lancement et un raccourci est créé sur votre bureau." 
					icon="./images/icons/macOS.svg" 
					callback={() => {alert("Fichier indisponible pour le moment.");}/*window.location.href = "http://afk-simulator.com/download-macOS";*/} 
				/>

			</section>

			<Footer col={col} />
		</div>
    );
}

export default Download;