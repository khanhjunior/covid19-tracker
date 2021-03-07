import React, { useEffect } from 'react'
import List from '@material-ui/core/List'
import { makeStyles } from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { useDispatch, useSelector } from 'react-redux'
import { getCountry } from '../../slice/CountrySlice'
import { Paper } from '@material-ui/core'

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
    const dispatch = useDispatch()
    const classes = useStyles()

    useEffect(() => {
        dispatch(getCountry())
    }, [dispatch])

    const countryStatus = useSelector((state) => state.countries.list)

    const renderCountryStatus = countryStatus.map((country, index) => (
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
                        {country.cases}
                    </Paper>
                    <Paper
                        style={{
                            backgroundColor: 'RGB(164, 201, 57)',
                        }}
                        className={classes.paper}
                    >
                        {country.recovered}
                    </Paper>
                    {country.deaths !== 0 && (
                        <Paper
                            style={{
                                backgroundColor: 'RGB(189, 189, 189)',
                            }}
                            className={classes.paper}
                        >
                            {country.deaths}
                        </Paper>
                    )}
                </div>
            </ListItem>
        </Paper>
    ))

    return <List>{renderCountryStatus}</List>
}

export default CountryStatusFeature
