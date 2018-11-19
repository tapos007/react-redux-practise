import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {searchValue: ''};
        // this.onInputChange = this.onInputChange.bind(this);
    }

    // onInputChange(event) {
    //     this.setState({searchValue: event.target.value});
    // }

    render() {
        return (
            <input className="form-control form-control-lg" value={this.state.searchValue} onChange={event =>this.setState({searchValue: event.target.value}) } type="text" placeholder="search"/>
        );
    }
}

SearchBar.propTypes = {};

export default SearchBar;
