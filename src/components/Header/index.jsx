import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import AdbIcon from '@material-ui/icons/Adb'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import ErrorIcon from '@material-ui/icons/Error'

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

const Header = () => {
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
                zIndex: '100000'
            }}
        >
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <AdbIcon />
                    </IconButton>
                    <Typography variant="h1" className={classes.title}>
                        Diễn biến dịch COVID-19
                    </Typography>
                    
                    <Typography variant="body2">Cập nhật lần cuối: 11:47 3/7/2021</Typography>
                    <Button onClick={handleClickOpen} color="inherit">
                        <ErrorIcon className={classes.notiButton} />
                    </Button>
                </Toolbar>
            </AppBar>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Lưu ý</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Dữ liệu được thu thập từ nhiều nguồn cập nhật vào những thời điểm khác nhau và có thể không phải
                        lúc nào cũng phù hợp. Một số khu vực có thể không cung cấp bảng phân tích đầy đủ về số liệu
                        thống kê liên quan đến COVID-19.
                    </DialogContentText>
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
