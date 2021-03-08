import React, { useEffect, useState } from 'react'
import List from '@material-ui/core/List'
import { makeStyles } from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { useDispatch, useSelector } from 'react-redux'
import { getCountry } from '../../slice/CountrySlice'
import { Paper } from '@material-ui/core'
import SortCountry from 'components/SortCountry'
import { formatNumber } from 'utils/formatNumber'
import Loading from 'components/Loading'

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        marginRight: '5px',
        padding: '3px 5px',
    },
}))

const CountryStatusFeature = () => {
    const [sortBy, setSortBy] = useState('')

    const dispatch = useDispatch()
    const classes = useStyles()

    useEffect(() => {
        dispatch(getCountry())
    }, [dispatch])

    const handleChangeSort = (valueSort) => {
        if (valueSort) {
            setSortBy(valueSort)
        }
    }

    const countryStatus = useSelector((state) => state.countries.list)
    const isCountry = useSelector((state) => state.countries.status)

    const sortCountryStatus = countryStatus.slice().sort((a, b) => {
        return sortBy === 'byName' ? a.country - b.country : b.cases - a.cases
    })

    const renderCountryStatus = sortCountryStatus.map((country, index) => {
        const countryCases = formatNumber(country.cases)
        const countryRecovered = formatNumber(country.recovered)
        const countryDeaths = formatNumber(country.deaths)

        return (
            <Paper key={index} style={{ marginBottom: '10px' }} elevation={0}>
                <ListItem button key={index}>
                    <ListItemIcon style={{ marginRight: '-20px' }}>
                        <img width="18" height="13" src={country.countryInfo.flag} alt={country.country} />
                    </ListItemIcon>
                    <ListItemText>{country.country}</ListItemText>
                    <div style={{ display: 'flex' }}>
                        <Paper
                            style={{
                                backgroundColor: 'RGB(189, 33, 48)',
                            }}
                            className={classes.paper}
                        >
                            {countryCases}
                        </Paper>
                        <Paper
                            style={{
                                backgroundColor: 'RGB(164, 201, 57)',
                            }}
                            className={classes.paper}
                        >
                            {countryRecovered}
                        </Paper>
                        {countryDeaths !== 0 && (
                            <Paper
                                style={{
                                    backgroundColor: 'RGB(189, 189, 189)',
                                }}
                                className={classes.paper}
                            >
                                {countryDeaths}
                            </Paper>
                        )}
                    </div>
                </ListItem>
            </Paper>
        )
    })

    return (
        <div style={{ height: '100vh'}}>
            {isCountry !== 'success' ? (
                <Loading />
            ) : (
                <React.Fragment>
                    <SortCountry onHandleSort={handleChangeSort} countryStatus={countryStatus} />
                    <List>{renderCountryStatus}</List>
                </React.Fragment>
            )}
        </div>
    )
}

export default CountryStatusFeature
