import { useState } from 'react';
import './searchBar.scss';

const types = ['Comprar', 'Vender'];

export default function SearchBar() {
    const [query, setQuery] = useState({
        type:"Comprar",
        location:"",
        minPrice:0,
        maxPrice:0,
    });
    const switchType = (val) => {
        setQuery((prev)=>({...prev, type:val}));
    }
    return(
        <div className='searchbar'>
            <div className="type">
                { types.map((type) => (
                    <button
                        key={type}
                        onClick={()=>switchType(type)}
                        className={query.type === type ? 'active' : ''}
                    >
                        {type}
                    </button>
                ))}
            </div>
            <form>
                <input type="text" name='location' placeholder='City Location' />
                <input
                    type="number"
                    name='minPrice'
                    placeholder='Min Price'
                    min={0}
                    max={10000000}
                />
                <input
                    type="number"
                    name='maxPrice'
                    placeholder='Max Price'
                    min={0}
                    max={10000000}
                />
                <button><img src="/search.png" alt="button search" /></button>
            </form>
        </div>
    )
}
