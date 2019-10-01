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
            const data = await response.json()
            // localStorage.setItem(endpoint, JSON.stringify(data.results))
            return data.results
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}

const postData = async (endpoint: string) => {
    if (localStorage.getItem('token')) {
        try {
            const response = await fetch(`${API_ENDPOINT}${endpoint}`, {
                ...headers,
                method: 'POST',
            })
            const data = await response.json()
            return data.results
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}

export const getExpenses = () => getData(API_EXPENSES)
export const getIncomes = () => getData(API_INCOMES)
export const postExpense = () => postData(API_EXPENSES)
export const postIncome = () => postData(API_INCOMES)
