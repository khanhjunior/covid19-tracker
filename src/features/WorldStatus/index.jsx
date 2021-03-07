import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { getWorld } from '../../slice/WorldStatusSlice'
import { useFormatNumber } from '../../hooks/useFormatNumber'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(5),
        },
    },
    title: {
        fontSize: '1.2rem',
        textAlign: 'center',
        marginTop: '20px',
    },
    paper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
    },
    paperWorld: {
        padding: '10px 15px',
    },
    keyIn: {
        padding: '3px 5px',
        borderRadius: '4px',
        color: '#fff',
        marginLeft: '3px',
    },
}))

const WorldStatusFeature = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getWorld())
    }, [dispatch])

    const worldStatus = useSelector((state) => state.all.list)

    const worldCases = useFormatNumber(worldStatus.cases)
    const worldRecovered = useFormatNumber(worldStatus.recovered)
    const worldDeaths = useFormatNumber(worldStatus.deaths)

    return (
        <div
            style={{
                padding: '30px 0 30px 0',
            }}
        >
            <Typography className={classes.title} variant="h3">
                Số ca nhiễm theo quốc gia ({worldStatus.affectedCountries} quốc gia)
            </Typography>
            <div className={classes.root}>
                <Paper
                    style={{
                        backgroundColor: 'RGB(189, 33, 48)',
                    }}
                    className={classes.paper}
                >
                    Nhiễm bệnh
                </Paper>
                <Paper
                    style={{
                        backgroundColor: 'RGB(164, 201, 57)',
                    }}
                    className={classes.paper}
                >
                    Bình phục
                </Paper>
                <Paper
                    style={{
                        backgroundColor: 'RGB(189, 189, 189)',
                    }}
                    className={classes.paper}
                >
                    Tử vong
                </Paper>
            </div>
            <div>
                <Typography className={classes.title} variant="h4">
                    Thế giới
                </Typography>
                <Paper className={classes.paperWorld} elevation={1}>
                    Số người nhiễm:
                    <span
                        style={{
                            backgroundColor: 'RGB(189, 33, 48)',
                        }}
                        className={classes.keyIn}
                    >
                        {worldCases}
                    </span>
                </Paper>
                <Paper className={classes.paperWorld} elevation={1}>
                    Bình phục:
                    <span
                        style={{
                            backgroundColor: 'RGB(164, 201, 57)',
                        }}
                        className={classes.keyIn}
                    >
                        {worldRecovered}
                    </span>
                </Paper>
                <Paper className={classes.paperWorld} elevation={1}>
                    Tử vong:
                    <span
                        style={{
                            backgroundColor: 'RGB(189, 189, 189)',
                        }}
                        className={classes.keyIn}
                    >
                        {worldDeaths}
                    </span>
                </Paper>
            </div>
        </div>
    )
}

export default WorldStatusFeature
