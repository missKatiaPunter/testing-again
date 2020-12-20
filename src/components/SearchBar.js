import React, { useState } from "react";

const SearchBar = () => {

    const [ inputBoxValue, setInputBoxValue ] = useState("");

    const handleSearchChange = ({ target: { value }}) => {
        setInputBoxValue(value);
    };

    return(
        <div className="search-bar ui segment">
            <form className="ui form">
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

export default SearchBar;