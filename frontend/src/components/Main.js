import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { API_ENDPOINT } from '../config'

const MainStyles = styled.section`
    grid-area: main;

    /* height: 100vh; */
`

const Main = () => {
    const [expenses, setExpenses] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            if (localStorage.getItem('token')) {
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
        }

        fetchData()
    }, [])

    return (
        <MainStyles className='hero is-primary'>
            <div className='hero-body'>
                <div className='container'>
                    <h1 className='title'>Budgety</h1>
                    <h2 className='subtitle'>Expenses</h2>

                    {expenses &&
                        expenses.map(expense => (
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
