import { API_ENDPOINT, API_INCOMES } from '../constants/constants'
import { API_EXPENSES } from './../constants/constants'

const headers = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
    },
}

const getData = async (endpoint: string) => {
    if (localStorage.getItem('token')) {
        const response = await fetch(`${API_ENDPOINT}/${endpoint}`, {
            ...headers,
            method: 'GET',
        }).catch(e => {
            console.log(`ERROR: ${e.message}`)
            return
        })

        if (response) {
            const res = await response.json()
            console.log('Response:', JSON.stringify(res))
            return res.results
        }
    }
}

const postData = async (endpoint: string, data: object) => {
    if (localStorage.getItem('token')) {
        const response: void | Response = await fetch(`${API_ENDPOINT}/${endpoint}`, {
            ...headers,
            method: 'POST',
            body: JSON.stringify(data),
        }).catch(e => {
            console.log(`ERROR: ${e.message}`)
            return
        })

        if (response) {
            const res = await response.json()
            console.log('Response:', JSON.stringify(res))
        }
    }
}

export const getExpenses = () => getData(API_EXPENSES)
export const getIncomes = () => getData(API_INCOMES)
export const postExpense = (data: object) => postData(API_EXPENSES, data)
export const postIncome = (data: object) => postData(API_INCOMES, data)
