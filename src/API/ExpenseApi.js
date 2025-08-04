import axios from 'axios'

const axiosIns = axios.create({
     baseURL: "https://expense-tracker-api-gi5q.onrender.com",
     headers: {
        Authorization: sessionStorage.getItem("token")
     }
})

const ExpenseApi = {
    create: async (transaction) => {
        return axiosIns.request({
            method: "POST",
            url: `/api/transaction/add`,
            data: transaction
        }) 
    },
    readAll: async () => {
        return axiosIns.request({
            method: "GET",
            url: `/api/transaction/all`
        })
    },
    readSingle:  async (id) => {
        return axiosIns.request({
            method: "GET",
            url: `/api/transaction/single/${id}`
        })
    },
    update:  async ({ id, transaction }) => {
        return axiosIns.request({
            method: "PATCH",
            url: `/api/transaction/update/${id}`,
            data: transaction
        })
    },
    delete:  async (id) => {
        return axiosIns.request({
            method: "DELETE",
            url: `/api/transaction/delete/${id}`
        })
    }
}

export default ExpenseApi