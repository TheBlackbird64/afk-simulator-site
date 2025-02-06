//import logo from './logo.svg';
import './App.css';
import './components/components.css'
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";

function App() {
	let color = "bt-color-r"

	return (
		<div className="App">
			<Navbar col={color}/>

			<main>

			</main>

			<Footer col={color} />
		</div>
	);
}

export default App;
