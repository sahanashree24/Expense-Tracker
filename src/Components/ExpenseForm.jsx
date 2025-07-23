import React, { Component } from 'react'
import { toast } from 'react-toastify';

export class ExpenseForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
           title: "" ,
           amount: 0 
        }
    }

    submitHandler(e) {
      e.preventDefault();
      let data = {
        id: Math.floor(Math.random() * 10000),
        title: this.state.title,
        amount: this.state.amount
      }
      console.log("data =", data)

      // read data from localstorage
      let transactions = JSON.parse(localStorage.getItem("expenses")) || [];
      // to check the title exists or not
      let exTransaction = transactions.find(item => item.title === data.title)
      
      if(exTransaction) {
        toast.warning(`transaction title already exists..`)
      } else {
        transactions.push(data)
        localStorage.setItem("expenses", JSON.stringify(transactions))
        toast.success("Transaction added successfully")
        window.location.reload()
      }
    }

    updateTransaction(e) {
      e.preventDefault();
      let data = {
        id: this.props.editTrId,
        title: this.state.title,
        amount: this.state.amount
      }

       // read data from localstorage
       let transactions = JSON.parse(localStorage.getItem("expenses")) || [];
      // read the existing transaction index
      let exTrIndex = transactions.findIndex(item => item.id == this.props.editTrId)

      transactions.splice(exTrIndex,1,data)
      localStorage.setItem("expenses", JSON.stringify(transactions))
      toast.success("Transaction updated successfully")
      window.location.reload()
    }


  render() {
    const { editTrId, editTitle, editAmount } = this.props
    return (
      <div className="dashboard">
          <div className="expenseForm">
            <form autoComplete='off' onSubmit={editTrId ? this.updateTransaction.bind(this) : this.submitHandler.bind(this)}>
                <div className="form-item">
                   <input type="text" name="title" id="title" className="form-input" placeholder='Enter Title' value={this.state.title || editTitle} onChange={(e) => this.setState({
                    title: e.target.value
                   })} required />
                </div>
                <div className="form-item">
                   <input type="number" name="amount" id="amount" placeholder='Enter amount' className="form-input" value={this.state.amount || editAmount} onChange={(e) => this.setState({
                    amount: e.target.value
                   })} required />
                </div>
                <div className="form-item">
                    <button type="submit" className="btn">
                        { editTrId ? "Update": "Add"} Transaction
                    </button>
                </div>
            </form>
          </div>
      </div>
    )
  }
}

export default ExpenseForm
