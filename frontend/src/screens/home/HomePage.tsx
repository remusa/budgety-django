import styled from '@emotion/styled'
import nprogress from 'nprogress'
import React, { useEffect, useState } from 'react'
import { getExpenses, getIncomes } from '../../api/fetchData'
import List from '../../components/List'
import Loading from '../../components/Loading'
import { useAuth } from '../../context/AuthContext'
import '../../static/nprogress.css'

const MainStyles = styled.section`
    grid-area: main;
`

const Main: React.FC = () => {
    const [expenses, setExpenses] = useState<any[]>([])
    const [incomes, setIncomes] = useState<any[]>([])
    const { isLogged } = useAuth()

    /* eslint-disable */
    useEffect(() => {
        const fetchData = async () => {
            nprogress.start()

            const exp = await getExpenses()
            setExpenses(exp)

            const inc = await getIncomes()
            setIncomes(inc)

            await nprogress.done()
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
