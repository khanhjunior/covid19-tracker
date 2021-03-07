import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}))

const SortCountry = ({ countryStatus, onHandleSort }) => {
    const classes = useStyles()
    const [sortValue, setSortValue] = React.useState('')
    const [open, setOpen] = React.useState(false)

    const handleChange = (event) => {
        const valueSort = event.target.value

        if (onHandleSort) {
            onHandleSort(valueSort)
            setSortValue(valueSort)
        }
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Sắp xếp</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={sortValue || 'byCases'}
                    onChange={handleChange}
                >
                    <MenuItem value="byName">Theo tên</MenuItem>
                    <MenuItem value="byCases">Theo tổng số ca</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default SortCountry