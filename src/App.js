import './App.css';
import './pages/home.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home.js";
import Tutorial from "./pages/tutorial.js";
import Download from "./pages/download.js";
import Updates from "./pages/updates.js";
import Collabs from "./pages/collabs.js";
import Contact from "./pages/contact.js";

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
		<Router>
            <Routes>
                <Route path="/" element={<Home col={colSite}/>} /> {/* Accueil */}
                <Route path="/tutorial" element={<Tutorial col={colSite}/>} />
                <Route path="/download" element={<Download col={colSite}/>} />
                <Route path="/updates" element={<Updates col={colSite}/>} />
                <Route path="/collabs" element={<Collabs col={colSite}/>} />
                <Route path="/contact" element={<Contact col={colSite}/>} />

                <Route path="*" element={<Home col={colSite}/>} /> {/* Page 404 */}
            </Routes>
        </Router>
	);
}

export default App;
