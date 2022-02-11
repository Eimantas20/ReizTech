import '../styles/filter.css';

const Filter = () => {
    return (
        <div className='filter-container'>
            <form>
                <label>Sort By Alphabet</label>
                <select>
                    <option>Ascendic</option>
                    <option>Descendic</option>
                </select>
                {/* May create a toggle button */}
                <button>Countries in Oceania region</button>
                <button>Countries smaller then Lithuania</button>
            </form>
        </div>
    )
}

export default Filter