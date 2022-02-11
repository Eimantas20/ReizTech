import Country from "./Country"
import { useState, useEffect } from "react";
import Pagination from './Pagination';
import { useDispatch } from "react-redux";
import { setCountries, isPending } from "../features/countriesSlice";


const CountriesList = ({countries}) => {
    const [ page, setPage ] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        await fetch('https://restcountries.com/v2/all?fields=name,region,area')
            .then(response => response.json())
            .then(data => dispatch(isPending()))
            .catch(err => console.log(err))
    }

    const amountOfPages = countries.length / 10;

    const displayCountries = countries.slice(page, page + 10);

    return (
        <>
            {displayCountries && displayCountries.length > 0 ? displayCountries.map((country, i ) => 
                <Country country={country} key={i} />
            ) : <h1>Loading</h1> }
            <Pagination amountOfPages={amountOfPages} />
        </>
    )
}

export default CountriesList