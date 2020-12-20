import React from "react";
import SearchBar from "./SearchBar";

const App = () => {
    
    const onTermSubmit = ( term ) => {
        console.log(term);
    };

    return(
        <div className="ui container">
            <SearchBar
                onTermSubmit = { onTermSubmit }
            />
        </div>
    );
};

export default App;