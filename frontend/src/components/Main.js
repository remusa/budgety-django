import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

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

const API_ENDPOINT = 'http://127.0.0.1:8000/api/v1'

const Main = () => {
    const [expenses, setExpenses] = useState(list)

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`http://127.0.0.1:8000/api/expenses/`)
                console.log(`${res}`)
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
                    <h1 className='title'>React + Parcel Boilerplate</h1>
                    <h2 className='subtitle'>A simple boilerplate for React apps</h2>

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
