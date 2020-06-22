import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
    
    state = {
        term: ''
    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.term)

        this.setState({ term: '' })
    }

    render() {
        return (
            <div className="ui two column divided grid">
                <div className="row">
                    <div className="column">
                        <form onSubmit={this.onFormSubmit} className="ui form">
                            <div className="label-position field">
                                <label>Image Search</label>
                                <input
                                    placeholder="What are you looking for?"
                                    type="text" 
                                    value={this.state.term} 
                                    onChange={event => this.setState({ term: event.target.value })} 
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar;