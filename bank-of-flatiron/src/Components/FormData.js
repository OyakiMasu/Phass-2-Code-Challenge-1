import React, {useState} from "react"

 function FormData({addData}) {

    const [maindata, setMainData] = useState({
        id:15,
        amount:0,
        category:"",
        date:"2023-01-01",
        description:"",
      
    });

    //For the Submit button
    // const [click, setClick] = useState()

    function handleChange(event){
        const {name, value} = event.target;
        
        
        setMainData({...maindata, [name] : value})
        
    }


    //Eventhandler for the submit
    function handleClick(event){
        event.preventDefault();
        addData(maindata)
    }
    
    return (
        <form id="new-item-form">
            <div className="form-inputs">
                <label htmlFor="date" >Date:</label>
                <input name="date" id="date" type="date" data-date-inline-picker="true" onChange={handleChange}></input>
                <input name="description" placeholder="Description.." className="text-input" id="description" onChange={handleChange} ></input>
                <input name="category" placeholder="Category..." className="text-input" id="category" onChange={handleChange}></input>
                <input name="amount" id="amount" onChange={handleChange} ></input>
            </div>
            <button onClick= {handleClick} > Add Transaction</button>
        </form>
    )
}

export default FormData;