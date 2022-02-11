import { useEffect, useState } from 'react';
import './styles/App.css';
import CountriesList from './components/CountriesList';
import Filter from './components/Filter';

function App() {
	const [ countries, setCountries ] = useState([]);

	useEffect(() => {
		fetchData();
	}, [])

	const fetchData = async () => {
		await fetch('https://restcountries.com/v2/all?fields=name,region,area')
			.then(response => response.json())
			.then(data => setCountries(data))
			.catch(err => console.log(err))
	}

	return (
		<div className="app-container">
			<h1>Rest Countries</h1>
			<Filter />
			<CountriesList countries={countries} />
		</div>
	);
}

export default App;
