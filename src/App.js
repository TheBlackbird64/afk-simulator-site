//import logo from './logo.svg';
import './App.css';
import './components/components.css'
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
import Button from "./components/button.js";
import { useState, useEffect } from "react";

function App() {
	const [col, setCol] = useState(0);

	useEffect(() => {
        const colors = ["red", "green", "blue"];
        setCol(colors[Math.floor(Math.random() * colors.length)]);
    }, []);

	return (
		<div className="App">
			<Navbar col={col}/>

			<main className="flexbox-center-col">
				<img src="./images/Titre.png" alt="Titre du jeu"/>
				<Button col={col} txt="Jouez maintenant !" icon="./images/icons/play.svg"/>
			</main>

			<Footer col={col} />
		</div>
	);
}

export default App;
