
import './search.style.css';

export const Search = ({handleChange}) => {
    return (
        <input className='search-box' type="search" placeholder="search monsters" onChange={handleChange} />
    )
}