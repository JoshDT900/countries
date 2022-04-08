import React from "react";

const Search = (props) => {
    return (
        <div>
            Find a country: <input value={props.searchValue} onChange={props.handleSearch}/>
        </div>
    )
}

export default Search;