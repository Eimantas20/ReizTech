import '../styles/filter.css';
import { setAlphabet, setOceaniaRegion, setSmallerThanLT } from '../features/filterSlice';
import { useDispatch } from 'react-redux';

const Filter = () => {
    const dispatch = useDispatch();


    return (
        <div className='filter-container'>
            <label>Sort By Alphabet</label>
            <select onChange={(e) => dispatch(setAlphabet(e.target.value))}>
                <option value='asc'>Ascendic</option>   
                <option value='desc'>Descendic</option>
            </select>
            {/* May create a toggle button */}
            <button onClick={() => dispatch(setOceaniaRegion())}>Countries in Oceania region</button>
            <button onClick={() => dispatch(setSmallerThanLT())}>Countries smaller then Lithuania</button>
        </div>
    )
}

export default Filter