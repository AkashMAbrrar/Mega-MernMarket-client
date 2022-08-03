import { Box, Button, Typography, styled } from '@mui/material';
import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// componensts
import LoginDialog from '../login/LoginDialog';
import { useState, useContext } from 'react';
import { DataContex } from '../../context/DataProvider';
import Profile from './Profile';


const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '0 3% 0 auto',
    '& > *': {
        marginRight: '40px !important',
        textDecoration: 'none',
        fontSize: '16px',
        height: '32px',
        alignItems: 'center',
    },
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));
const LoginButton = styled(Button)`
  color: Navy;
  background-color: #fff;
  font-weight: bold;
  text-transform: none;
  padding: 5px 20px;
  box-shadow: none;
  margin-left: 5px;
`

const CustomButtons = () => {

    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(DataContex);
    const openDialog = () => {
        setOpen(true);
    }

    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                    <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
            }
            <Typography style={{ marginTop: 3, width: 135 }}>Become a seller</Typography>
            <Typography style={{ marginTop: 3, }}>More</Typography>
            <Container>
                <AddShoppingCartIcon></AddShoppingCartIcon>
                <Typography>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen}></LoginDialog>
        </Wrapper>
    );
};

export default CustomButtons;