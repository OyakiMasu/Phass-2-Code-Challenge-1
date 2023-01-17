import React from "react"

 function SearchBar(){
    console.log()
    return (
            <form id="search-bar">
                <input id="search" placeholder="Search Transanctions..." type={"text"}/>
                <button>Search</button>
            </form>
    )
}

export default SearchBar