import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { API_ENDPOINT } from '../config'

const MainStyles = styled.section`
    grid-area: main;

    height: 100vh;
`

const list = [
    {
        id: 1,
        total: 123.45,
        category: 'ENTERTAINMENT',
        note: '1st Item',
        date: 'Wednesday',
    },
    {
        id: 2,
        total: 223.45,
        category: 'ENTERTAINMENT',
        note: '2nd Item',
        date: 'Thursday',
    },
    {
        id: 3,
        note: '3rd Item',
        category: 'ENTERTAINMENT',
        total: 323.45,
        date: 'Friday',
    },
]

const Main = () => {
    const [expenses, setExpenses] = useState(list)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Token ${localStorage.getItem('token')}`,
                    },
                }
                const response = await fetch(`${API_ENDPOINT}/expenses/`, options)
                const data = await response.json()
                setExpenses(data.results)
            } catch (e) {
                console.log(`ERROR: ${e.message}`)
            }
        }

        fetchData()
    }, [])

    return (
        <MainStyles className='hero is-primary'>
            <div className='hero-body'>
                <div className='container'>
                    <h1 className='title'>Budgety</h1>
                    <h2 className='subtitle'>Expenses</h2>

                    {expenses.map(expense => (
                        <div key={expense.id}>
                            <h2>{expense.note}</h2>
                            <p>{expense.category}</p>
                            <p>{expense.total}</p>
                            <p>{expense.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </MainStyles>
    )
}

export default Main
