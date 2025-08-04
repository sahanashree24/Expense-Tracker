import React from 'react'

function Display(props) {
    const { balance, income, expense } = props
  return (
          <div className="col-md-6">
              <div className="card mt-4">
                <div className="card-body">
                   <div className="row">
                      <div className="col-md-12 text-start text-info">
                          <h4>Your balance</h4>
                          <h2>&#8377; {balance} </h2>
                      </div>
                   </div>
                   <div className="row mt-3">
                      <div className="col-md-6 text-start text-success">
                          <h4>Your Income</h4>
                          <h2>&#8377; {income} </h2>
                      </div>
                      <div className="col-md-6 text-end text-danger">
                          <h4>Your Expense</h4>
                          <h2>&#8377; {expense} </h2>
                      </div>
                   </div>
                </div>
              </div>
          </div>
  )
}

export default Display
