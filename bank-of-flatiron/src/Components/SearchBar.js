import React, { useState } from "react"
// import Transactions from "./Transactions"


 function SearchBar({setSearch, handleOnSearch}){

    const [input, setInput] = useState("")
    
     function handleChange(event){
         setInput(event.target.value)

    }
    
    
    function handleSubmit (event){
        event.preventDefault()
        handleOnSearch(input)

    }

    return (
            <form id="search-bar" onSubmit={handleSubmit}>
                <input id="search" 
                    placeholder="Search Transanctions..." 
                    type="text" 
                    onChange={handleChange}
                />
                <input id="button" 
                    value="Search "
                    type="submit"
                />
            </form>
    )
}

export default SearchBar