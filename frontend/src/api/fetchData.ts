import { API_ENDPOINT } from '../config'

const basicOptions = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
    },
}

const fetchData = async (endpoint: string) => {
    if (localStorage.getItem('token')) {
        try {
            const response = await fetch(`${API_ENDPOINT}/${endpoint}/`, {
                ...basicOptions,
                method: 'GET',
            })
            const data = await response.json()
            return data.results
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}

const postData = async (endpoint: string) => {
    if (localStorage.getItem('token')) {
        try {
            const response = await fetch(`${API_ENDPOINT}/${endpoint}/`, {
                ...basicOptions,
                method: 'POST',
            })
            const data = await response.json()
            return data.results
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}

export const fetchExpenses = () => fetchData('expenses')
export const fetchIncomes = () => fetchData('incomes')
export const postExpense = () => postData('expenses')
export const postIncome = () => postData('incomes')
