import React from 'react'
import './search.css'

const SearchBar = ({ placeholder, handelChange}) => {
    return (
        
        <input className='search' type='search' placeholder={placeholder} 
        onChange={handelChange} />
        
    )
}

export default SearchBar
