import { API_ENDPOINT } from '../config'

const fetchData = async endpoint => {
    if (localStorage.getItem('token')) {
        try {
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${localStorage.getItem('token')}`,
                },
            }
            const response = await fetch(`${API_ENDPOINT}/${endpoint}/`, options)
            const data = await response.json()
            return data.results
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}

export const fetchExpenses = () => fetchData('expenses')

export const fetchIncomes = () => fetchData('incomes')
