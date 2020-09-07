import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onSubmit = event => {
        event.preventDefault();

        onFormSubmit(term)

        setTerm('');
    }

    const onInputChange = event => {

        setTerm(event.target.value);
    }

    return (
        <div className="search-bar">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Video Search Application</label>
                    <input 
                        onChange={onInputChange}
                        value={term} 
                        placeholder="What are you looking for?" 
                        type="text" />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;