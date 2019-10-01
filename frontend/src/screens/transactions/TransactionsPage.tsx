import styled from '@emotion/styled'
import React from 'react'
import { Redirect } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import { useAuth } from '../../context/AuthContext'

const PageStyles = styled.section`
    grid-area: main;
`

interface Props {}

const TransactionsPage: React.FC<Props> = () => {
    const { isLogged, login } = useAuth()

    if (!isLogged) return <Redirect to={ROUTES.LOGIN} />

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <PageStyles>
            <div>
                <h1>Transactions Page</h1>
            </div>
        </PageStyles>
    )
}

export default TransactionsPage
