import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AdbIcon from '@material-ui/icons/Adb'
import ErrorIcon from '@material-ui/icons/Error'
import React, { useState } from 'react'

const appBarStyle = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontSize: '1.3rem',
    },
    notiButton: {
        transform: 'rotate(180deg)',
    },
}))

const Header = ({ title, copy, warningTooltip }) => {
    const classes = appBarStyle()
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div
            style={{
                position: 'fixed',
                width: '100%',
                zIndex: '100000',
            }}
        >
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <AdbIcon />
                    </IconButton>
                    <Typography variant="h1" className={classes.title}>
                        {title}
                    </Typography>
                    <Typography variant="body2">{copy}</Typography>
                    <Button onClick={handleClickOpen} color="inherit">
                        <ErrorIcon className={classes.notiButton} />
                    </Button>
                </Toolbar>
            </AppBar>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Lưu ý</DialogTitle>
                <DialogContent>
                    <DialogContentText>{warningTooltip}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Đóng
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Header
