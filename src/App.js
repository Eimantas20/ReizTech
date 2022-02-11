import { useEffect, useState } from 'react';
import './styles/App.css';
import CountriesList from './components/CountriesList';
import Filter from './components/Filter';

function App() {

	return (
		<div className="app-container">
			<h1>Rest Countries</h1>
			<Filter />
			<CountriesList />
		</div>
	);
}

export default App;
