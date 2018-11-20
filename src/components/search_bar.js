import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {searchValue: this.props.nowText};
        // this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(value) {

        this.setState({searchValue: value});
        if(value.length>4){
            this.props.onSearchTermChange(value)
        }

    }

    render() {
        return (
            <input className="form-control form-control-lg" value={this.state.searchValue} onChange={event =>this.onInputChange(event.target.value) } type="text" placeholder="search"/>
        );
    }
}

SearchBar.propTypes = {};

export default SearchBar;
