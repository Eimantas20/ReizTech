import Country from "./Country"
import { useState, useEffect } from "react";
import Pagination from './Pagination';
import { useDispatch, useSelector } from "react-redux";
import { setCountries, isPending, setError } from "../features/countriesSlice";


const CountriesList = () => {
    const [ currentPage, setCurrentPage ] = useState(1);
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries.countriesList);
    let pagesArr;

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        dispatch(isPending())
        await fetch('https://restcountries.com/v2/all?fields=name,region,area')
            .then(response => response.json())
            .then(data => dispatch(setCountries(data)) )
            .catch(err => dispatch(setError(err)))
    }

    const changePage = (e, page) => {
        e.preventDefault();
        setCurrentPage(page)
    }

    const amountOfPages = countries.length / 10;

    pagesArr = Array.from(Array(amountOfPages).keys(), value => value + 1);

    const displayCountries = countries.slice((currentPage * 10) - 10 , currentPage * 10);
    // const displayCountries = () => countries.slice(currentPage, currentPage + 10);

    return (
        <>
            {displayCountries && displayCountries.length > 0 ? displayCountries.map((country, i ) => 
                <Country country={country} key={i} />
            ) : <h1>Loading</h1> }
            <Pagination currentPage={currentPage} changePage={changePage} pagesArr={pagesArr} />
        </>
    )
}

export default CountriesList