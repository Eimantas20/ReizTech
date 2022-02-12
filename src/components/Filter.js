import '../styles/filter.css';
import { setAlphabet, setOceaniaRegion, setSmallerThanLT } from '../features/filterSlice';
import { useDispatch } from 'react-redux';

const Filter = () => {
    const dispatch = useDispatch();

    return (
        <div className='filter-container'>
            <label>Sort By Alphabet</label>
            <div className='filter select'>
                <select onChange={(e) => dispatch(setAlphabet(e.target.value))}>
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Descending</option>
                </select>
            </div>
            <div className='filter'>
                <label>Countries in Oceania region</label>
                <input className='toggleBtn' type='checkbox' onClick={() => dispatch(setSmallerThanLT())} />
            </div>
            <div className='filter'>
                <label>Countries smaller then Lithuania</label>
                <input className='toggleBtn' type='checkbox' onClick={() => dispatch(setOceaniaRegion())} />
            </div>
        </div>
    )
}

export default Filter