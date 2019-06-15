import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.div`
    grid-area: footer;

    width: 100vw;
`

const Footer = () => (
    <FooterStyles>
        <footer className='footer'>
            <div className='content has-text-centered'>
                <p>
                    <strong>Bulma</strong> by <a href='https://jgthms.com'>Jeremy Thomas</a>. The
                    source code is licensed
                    <a href='http://opensource.org/licenses/mit-license.php'>MIT</a>. The website
                    content is licensed{' '}
                    <a href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>CC BY NC SA 4.0</a>.
                </p>
            </div>
        </footer>
    </FooterStyles>
)

export default Footer
