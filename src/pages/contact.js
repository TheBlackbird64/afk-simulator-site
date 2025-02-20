import './contact.css'

import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";

function BlockContact({col, icon, txt, content, ref=""}) {

	const contenu = 
		ref === "" ? (
			<p>{content}</p>
		) : (
			<a href={ref}>{content}</a>
		);
	
	return (
		<article className={`flexbox-center-col border-${col}`}>
			<h1>{txt}</h1>
			<img src={icon} alt={txt}/>
			{contenu}

			
		</article>
	);
}

function Contact({col}) {

    return (
        <>
			<Navbar col={col}/>

			<main className={`main-page border-${col}`}>
				<h1>Contacts</h1>
			</main>

			<section className={`flexbox-center-row contact-section`}>
				<BlockContact col={col} icon="./images/icons/mail.svg" txt="Mail" content="test@gmail.com"/>
				<BlockContact col={col} icon="./images/icons/github.svg" txt="Github Jeu" content="Lien vers le dépot GitHub du jeu" ref="https://github.com/TheBlackbird64/AFK_Simulator"/>
				<BlockContact col={col} icon="./images/icons/github.svg" txt="Github Site" content="Lien vers le dépot GitHub du site" ref="https://github.com/TheBlackbird64/afk-simulator-site"/>
			</section>

			<Footer col={col} />
		</>
    );
}

export default Contact;