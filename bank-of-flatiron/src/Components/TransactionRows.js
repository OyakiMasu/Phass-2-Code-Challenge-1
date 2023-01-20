import React from 'react'


function TransactionRows({ date, category, description, amount }) {
    // console.log(date)
  return (
    <tr>
        <td>{date}</td>
        <td>{category}</td>
        <td>{description}</td>
        <td>{amount}</td>
    </tr>
  )
}

export default TransactionRows