import React from "react"
import TransactionRows from "./TransactionRows"

 function TransactionData({ transactions }){ 
    // console.log(transactions)   
    return (
        <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Category</th>
                <th>Description</th>
                <th>Amount</th>
            </tr>   
        </thead>
        <tbody>
            {
                transactions.map((transaction) => (
                    <TransactionRows key = {transaction.id}
                        date = {transaction.date}
                        category = {transaction.category}
                        description = {transaction.description}
                        amount = {transaction.amount}  
                    />
                ))
            }
        </tbody>                    
        </table>
    )
}

export default TransactionData