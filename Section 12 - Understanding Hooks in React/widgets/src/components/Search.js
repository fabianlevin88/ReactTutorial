import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = props => {

    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 500)

        return () => {
            clearTimeout(timerId);
        }
    }, [term])


    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            })
            setResults(data.query.search)
        }

        if (debouncedTerm) {
            search();
        } else if (!debouncedTerm) {
            setResults([])
        }

    }, [debouncedTerm]);

    const listOfResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="content">
                    <div className="header">
                        <a href={`https://en.wikipedia.org?curid=${result.pageid}`} target="_blank" rel="noopener noreferrer"><h4>{result.title}</h4></a>
                    </div>
                    <div className="description">
                        <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter search term</label>
                    <input
                        value={term}
                        onChange={event => setTerm(event.target.value)} 
                        className="input" />
                </div>
                <div className="ui middle aligned celled animated list" >
                    {listOfResults}
                </div>
            </div>
        </div>
    )
}

export default Search;