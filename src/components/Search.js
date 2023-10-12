import React from "react"

function Search({setSearch}) {

    return (
        <div>
            <input type="text" onChange={(e) => setSearch(e.target.value.trim())} placeholder="Search..."/>
        </div>
    );
}

export default Search;