import React, { useEffect, useState } from "react"
 import TransactionData from "./TransactionIData"
 import FormData from "./FormData"

 
function Transactions() {
    const [transactions, setTransactions] = useState([])
    // console.log(transactions)

    useEffect(() => {
        fetch("http://localhost:3000/transactions")
            .then(response => response.json())
            .then(transactions => setTransactions(transactions))
            // .catch(err => console.log(err))
    }, [])

    return (
        <>  
            <table>
                <tr>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
                
                         
{/* This will help print the content to the table */}

        {transactions.map((transaction) => {
            return <TransactionData 
            date = {transaction.date}
            category = {transaction.category}
            description = {transaction.description}
            amount = {transaction.amount}
            key = {transaction.id}

        />
                })}
                <FormData/>
            </table>
        </>
    )
}
export default Transactions;