import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Component } from 'react'
import { DotLoader } from 'react-spinners'
import styled from '@emotion/styled'

const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'var(--color-primary-darker)',
}

const ContainerStyles = styled.div`
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
`

const StyledP = styled.p`
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    color: var(--color-primary-darker);
`

const Loading = props => {
    const [text, setText] = useEffect(props.text)
    const speed = {props}
    const [loading, setLoading] = useEffect(true)

    useEffect(() => {
        const stopper = `${text}...`

        const interval = window.setInterval(() => {
            if (text === stopper) {
                setText(props.text)
            } else {
                setText(text.concat('.'))
            }
        }, speed)

        return () => {
            if (interval) {
                window.clearInterval(interval)
            }
        }
    }, [props.text, setText, speed, text])

    return (
        <ContainerStyles>
            <div className="sweet-loading">
                <DotLoader
                    css={override}
                    sizeUnit="px"
                    size={100}
                    // height={8}
                    color="var(--color-primary-darker)"
                    loading={loading}
                />
            </div>

            <StyledP>{text}</StyledP>
        </ContainerStyles>
    )
}

Loading.defaultProps = {
    text: 'Loading',
    speed: 300,
}

Loading.propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
}

export default Loading
