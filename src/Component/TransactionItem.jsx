import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { deleteTransaction } from '../Redux/Actions/ExpenseAction'

function TransactionItem(props) {
    const { _id, userId, title, amount } = props

    const dispatch = useDispatch()

    const deleteHandler = async (id) => {
        if(window.confirm(`Are you sure to delete transaction?`)) {
            await dispatch(deleteTransaction(id))
                .unwrap()
                .then(res => {
                    toast.success(res.data.msg)
                }).catch(err => toast.error(err.response.data.msg))
        } 
    }

  return (
    <li className="list-group-item d-flex align-items-center justify-content-between">
        <div>
            <p> { title } </p>
            <p> &#8377;  { amount } </p>
        </div>
        <div>
             <NavLink to={`/edit/${_id}`} className="btn btn-sm btn-outline-info me-3">
                    <i className="bi bi-pencil"></i>
             </NavLink>
             <button onClick={() => deleteHandler(_id)} className="btn btn-sm btn-outline-danger">
                 <i className="bi bi-trash"></i>
             </button>
        </div>
    </li>
  )
}

export default TransactionItem
