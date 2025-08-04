import React from 'react'
import TransactionItem from './TransactionItem'

function Transactions(props) {
    const { expenses } = props
  return (
        <div className="col-md-6">
           <div className="card mt-3">
                <div className="card-header">
                    <h4 className="text-secondary text-center">All Transactions</h4>
                </div>
                <div className="card-body">
                        <ul className="list-group">
                        {
                            expenses?.map((item,index) => {
                                return (
                                    <TransactionItem key={index} {...item} />
                                )
                            })
                        }
                    </ul>
                </div>
           </div>
        </div>
  )
}

export default Transactions
