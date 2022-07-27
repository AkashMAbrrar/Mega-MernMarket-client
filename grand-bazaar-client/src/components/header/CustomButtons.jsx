import { Box, Button, Typography, styled } from '@mui/material';
import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// componensts
import LoginDialog from '../login/LoginDialog';
import { useState, useContext } from 'react';
import { DataContex } from '../../context/DataProvider';


const Wrapper = styled(Box)`
 display: flex;
 margin: 0 3% 0 auto;
 & > button, & > p, & > div {
    margin-right: 40px;
    font-size: 16px;
    height: 32px;
    align-items: center;
 }
`;

const Container = styled(Box)`
display: flex;
`;
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
    const { account } = useContext(DataContex);
    const openDialog = () => {
        setOpen(true);
    }

    return (
        <Wrapper>
            {
                account ? <Typography>{account}</Typography> :
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