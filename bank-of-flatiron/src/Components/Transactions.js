import React, { useEffect, useState } from "react"
import TransactionData from "./TransactionIData"
import FormData from "./FormData"
import SearchBar from "./SearchBar"

function Transactions() {
    
    const [transactions, setTransactions] = useState([{}])


    useEffect(() => {
        fetch("http://localhost:3000/transactions")
            .then(response => response.json())
            .then(transactions => setTransactions(transactions))
            // .catch(err => console.log(err))
    }, [])

    function addData(display){
        // console.log(transactions);
        // console.log(display);
        const newStuff = [...transactions, display];

        setTransactions(newStuff)
        // console.log(transactions);
    }

    function handleOnSearch(input){
        console.log(input)
        let x = transactions.filter((transaction) => {if(transaction.description === `${input}`){return transaction}})
        setTransactions(x)
    }

    return (
    <>  
      <SearchBar handleOnSearch={handleOnSearch} />
      <FormData addData={addData} />
      <TransactionData transactions={transactions}/>
    </>
    )
}
export default Transactions;