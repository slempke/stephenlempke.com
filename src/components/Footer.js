import PropTypes from 'prop-types'
import React from 'react'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
        <p>2020</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
