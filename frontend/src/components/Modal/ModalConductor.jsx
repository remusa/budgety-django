import React from 'react'
import TransactionModal from './TransactionModal'

const ModalConductor = props => {
    console.log('currentModal', props.currentModal)

    switch (props.currentModal) {
        case 'TRANSACTION':
            return <TransactionModal {...props} />

        default:
            return null
    }
}

export default ModalConductor
