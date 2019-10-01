import styled from '@emotion/styled'
import { ErrorMessage, Field, Form, Formik, FormikActions } from 'formik'
import React from 'react'
import { Redirect } from 'react-router-dom'
import * as yup from 'yup'
import { postExpense, postIncome } from '../../api/fetchData'
import * as ROUTES from '../../constants/routes'
import { useAuth } from '../../context/AuthContext'
import { amountVal, noteVal } from '../../utils/validation/transactionValidation'

const validationSchema = yup.object().shape({
    total: amountVal,
    note: noteVal,
})

const PageStyles = styled.section`
    grid-area: main;
`

interface TransactionProps {}

const TransactionsPage: React.FC<TransactionProps> = () => {
    const { isLogged } = useAuth()

    if (!isLogged) return <Redirect to={ROUTES.LOGIN} />

    return (
        <PageStyles>
            <h1>Transactions Page</h1>

            <h2>Add transaction</h2>

            <FormTransaction />
        </PageStyles>
    )
}

interface ITransaction {
    type?: string
    category?: string
    total?: number
    date?: any | Date | string | number
    note?: string
}

const FormTransaction: React.FC = () => {
    const initialValues = {
        type: 'expense',
        category: 'FOOD_&_DRINK',
        total: 0,
        date: new Date(),
        note: '',
    }

    const handleSubmit = async (
        transaction: ITransaction,
        actions: FormikActions<ITransaction>
    ) => {
        actions.setSubmitting(true)

        const d = transaction.date
        const dateValue: any = new Date(d)

        let res
        if (transaction.type === "expense") {
            res = await postExpense({ ...transaction, date: dateValue })
        } else {
            res = await postIncome({ ...transaction, date: dateValue })
        }

        console.log('res', res)

        await actions.setSubmitting(false)
        // await actions.resetForm()
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values: ITransaction, actions: FormikActions<ITransaction>) => {
                handleSubmit(values, actions)
            }}
        >
            {({ values, dirty, handleChange, handleReset, isSubmitting }) => (
                <Form>
                    <fieldset disabled={isSubmitting}>
                        <div className="field is-horizontal">
                            <label htmlFor="type" className="label">
                                Type
                                <div className="control">
                                    <div className="select">
                                        <Field required name="type" component="select">
                                            <option value="expense">Expense</option>
                                            <option value="income">Income</option>
                                        </Field>
                                        <ErrorMessage
                                            name="type"
                                            component="div"
                                            className="errorMessage"
                                        />
                                    </div>
                                </div>
                            </label>
                        </div>

                        <div className="field is-horizontal">
                            <label htmlFor="category" className="label">
                                Category
                                <div className="control">
                                    <div className="select">
                                        <Field required name="category" component="select">
                                            <option value="FOOD_&_DRINK">Food & Beverages</option>
                                            <option value="EDUCATION">Education</option>
                                            <option value="SALARY">Salary</option>
                                        </Field>
                                    </div>
                                </div>
                            </label>
                        </div>

                        <div className="field is-horizontal">
                            <label htmlFor="total" className="label">
                                Amount
                                <div className="control">
                                    <Field
                                        required
                                        type="number"
                                        name="total"
                                        placeholder="0"
                                        value={values.total}
                                        onChange={handleChange}
                                        className="input"
                                        min="0.01"
                                        // max="99999.99"
                                        step="0.01"
                                    />
                                    <ErrorMessage
                                        name="total"
                                        component="div"
                                        className="errorMessage"
                                    />
                                </div>
                            </label>
                        </div>

                        <div className="field is-horizontal">
                            <label htmlFor="date" className="label">
                                Date
                                <div className="control">
                                    <Field
                                        // required
                                        type="date"
                                        name="date"
                                        className="input"
                                        placeholder="0"
                                        value={values.date}
                                        onChange={handleChange}
                                    />
                                </div>
                            </label>
                        </div>

                        <div className="field is-horizontal">
                            <label htmlFor="note" className="label">
                                Note
                                <div className="control">
                                    <Field
                                        required
                                        type="text"
                                        name="note"
                                        placeholder="Note"
                                        value={values.note}
                                        onChange={handleChange}
                                        className="input"
                                    />
                                </div>
                            </label>
                        </div>

                        <div className="field is-grouped">
                            <div className="control">
                                <button
                                    type="submit"
                                    disabled={!dirty || isSubmitting}
                                    className="button is-success"
                                >
                                    Submit
                                </button>
                            </div>

                            <div className="control">
                                <button
                                    type="button"
                                    disabled={!dirty}
                                    onClick={handleReset}
                                    className="button is-text"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </fieldset>
                </Form>
            )}
        </Formik>
    )
}

export default TransactionsPage
