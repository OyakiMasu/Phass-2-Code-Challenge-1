import React, {useState} from "react"

 function FormData() {

    //For Description
    const [about, setChange] = useState("")
    
    //Eventhandler for the description input
    function handleChange (event) {
        event.preventDefault();
        setChange(event.target.value)
    }

    //For Category
    const [categ, setCateg] = useState("")
    
    //Eventhandler for the category input
    function handleCateg (event){
        event.preventDefault();
        setCateg(event.target.value)
    }
 
    //For Amount
    const [amunt, setAmount] = useState(0);
    
    //Eventhandler for the amount input
    function handleAmount(event){
        event.preventDefault();
        setAmount(event.target.value)
    }
    
    //For the Submit button
    // const [click, setClick] = useState()


    //Eventhandler for the submit
    function handleClick(event){
        event.preventDefault();
        console.log('clicked')
        
        

    }
    
    return (
        <form id="new-item-form">
            <div className="form-inputs">
                <label htmlFor="date" >Date:</label>
                <input id="date" type="date" data-date-inline-picker="true" ></input>
                <input placeholder="Description.." className="text-input" id="description" value={about} onChange={handleChange} ></input>
                <input placeholder="Category..." className="text-input" id="category" value={categ} onChange={handleCateg}></input>
                <input value={amunt} id="amount" onChange={handleAmount} ></input>
            </div>
            <button onClick= {handleClick} > Add Transaction</button>
        </form>
    )
}

export default FormData;