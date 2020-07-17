import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' }

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term)

        this.setState({ term: '' })
    }

    onInputChange = event => {

        this.setState({ term: event.target.value })
    }

    render() {
        return (
            <div className="search-bar">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search Application</label>
                        <input 
                            onChange={this.onInputChange}
                            value={this.state.term} 
                            placeholder="What are you looking for?" 
                            type="text" />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;