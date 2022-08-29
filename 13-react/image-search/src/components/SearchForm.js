import React, { useState } from 'react';

const SearchForm = (props) => {

    const [query, setQuery] = useState('');
    
    // handle submit
    const _handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(query);
    }

    // handling the input
    const _handleInput = (e) => {
        setQuery(e.target.value)
    }
    
    return (
        <form onSubmit={ _handleSubmit }>
            <input type="search" required autoFocus placeholder="butterfly" onChange={ _handleInput } />
            <input type="submit" value={ `Search for ${ query }` } />
        </form>
    )
};

export default SearchForm