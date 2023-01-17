import React from "react"
import Transactions from "./Transactions"

 function TransactionData(
    { category, date, description, amount})
    {
        {transactions = {transactions}}
    return (
        <tr>
            <td>{date}</td>
            <td>{category}</td>
            <td>{description}</td>
            <td>{amount}</td>
        </tr>
    )
}

export default TransactionData