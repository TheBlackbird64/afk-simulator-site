import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	/* React render 2 fois les composants en strict pour s'assurer qu'il y a pas de pb. Cela ne sert qu'au developpement */
	<React.StrictMode>
		<App />
	</React.StrictMode>

);

