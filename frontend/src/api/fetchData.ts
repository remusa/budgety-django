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
        try {
            const response = await fetch(`${API_ENDPOINT}${endpoint}`, {
                ...headers,
                method: 'GET',
            })
            const res = await response.json()
            return res.results
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}

const postData = async (endpoint: string, data: object) => {
    if (localStorage.getItem('token')) {
        try {
            const response = await fetch(`${API_ENDPOINT}${endpoint}`, {
                ...headers,
                method: 'POST',
                body: JSON.stringify(data),
            })
            const res = await response.json()
            console.log('Response:', JSON.stringify(res))
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}

export const getExpenses = () => getData(API_EXPENSES)
export const getIncomes = () => getData(API_INCOMES)
export const postExpense = (data: object) => postData(API_EXPENSES, data)
export const postIncome = (data: object) => postData(API_INCOMES, data)
