import React from 'react'
import ModalWrapper from './ModalWrapper'

const TransactionModal = props => {
    const signIn = provider => {
        props.hideModal()
        props.signIn(provider)
    }

    return (
        <ModalWrapper {...props} title="Sign in" width={400} showOk={false}>
            <p>Choose your flavor</p>
            <button onClick={() => signIn('facebook')}>Facebook</button>
            <button onClick={() => signIn('google')}>Google</button>
            <button onClick={() => signIn('twitter')}>Twitter</button>
        </ModalWrapper>
    )
}

// const TransactionModal = props => {
//     const [visible, setVisible] = useState(false)

//     const toggleModal = () => {
//         console.log('isModalToggled', visible)
//         setVisible(!visible)
//     }

//     return (
//         <div class="modal">
//             <div class="modal-background"></div>

//             <div class="modal-content">{props.children}}</div>

//             <button class="modal-close is-large" aria-label="close" />
//         </div>
//     )
// }

export default TransactionModal
