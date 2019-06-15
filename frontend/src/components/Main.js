import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const MainStyles = styled.section`
    grid-area: main;
`

const API_ENDPOINT = 'http://127.0.0.1:8000/api/'

const list = [
    {
        id: 1,
        title: '1st Item',
        description: 'Description here.',
    },
    {
        id: 2,
        title: '2nd Item',
        description: 'Another description here.',
    },
    {
        id: 3,
        title: '3rd Item',
        description: 'Third description here.',
    },
]

const Main = () => {
    const [expenses, setExpenses] = useState(list)

    // useEffect(() => {
    //     const exp = fetch()

    //     return () => {
    //         effect
    //     };
    // }, [input])

    return (
        <MainStyles className='hero is-primary'>
            <div className='hero-body'>
                <div className='container'>
                    <h1 className='title'>React + Parcel Boilerplate</h1>
                    <h2 className='subtitle'>A simple boilerplate for React apps</h2>

                    {expenses.map(expense => (
                        <div>
                            <h1>{expense.title}</h1>
                            <p>{expense.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </MainStyles>
    )
}

export default Main
