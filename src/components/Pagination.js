import '../styles/pagination.css';
import { useEffect } from 'react';

const Pagination = ({ currentPage, pagesArr, changePage}) => {
    useEffect(() => {
        newPagesArr();
    }, [currentPage]);

    const backString = `<<`;
    const forwardString = '>>';

    const newPagesArr = () => {
        if (currentPage === 1) {
            return  pagesArr.slice(0, 3)
        } else if (currentPage === 25) {
            return pagesArr.slice(22, 25)
        } else {
            return pagesArr.slice(currentPage - 2, currentPage + 1)
        }
    }

    let newValue = newPagesArr();

    return (
        <div className='pagination-container'>
            <button onClick={(e) => changePage(e, 1)} >{backString}</button>
            {newValue.map((item, i) => (
                <button key={i} onClick={(e) => changePage(e, item)}>{item}</button>
            ))}
            <button onClick={(e) => changePage(e, pagesArr.length)} >{forwardString}</button>
        </div>
    )
}

export default Pagination