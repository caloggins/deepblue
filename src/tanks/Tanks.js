import React from 'react'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const data = [
    { name: 'display', size: 650, type: 'sw' },
    { name: 'hospital', size: 20, type: 'sw' },
    { name: 'planted', size: 40, type: 'fw' }
]

const Tank = ({ name, size, type }) => (
    <>
        <TableRow key={name}>
            <TableCell component="th" scope="row">
                {name}
            </TableCell>
            <TableCell align="right">{size}</TableCell>
            <TableCell align="right">{type}</TableCell>
            <TableCell align="right" />
        </TableRow>
    </>
)

const Tanks = () => (
    <>
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Size</TableCell>
                        <TableCell align="right">Type</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((tank) => (
                        <Tank key={tank.name} name={tank.name} size={tank.size} type={tank.type} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
)

export default Tanks
