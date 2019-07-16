import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.div`
    grid-area: footer;

    width: 100vw;
`

const Footer: React.FC = () => (
    <FooterStyles>
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <strong>Budgety</strong> by{' '}
                    <a target="_blank" rel="noopener noreferrer" href="https://renems.com">
                        R Sánchez
                    </a>
                    <a href="http://github.com/remusa/budgety" />.
                </p>
            </div>
        </footer>
    </FooterStyles>
)

export default React.memo(Footer)
