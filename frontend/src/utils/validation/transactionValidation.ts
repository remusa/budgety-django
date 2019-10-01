import * as yup from 'yup'

export const amountVal = yup.number().positive().required('Amount is required!')

export const noteVal = yup
    .string()
    .min(1, 'Note must be at least 1 characters long')
    .max(25, 'Note must be max. 25 characters')
// .required('Note is required')
