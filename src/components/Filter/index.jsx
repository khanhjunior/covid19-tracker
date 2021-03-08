import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import './Filter.scss'

const useStyles = makeStyles({
    root: {
        display: 'inline-block',
        alignItems: 'center',
        height: 'unset',
    },
})

const Filter = ({ onHandleFilterChange }) => {
    const classes = useStyles()
    const [value, setValue] = useState('World')
    
    const handleFilterChange = (event, newValue) => {
        setValue(newValue)
        
        if (onHandleFilterChange) {
            onHandleFilterChange(newValue)
        }
    }

    return (
        <BottomNavigation
            value={value}
            onChange={handleFilterChange}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction value="World" label="Tất cả" />
            <BottomNavigationAction value="Europe" label="Châu âu" />
            <BottomNavigationAction value="North America" label="Bắc mỹ" />
            <BottomNavigationAction value="Asia" label="Châu á"/>
            <BottomNavigationAction value="South America" label="Nam phi" />
            <BottomNavigationAction value="Africa" label="Châu phi" />
            <BottomNavigationAction value="Australia/Oceania" label="Châu đại dương" />
        </BottomNavigation>
    )
}

export default Filter
