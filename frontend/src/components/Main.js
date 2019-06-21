import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import nprogress from 'nprogress'
import { useAuth } from '../context/AuthContext'
import '../static/nprogress.css'
import List from './List'
import Loading from './Loading'
import { fetchExpenses, fetchIncomes } from '../api/fetchData'

const MainStyles = styled.section`
    grid-area: main;
`

const Main = () => {
    const [expenses, setExpenses] = useState(null)
    const [incomes, setIncomes] = useState(null)
    const { isLogged } = useAuth()

    /* eslint-disable */
    useEffect(() => {
        const fetchData = async () => {
            nprogress.start()
            setExpenses(await fetchExpenses())
            setIncomes(await fetchIncomes())
            nprogress.done()
        }
        fetchData()
    }, [])
    /* eslint-enable */

    return (
        <MainStyles className='hero is-primary'>
            <div className='hero-body'>
                <div className='container'>
                    <h1 className='title'>Budgety</h1>

                    <h2 className='subtitle'>Expenses</h2>
                    {isLogged && (expenses ? <List data={expenses} /> : <Loading />)}

                    <hr />

                    <h2 className='subtitle'>Incomes</h2>
                    {isLogged && (incomes ? <List data={incomes} /> : <Loading />)}
                </div>
            </div>
        </MainStyles>
    )
}

export default Main
