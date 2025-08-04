import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import ExpenseApi from '../API/ExpenseApi';
import { useParams, useNavigate } from 'react-router-dom';
import { updateTransaction } from '../Redux/Actions/ExpenseAction';
import { useDispatch } from 'react-redux';

function Update(props) {
  const [transaction,setTransaction] = useState({
     title: "",
     amount: 0
  })

  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const readData = async () => {
      await ExpenseApi.readSingle(params.trnsId)
        .then(res => {
          setTransaction(res.data.transaction)
        }).catch(err => toast.error(err.response.data.msg))
  }

  useEffect(() => {
    readData()
  },[])


  const readInput = async (e) => {
      const { name,value } = e.target;
      setTransaction({...transaction, [name]:value })
  } 

  const submitHandler = async (e) => {
      e.preventDefault()
      try {
        console.log(`data =`, transaction)
        await dispatch(updateTransaction({id: params.trnsId, transaction }))
              .unwrap()
              .then(res => {
                toast.success(res.data.msg)
                navigate(`/`)
              }).catch(err => toast.error(err.response.data.msg))
      } catch (err) {
        toast.error(err.message)
      }
  }

  return (
    <div className='container'>
        <div className="row mt-3">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header text-center">
                <h3 className="text-secondary card-title">
                    Update Transaction
                </h3>
              </div>
              <div className="card-body">
                  <form onSubmit={submitHandler} method='post' autoComplete='off'>
                    <div className="form-group mt-2">
                        <label htmlFor="title">Transaction Title</label>
                        <input type="text" name="title" value={transaction.title} onChange={readInput} id="title" className="form-control" required placeholder="title" />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="amount">Transaction Amount</label>
                        <input type="number" name="amount" value={transaction.amount} onChange={readInput} id="amount" className="form-control" required placeholder="amount in rupees" />
                    </div>
                    <div className="form-group mt-2">
                      <input type="submit" value="Update transaction" className="btn btn-outline-secondary" />
                    </div>
                  </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Update
