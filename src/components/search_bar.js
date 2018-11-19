import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
    render() {
        return (
            <input className="form-control form-control-lg" type="text" placeholder="search"/>
        );
    }
}

SearchBar.propTypes = {};

export default SearchBar;
