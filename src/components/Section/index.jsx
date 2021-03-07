import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Table from '../Table'
import WorldStatusFeature from '../../features/WorldStatus'
import CountryStatusFeature from '../../features/CountryStatus'
const drawerWidth = 400

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
        padding: '0 15px'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    fixNone: {
        zIndex: '-1',
    },
}))

const Section = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <div>
                        <WorldStatusFeature />
                    </div>
                    <CountryStatusFeature />
                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar />
                <Table />
            </main>
        </div>
    )
}

export default Section