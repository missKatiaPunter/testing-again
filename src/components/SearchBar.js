import React, { useState } from "react";
import PropTypes from "prop-types";

const propTypes = {
    onTermSubmit: PropTypes.func.isRequired,
};

const SearchBar = (props) => {

    const { onTermSubmit } = props;

    const [ inputBoxValue, setInputBoxValue ] = useState("");

    const handleSearchChange = ({ target: { value }}) => {
        setInputBoxValue(value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        onTermSubmit(inputBoxValue);
    };

    return(
        <div className="search-bar ui segment">
            <form
                onSubmit={ onFormSubmit }
                className="ui form"
            >
                <div className="field">
                    <label>Video Search</label>
                    <input
                        type="text"
                        value={ inputBoxValue }
                        onChange = { handleSearchChange }
                    />
                </div>
            </form>
        </div>
    );
};

SearchBar.propTypes = propTypes;

export default SearchBar;