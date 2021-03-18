import React from 'react'
import { makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Tanks from './tanks/Tanks'

const styles = makeStyles((_theme) => ({
    root: {
        display: 'flex',
        textAlign: 'center'
    },
    container: {
        width: 800
    },
    grid: {},
    paper: {}
}))

function App() {
    const classes = styles()

    return (
        <div className={classes.root}>
            <Container className={classes.container}>
                <Tanks />
            </Container>
        </div>
    )
}

export default App
