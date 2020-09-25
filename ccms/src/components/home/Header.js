import { Menu, MenuItem, Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Notifications, Person } from '@material-ui/icons/';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Header = (props) => {
    const [anchorEl, open] = useState(null);

    const handleClick = event => {
        open(event.currentTarget);
    };

    const handleClose = () => {
        open(null);
    };

    const [isOpen, setOpen] = useState(false);

    const openAlert = () => {
        setOpen(true);
    };

    const closeAlert = () => {
        setOpen(false);
    };

    const navigationType = useSelector(state => {
        console.log("*** state is ", state)
        return state.navigation.title
    })

    const dispatch = useDispatch();

    const logoutClicked = () => {
        console.log("Login Clicked");
        dispatch({
            type: "SIGN_IN",
            payload: 1
        })
    }

    const showConfirmAlert = () => {
        handleClose();
        openAlert();
    }

    return (
        <div className='RightHeader'>
            <div className='HeaderText'>
                <h5>{navigationType}</h5>
            </div>
            <div className='HeaderNotification'>
                <Notifications />
            </div>
            <div className='HeaderProfile'>
                <Person onClick={handleClick}></Person>
            </div>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose} >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={showConfirmAlert}>Logout</MenuItem>
            </Menu>

            <Dialog
                open={isOpen}
                onClose={closeAlert}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Logout"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to logout?.
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeAlert} color="primary">No</Button>
                    <Button onClick={logoutClicked} color="primary" autoFocus>Yes</Button>
                </DialogActions>
            </Dialog>
        </div>
    );

}

export default Header;
