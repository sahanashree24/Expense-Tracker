import React, { Component } from 'react'

export class ExpenseItem extends Component {
    
  render() {
    return (
      <li className='list-item'>
            <strong> { this.props.title } </strong>
            <span className="amount"> &#8377; { this.props.amount } </span>
            <div className="btn-group">
                <button className="btn info" onClick={() => this.props.editItem(this.props.id)}>
                    <i className="bi bi-pencil"></i>
                </button>
                <button className="btn danger" onClick={() => this.props.deleteItem(this.props.id)} >
                    <i className="bi bi-trash"></i>
                </button>
            </div>
      </li>
    )
  }
}

export default ExpenseItem
