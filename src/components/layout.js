import React from 'react'
import './base.css'
import Container from './container'
import Navigation from './Navigation/Navigation'

class Template extends React.Component {
    render() {
        const { location, children } = this.props

        let rootPath = `/`
        if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
            rootPath = __PATH_PREFIX__ + `/`
        }

        return (
            <Container>
                <Navigation />
                {children}
            </Container>
        )
    }
}

export default Template
