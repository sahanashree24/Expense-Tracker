import React, { Component } from 'react'
import ExpenseItem from './ExpenseItem'

export class ExpenseList extends Component {
    constructor(props) {
        super(props)
    }
    
  render() {
    const { deleteHandler, editHandler } = this.props
    return (
      <div className='expenseList'>
            <div className="sub-title">
                <h5>Transactions</h5>
            </div>

            <ul className="list">
                {
                   this.props.transactions.map(function(item,index){
                      return (
                        <ExpenseItem key={index} {...item} deleteItem={deleteHandler.bind(this)} editItem={editHandler.bind(this)} />
                      )
                   })
                }
            </ul>
      </div>
    )
  }
}

export default ExpenseList
