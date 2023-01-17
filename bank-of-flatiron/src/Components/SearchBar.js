import React from "react"
// import Transactions from "./Transactions"

 function SearchBar(){
    // const [search, setSearch] = useState("")
    function handleClick(event){
        event.targert.value("")
    }

    return (
            <form id="search-bar">

                <input id="search" placeholder="Search Transanctions..." type={"text"}/>
                <button onClick={handleClick}>Search</button>
            </form>
    )
}

export default SearchBar