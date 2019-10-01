import styled from '@emotion/styled'
import nprogress from 'nprogress'
import React, { useEffect, useState } from 'react'
import { getExpenses, getIncomes } from '../../api/fetchData'
import { useAuth } from '../../context/AuthContext'
import '../../static/nprogress.css'
import List from '../List'
import Loading from '../Loading'

const MainStyles = styled.section`
    grid-area: main;
`

const Main = () => {
    const [expenses, setExpenses] = useState([])
    const [incomes, setIncomes] = useState([])
    const { isLogged } = useAuth()

    /* eslint-disable */
    useEffect(() => {
        const fetchData = async () => {
            nprogress.start()
            setExpenses(await getExpenses())
            setIncomes(await getIncomes())
            nprogress.done()
        }

        fetchData()
    }, [])
    /* eslint-enable */

    return (
        <MainStyles className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Budgety</h1>

                    <h2 className="subtitle">Expenses</h2>
                    {isLogged && (expenses ? <List data={expenses} /> : <Loading />)}

                    <hr />

                    <h2 className="subtitle">Incomes</h2>
                    {isLogged && (incomes ? <List data={incomes} /> : <Loading />)}
                </div>
            </div>
        </MainStyles>
    )
}

export default React.memo(Main)
