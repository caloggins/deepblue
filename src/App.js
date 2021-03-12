import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import './App.css'

function App() {
    return (
        <div className="App">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper>
                        <div>Hello, world.</div>
                        <div>learn react</div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default App
