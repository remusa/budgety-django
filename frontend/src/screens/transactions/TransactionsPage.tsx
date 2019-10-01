import styled from '@emotion/styled'
import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import { useAuth } from '../../context/AuthContext'

const PageStyles = styled.section`
    grid-area: main;
`

interface TransactionProps {}

const TransactionsPage: React.FC<TransactionProps> = () => {
    const { isLogged } = useAuth()

    if (!isLogged) return <Redirect to={ROUTES.LOGIN} />

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <PageStyles>
            <h1>Transactions Page</h1>

            <h2>Add expense</h2>

            <FormTransaction />
        </PageStyles>
    )
}

interface TransactionProps {}

const FormTransaction: React.FC = () => {
    const [transactionType, setTransactionType] = useState<string>("expense")

    const handleSelectChange = (e: any) => {
        e.preventDefault()
    }

    return (
        <form>
            <fieldset>
                <div className="field is-horizontal">
                    <label className="label">
                        Type
                        <div className="control">
                            <div className="select">
                                <select>
                                    <option>Expense</option>
                                    <option>Income</option>
                                </select>
                            </div>
                        </div>
                    </label>
                </div>

                <div className="field is-horizontal">
                    <label className="label">
                        Category
                        <div className="control">
                            <div className="select">
                                <select>
                                    <option>Select dropdown</option>
                                    <option>With options</option>
                                </select>
                            </div>
                        </div>
                    </label>
                </div>

                <div className="field is-horizontal">
                    <label className="label">
                        Amount
                        <div className="control">
                            <input
                                className="input"
                                type="number"
                                placeholder="0"
                                min="0.01"
                                max="10000.00"
                                step="0.01"
                            />
                        </div>
                    </label>
                </div>

                <div className="field is-horizontal">
                    <label className="label">
                        Date
                        <div className="control">
                            <input className="input" type="date" placeholder="0" />
                        </div>
                    </label>
                </div>

                <div className="field is-horizontal">
                    <label className="label">
                        Note
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                placeholder="Note"
                                style={{textTransform: "uppercase"}}
                            />
                        </div>
                    </label>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-success">Submit</button>
                    </div>
                    <div className="control">
                        <button className="button is-text">Cancel</button>
                    </div>
                </div>
            </fieldset>
        </form>
    )
}

export default TransactionsPage
