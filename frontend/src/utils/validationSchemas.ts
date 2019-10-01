import * as yup from 'yup'

export const amountVal = yup.number().required('Amount is required!')

export const noteVal = yup
    .string()
    .min(1, 'Note must be at least 1 characters long')
    .max(25, 'Note must be max. 25 characters')
    .required('Note is required')

export const usernameValidation = yup
    .string()
    .min(3, 'Username must be at least 3 characters long')
    .max(25, 'Username must be max. 25 characters')
    .required('Username is required')

export const emailValidation = yup
    .string()
    .email('Invalid email')
    .required('Email is required')

export const passwordValidation = yup
    .string()
    .min(10, 'Password must be at least 10 characters long')
    .max(25, 'Password must be max. 25 characters')
    // .matches(
    //     /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{10,}$/,
    //     'Must Contain 10 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    // )
    .required('Password is required')

export const confirmPasswordValidation = yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required')
