import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import { useSelector } from 'react-redux'
import { formatNumber } from 'utils/formatNumber'
import Filter from 'components/Filter'

const columns = [
    { id: 'country', label: 'Quốc gia', minWidth: 70 },
    { id: 'code', label: 'Mã quốc gia', minWidth: 100 },
    {
        id: 'population',
        label: 'Dân số',
        minWidth: 70,
        align: 'right',
        format: (value) => formatNumber(value),
    },
    {
        id: 'totalCases',
        label: 'Tổng số ca mắc',
        minWidth: 70,
        align: 'right',
        format: (value) => formatNumber(value),
    },
    {
        id: 'totalRecovered',
        label: 'Tổng số ca phục hồi',
        minWidth: 70,
        align: 'right',
        format: (value) => formatNumber(value),
    },
    {
        id: 'totalDeaths',
        label: 'Tổng số người chết',
        minWidth: 70,
        align: 'right',
        format: (value) => formatNumber(value),
    },
    {
        id: 'mortalityRate',
        label: 'Tỉ lệ tử vong',
        minWidth: 70,
        align: 'right',
        format: (value) => `${value.toFixed(2)}%`,
    },
]

const createData = (country, code, population, totalCases, totalRecovered, totalDeaths) => {
    const mortalityRate = (totalDeaths / totalCases) * 100

    return { country, code, population, totalCases, totalRecovered, totalDeaths, mortalityRate }
}

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 800,
    },
})

const TableFeature = () => {
    const classes = useStyles()
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(25)
    const [valueFilter, setValueFilter] = useState('World')

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    const countryStatus = useSelector((state) => state.countries.list)

    const renderCountryStatus = countryStatus
        .filter((country) => {
            return valueFilter === 'World' || country.continent === valueFilter
        })
        .map((country, index) => {
            return createData(
                country.country,
                country.countryInfo.iso2,
                country.population,
                country.cases,
                country.recovered,
                country.deaths
            )
        })

    const handleFilterChangle = (valueFilter) => {
        setValueFilter(valueFilter)
        setPage(0)
        setRowsPerPage(25)
    }

    return (
        <div>
            <Filter onHandleFilterChange={handleFilterChangle} />
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
                            {renderCountryStatus
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
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
                    rowsPerPageOptions={[25, 50, 100]}
                    component="div"
                    count={renderCountryStatus.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    )
}

export default TableFeature
