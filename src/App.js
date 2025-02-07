//import logo from './logo.svg';
import './App.css';
import './components/components.css'
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
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
			</main>

			<Footer col={col} />
		</div>
	);
}

export default App;
