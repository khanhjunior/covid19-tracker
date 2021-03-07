import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'

const columns = [
    { id: 'country', label: 'Quốc gia', minWidth: 170 },
    { id: 'code', label: 'Mã quốc gia', minWidth: 100 },
    {
        id: 'population',
        label: 'Dân số',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'totalCases',
        label: 'Tổng số ca mắc',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'totalRecovered',
        label: 'Tổng số ca phục hồi',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'totalDeaths',
        label: 'Tổng số người chết',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
]

function createData(country, code, population, totalCases, totalRecovered, totalDeaths) {
    const mortalityRate = totalDeaths / totalCases
    return { country, code, population, totalCases, totalRecovered, totalDeaths, mortalityRate }
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263, 3287263, 3287263, 3287263),
    createData('India', 'IN', 1324171354, 3287263, 3287263, 3287263, 3287263),
    createData('India', 'IN', 1324171354, 3287263, 3287263, 3287263, 3287263),
    createData('India', 'IN', 1324171354, 3287263, 3287263, 3287263, 3287263),
    createData('India', 'IN', 1324171354, 3287263, 3287263, 3287263, 3287263),
    createData('India', 'IN', 1324171354, 3287263, 3287263, 3287263, 3287263),
    createData('India', 'IN', 1324171354, 3287263, 3287263, 3287263, 3287263),
    createData('India', 'IN', 1324171354, 3287263, 3287263, 3287263, 3287263),
    createData('India', 'IN', 1324171354, 3287263, 3287263, 3287263, 3287263),
    createData('India', 'IN', 1324171354, 3287263, 3287263, 3287263, 3287263),
    createData('India', 'IN', 1324171354, 3287263, 3287263, 3287263, 3287263),
    createData('India', 'IN', 1324171354, 3287263, 3287263, 3287263, 3287263),
    createData('India', 'IN', 1324171354, 3287263, 3287263, 3287263, 3287263),
    createData('India', 'IN', 1324171354, 3287263, 3287263, 3287263, 3287263),
    createData('India', 'IN', 1324171354, 3287263, 3287263, 3287263, 3287263),
    createData('India', 'IN', 1324171354, 3287263, 3287263, 3287263, 3287263),
]

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
})

export default function StickyHeadTable() {
    const classes = useStyles()
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column, index) => (
                                <TableCell key={index} align={column.align} style={{ minWidth: column.minWidth }}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                    {columns.map((column, index) => {
                                        const value = row[column.id]
                                        return (
                                            <TableCell key={index} align={column.align}>
                                                {column.format && typeof value === 'number'
                                                    ? column.format(value)
                                                    : value}
                                            </TableCell>
                                        )
                                    })}
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    )
}
