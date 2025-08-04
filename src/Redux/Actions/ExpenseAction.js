import { createAsyncThunk } from "@reduxjs/toolkit";
import ExpenseApi from "../../API/ExpenseApi";

// action const and methods

// adding transaction
export const addTransaction = createAsyncThunk("transaction/add", async (transaction) => {
    // logic
    const res = await ExpenseApi.create(transaction)
    return res.data
})

// read all transaction
export const allTransaction = createAsyncThunk("transaction/all", async () => {
    // logic
    const res = await ExpenseApi.readAll()
    return res.data.transactions
})


// edit transaction
export const updateTransaction = createAsyncThunk("transaction/update", async ({transaction,id}) => {
    // logic
    const res = await ExpenseApi.update({ id, transaction })
    return { id, data: res.data, transaction }
})


// delete transaction
export const  deleteTransaction = createAsyncThunk("transaction/delete", async (id) => {
    // logic
    const res = await ExpenseApi.delete(id)
    return { id, data: res.data }
})
