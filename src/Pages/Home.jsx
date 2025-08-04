import React, { useState, useEffect, useCallback } from 'react'
import Display from '../Component/Display'
import { useDispatch } from 'react-redux'
import { allTransaction } from '../Redux/Actions/ExpenseAction'
import Transactions from '../Component/Transactions'
import { toast } from 'react-toastify'

function Home() {
  const [transaction,setTransaction] = useState([])
  const [balance,setBalance] = useState(0)
  const [income,setIncome] = useState(0)
  const [expense,setExpense] = useState(0)

  const dispatcher = useDispatch()

  const readData = useCallback(() => {
    dispatcher(allTransaction()).unwrap().then(res => {
      // console.log(`transactions =`, res)
      setTransaction(res)
    }).catch(err => toast.error(err.response.data.msg))
}, [])

   // update the balance 
   const updateBalance = () => {
      let amounts = transaction?.map(val => Number(val.amount))
      // console.log(`amounts = `, amounts)

      //balance
      let bal = amounts.reduce((ac, cu) => ac + cu, 0).toFixed(2)
      setBalance(bal)

      // income 
      let incm = amounts.filter(val => val > 0).reduce((ac, cu) => ac + cu, 0).toFixed(2)
      setIncome(incm)

      // expense 
      let ne = amounts.filter(val => val < 0)
      let exp = ne.reduce((ac, cu) => ac + cu, 0)
      setExpense(exp)
   }

useEffect(() => {
  readData()
  updateBalance()
}, [transaction])

  return (
    <div className="container">
        <div className="row mt-3">
          <Display balance={balance} income={income} expense={expense} />
          <Transactions expenses={transaction} />
        </div>
    </div>
  )
}

export default Home
