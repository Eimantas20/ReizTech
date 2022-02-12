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
    const amountOfPages = countries.length / 10;
    pagesArr = Array.from(Array(amountOfPages).keys(), value => value + 1);


    const filteredCountries = countries.filter(country => {
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
                        break;
                }
            } else {
                count++
            }
        if (count === 3) return country
        }
    })

    console.log(filteredCountries)

    
    const filterDesc = () => {
        let list = [...countries];
        return list.sort((a, b) => b.name.localeCompare(a.name))
    }
    const filterAsc = () => {
        let list = [...countries];
        return list.sort((a, b) => a.name.localeCompare(b.name))
    }

    let descendentArr;
    if (countries.length > 0) descendentArr = filterAsc();

    const currentPageCountries = countries.slice((currentPage * 10) - 10 , currentPage * 10);
    // console.log(currentPageCountries)

    return (
        <>
        <div className='countrieslist-header'>
            <p>Name</p>
            <p>Area</p>
            <p>Region</p>
        </div>
            {filteredCountries && filteredCountries.length > 0 ? filteredCountries.map((country, i ) => 
                <Country country={country} key={i} />
            ) : <h1>Loading</h1> }
            <Pagination currentPage={currentPage} changePage={changePage} pagesArr={pagesArr} />
        </>
    )
}

export default CountriesList