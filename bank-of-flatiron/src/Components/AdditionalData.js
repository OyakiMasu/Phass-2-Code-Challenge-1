import React from "react"

 function AdditionalData() {
    
    return (
        <form id="new-item-form">
            <div className="form-inputs">
                <label htmlFor="date">Date:</label>
                <input id="date" type="date" data-date-inline-picker="true"></input>
                <input placeholder="Description.." className="text-input" id="description"></input>
                <input placeholder="Category..." className="text-input" id="category"></input>
                <input value="0" type="number" id="amount"></input>
            </div>
            <button> Add Transaction</button>
        </form>
    )
}

export default AdditionalData;