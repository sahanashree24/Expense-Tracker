import React, { Component } from 'react'
import "./App.css"
import Display from './Components/Display'
import ExpenseForm from './Components/ExpenseForm'
import ExpenseList from './Components/ExpenseList'

import { toast, ToastContainer } from 'react-toastify'

class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        transactions:localStorage.getItem("expenses") ? JSON.parse(localStorage.getItem("expenses")):[],
        income: 0,
        expense: 0,
        balance: 0,
        editTrId: false,
        title:"",
        amount: 0
      }
    }

    componentDidMount() {
      let expenses = JSON.parse(localStorage.getItem("expenses"))
      //  console.log(`expenses = `, expenses)

       let amounts = expenses.map((item,index) => {
        return Number(item.amount)
       })
      //  console.log(`amounts = `, amounts)

       //balance
       let bal = amounts.reduce((ac,val) => ac + val, 0).toFixed(2)
       this.setState({
          balance: bal > -1 ? bal : `-${Math.abs(bal)}`
       });

       // income 
       let inc = amounts.filter((val) => val > 0).reduce((ac,val) => ac + val, 0).toFixed(2)
       this.setState({
          income: inc
       })

       // expense
       let exp = amounts.filter((val) => val < 0)
       let va = exp.reduce((ac,val) => ac + val, 0) * -1
       this.setState({
          expense: va
       })
    }

    deleteHandler(id) {
      console.log('delete id =', id)
      if(window.confirm(`Are you sure to delete tranaction id =${id}?`)) {
        let expenses = JSON.parse(localStorage.getItem("expenses"))
        let trIndex = expenses.findIndex(item => item.id == id)
        expenses.splice(trIndex,1)
        localStorage.setItem("expenses", JSON.stringify(expenses))
           toast.success("deleted")
           window.location.reload()
      } else {
        toast.warning("delete terminated")
      }
    }

    editHandler (id) {
        console.log(`edit = `, id)
        let expenses = JSON.parse(localStorage.getItem("expenses"))
        let tr = expenses.find(item => item.id == id)
      this.setState({
        editTrId: id,
        title: tr?.title,
        amount: Number(tr?.amount)
      })
    }

    render() {
      return (
        <div className="container">
            <ToastContainer autoClose={3000} position="top-right" />
            
            <div className="title">
              <h1>Expense Tracker</h1>
            </div>

            <div className="expense-container">
                <Display income={this.state.income} expense={this.state.expense} balance={this.state.balance} />

                <ExpenseForm editTrId={this.state.editTrId} editTitle={this.state.title} editAmount={this.state.amount} />
                
                <ExpenseList transactions={this.state.transactions} deleteHandler={this.deleteHandler.bind(this)} editHandler={this.editHandler.bind(this)} />
            </div>
        </div>
      )
    }
}

export default App