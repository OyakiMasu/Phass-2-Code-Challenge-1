import React, { useEffect, useState } from "react"
import TransactionData from "./TransactionIData"

function Transactions() {
    const [transactions, setTransactions] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/transactions")
            .then(response => response.json())
            .then(transactions => setTransactions(transactions))
            .catch(err => console.log(err))
    }, [])
     console.log(transactions);
    return (
        <>  
            <table>
                <tr>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
               
                {transactions.map((transaction)=>{
                    return <TransactionData
                    // index={index}
                    date={transaction.date}
                    category={transaction.category}
                    description={transaction.description}
                    amount={transaction.amount}
                    key={transaction.id}
                    />

                })}
            </table>
        </>
    )
}
export default Transactions;