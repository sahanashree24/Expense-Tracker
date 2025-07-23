import React, { Component } from 'react'

export class Display extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
      <div className="dashboard">
          <div className="dashboardTop">
              <div className="dashboardTopLeft">
                <p>Your Balance</p>
                <h1 className='balance'> &#8377; { this.props.balance } </h1>
              </div>
          </div>
          <div className="dashboardBottom">
            <div className="dashboardBottomLeft">
                <p>Income</p>
                <h1 className='income'> &#8377; { this.props.income } </h1>
            </div>
            <div className="dashboardBottomRight">
                <p>Expense</p>
                <h1 className="expense"> &#8377; { this.props.expense } </h1>
            </div>
          </div>
      </div>
    )
  }
}

export default Display
