import { API_ENDPOINT } from '../constants/constants'

const basicOptions = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
    },
}

const getData = async (endpoint: string) => {
    if (localStorage.getItem('token')) {
        try {
            const response = await fetch(`${API_ENDPOINT}/${endpoint}`, {
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
            const response = await fetch(`${API_ENDPOINT}/${endpoint}`, {
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

export const getExpenses = () => getData('expenses')
export const getIncomes = () => getData('incomes')
export const postExpense = () => postData('expenses')
export const postIncome = () => postData('incomes')
