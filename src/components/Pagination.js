import '../styles/pagination.css';
import { useEffect } from 'react';

const Pagination = ({ currentPage, pagesArr, changePage}) => {
    
    useEffect(() => {
        modifyDisplayPages();
    }, [currentPage]);

    const backString = `<<`;
    const forwardString = '>>';

    const modifyDisplayPages = () => {
        if (currentPage === 1) {
            return  pagesArr.slice(0, 3)
        } else if (currentPage === pagesArr.length) {
            return pagesArr.slice(pagesArr.length - 3, pagesArr.length)
        } else {
            return pagesArr.slice(currentPage - 2, currentPage + 1)
        }
    }
    
    let modifiedPagesArr = modifyDisplayPages();

    return (
        <div className='pagination-container'>
            <button onClick={(e) => changePage(e, 1)} >{backString}</button>
            {modifiedPagesArr.map((item, i) => (
                <button key={i} className={currentPage === item ? 'current-page' : null} onClick={(e) => changePage(e, item)}><p>{item}</p></button>
            ))}
            <button onClick={(e) => changePage(e, pagesArr.length)} >{forwardString}</button>
        </div>
    )
}

export default Pagination