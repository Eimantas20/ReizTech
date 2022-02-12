import Country from "./Country"
import { useState, useEffect } from "react";
import Pagination from './Pagination';
import { useDispatch, useSelector } from "react-redux";
import { setCountries, isPending, setError } from "../features/countriesSlice";


const CountriesList = () => {
    const [ currentPage, setCurrentPage ] = useState(1);
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries.countriesList);
    const filters = useSelector((state) => state.filters)
    let pagesArr;
    let list;
    const lithuaniasArea = 65300;
    const countriesInOceania = ['Australia', 'Papua New Guinea', 'New Zealand', 'Fiji', 'Solomon Islands,',
        'Micronesia', 'Vanuatu', 'Samoa', 'Kiribati', 'Tonga', 'Marshall Islands', 'Palau', ' Tuvalu', 'Nauru'];

    useEffect(() => {
        fetchData();        
    }, [])

    const fetchData = async () => {
        dispatch(isPending())
        await fetch('https://restcountries.com/v2/all?fields=name,region,area')
            .then(response => response.json())
            .then(data => dispatch(setCountries(data)) )
            .catch(err => dispatch(setError(err)));
    }

    const changePage = (e, page) => {
        e.preventDefault();
        setCurrentPage(page)
    }
   

    let filteredCountries = countries.filter(country => {
        let count = 0;
        for (let filter in filters) {
            if(filters[filter]) {
                switch (filter) {
                    case 'oceaniaRegion':
                        if (countriesInOceania.some(countryInOceania => country.name === countryInOceania)) {
                            count++
                        }
                        break;
                    case 'smallerThanLT': 
                        country.area < lithuaniasArea ? count++ : count--;
                        break;
                    default:
                        count++
                        break;
                }
            } else {
                count++
            }
        if (count === 3) return country
        }
    })


    const sortByAlphabet = () => {

        if(filters.alphabet === 'asc') {
            return list.sort((a, b) => a.name.localeCompare(b.name));

        } else if (filters.alphabet === 'desc') {
            return list.sort((a, b) => b.name.localeCompare(a.name));
        }
    }

    if (filters.alphabet) {
        list = [...filteredCountries];
        filteredCountries = sortByAlphabet()
    }

    const amountOfPages = Math.ceil(filteredCountries.length / 10);
    pagesArr = Array.from(Array(amountOfPages).keys(), value => value + 1);


    const currentPageCountries = filteredCountries.slice((currentPage * 10) - 10 , currentPage * 10);

    return (
        <>
            <div className='countrieslist-header'>
                <p>Name</p>
                <p>Area</p>
                <p>Region</p>
            </div>
            {currentPageCountries && currentPageCountries.length > 0 ? currentPageCountries.map((country, i ) => 
                <Country country={country} key={i} />
            ) : <h1>Loading</h1> }
            <Pagination currentPage={currentPage} changePage={changePage} pagesArr={pagesArr} />
        </>
    )
}

export default CountriesList