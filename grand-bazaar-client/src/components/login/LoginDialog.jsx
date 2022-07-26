import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const Component = styled(Box)`
  height: 75vh;
  width: 90vh;
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0px 35px;
  flex: 1;
  &  >div, & > button, &> p {
    margin-top: 20px;
  }
`;

const Image = styled(Box)`
  background: #000059 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85%;
  background-repeat: no-repeat;
  height: 80%;
  width: 28%;
  padding: 48px 35px;
`;

const LoginButton = styled(Button)`
text-transform: none;
background: #000059;
color: goldenrod;
height: 45px;
font-weight: bold;
`;

const RequistOtp = styled(Button)`
text-transform: none;
background: grey ;
color: goldenrod;
height: 45px;
font-weight: bold;
box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20&);
`;

const Text = styled(Typography)`
   font-size: 12px;
   color: #878787;
`;

const CreateAccount = styled(Typography)`
   font-size: 14px;
   text-align: center;
   color: #2874f0;
   font-weight: bold;
   cursor: pointer;
`;

const accountInitialValue = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get Access To Your Orders, Whishlist and Recomendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here!",
        subHeading: 'Sing up with your mobile number to get started'
    }
}

const LoginDialog = ({ open, setOpen }) => {

    const [account, toggleAccount] = useState(accountInitialValue.login);

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValue.login);
    }

    const toggleSignup = () => {
        toggleAccount(accountInitialValue.signup);
    }

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography variant='h5' style={{ color: 'white' }}>{account.heading}</Typography>
                        <Typography variant='h6' style={{ color: 'white', marginTop: 20 }}>{account.subHeading}</Typography>
                    </Image>
                    {account.view === 'login' ?
                        <Wrapper>
                            <TextField variant="standard" label="Enter Your Email/Phone Number"></TextField>
                            <TextField variant="standard" label="Enter Your Password"></TextField>
                            <Text>By Continuing, You Agree To Grand Bazaar Terms of Use and Privecy Policy</Text>
                            <LoginButton>Login</LoginButton>
                            <Typography style={{ textAlign: 'center' }}>Or</Typography>
                            <RequistOtp>Requist OTP</RequistOtp>
                            <CreateAccount onClick={() => toggleSignup()}>New To GrandBazar? Create An Account</CreateAccount>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField variant="standard" label="Enter Your First Name"></TextField>
                            <TextField variant="standard" label="Enter Your Last Name"></TextField>
                            <TextField variant="standard" label="Enter Your User Name"></TextField>
                            <TextField variant="standard" label="Enter Your Eamil"></TextField>
                            <TextField variant="standard" label="Enter Your Password"></TextField>
                            <TextField variant="standard" label="Enter Your Phone"></TextField>
                            <LoginButton>Continue</LoginButton>
                        </Wrapper>}
                </Box>
            </Component>
        </Dialog>
    );
};

export default LoginDialog;