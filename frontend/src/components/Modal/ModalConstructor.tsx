import React, { useState } from 'react'

enum MODAL_TYPE {
    TRANSACTION = 'TRANSACTION',
}

interface IModalConductor {
    modalType: string
}

const ModalConductor: React.FC<IModalConductor> = props => {
    // const [modalType, setModalType] = useState<string>(props.modalType)
    const { modalType } = props

    if (modalType === MODAL_TYPE.TRANSACTION) {
        console.log(modalType)
        return (
            <Modal>
                <div>Modal test</div>
            </Modal>
        )
    }

    return null
}

interface Props {
    children: React.ReactNode
}

const Modal: React.FC<Props> = props => {
    const [visible, setVisible] = useState<boolean>(false)

    const toggleModal = () => {
        console.log('isModalToggled', visible)
        setVisible(!visible)
    }

    return (
        <></>
        // <div class="modal">
        //     <div class="modal-background"></div>

        //     <div class="modal-content">{props.children}}</div>

        //     <button class="modal-close is-large" aria-label="close" />
        // </div>
    )
}

export default ModalConductor
