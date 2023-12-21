import { CiSearch } from 'react-icons/ci';
import { useState } from 'react';
import { BEST } from '~/fake-api/best';
import { Link } from 'react-router-dom';


function SearchInput({onclick}) {

    const [searchTerm, setSearchTerm] = useState('');
    const [result, setResult] = useState([]);  

    const fetchData = (value) => {
        fetch('http://localhost:3001/best')
        .then(response => response.json())
        .then(json => {
            const results = json.filter(user => {
                return (
                    value.trim() &&
                    user &&
                    user.name &&
                    user.name.toLowerCase().includes(value.trim().toLowerCase())
                );
            });
            setResult(results);
        })
        
    }

    const handleChange = (value) => {
        setSearchTerm(value)
        fetchData(value)
    }

    return(
        <div>
            <label
            htmlFor='search'
            className='border border-black rounded-md flex items-center px-4 py-2 gap-2 mt-4'
            >
            <CiSearch size={24} />
                <input
                    value={searchTerm}
                    onChange={(e) => handleChange(e.target.value)}
                    type='text'
                    id='search'
                    placeholder='Search'
                    className=' outline-none w-full'
                />
            </label>
            {
            result.map((item , index) => (
                <Link
                onClick={() => onclick()} 
                to={`/shop/${item.category}/${item.slug}`}
                className='flex flex-col items-start py-2'
                >
                <div className='border-b pb-2 w-full'>{item.name}</div>
                </Link>
            ))
            }
      </div>
    )
}

export default SearchInput