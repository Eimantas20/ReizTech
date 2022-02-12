import '../styles/country.css';

const Country = ({country}) => {
    const { name, region, area } = country;
    return (
        <div className='country-container'>
            <p>{name}</p>
            <p>{area}</p>
            <p>{region}</p>
        </div>
    )
}

export default Country