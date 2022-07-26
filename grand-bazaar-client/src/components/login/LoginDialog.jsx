import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material';
import React from 'react';

const Component = styled(Box)`
  height: 70vh;
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
  height: 100%;
  width: 40%;
  padding: 45px 35px;
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
`;

// login/Signup image: 

const LoginDialog = ({ open, setOpen }) => {

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography variant='h5' style={{ color: 'white' }}>Login</Typography>
                        <Typography variant='h6' style={{ color: 'white', marginTop: 20 }}>Get Access To Your Orders, Whishlist and Recomendations</Typography>
                    </Image>
                    <Wrapper>
                        <TextField variant="standard" label="Enter Your Email/Phone Number"></TextField>
                        <TextField variant="standard" label="Enter Your Password"></TextField>
                        <Text>By Continuing, You Agree To Grand Bazaar Terms of Use and Privecy Policy</Text>
                        <LoginButton>Login</LoginButton>
                        <Typography>Or</Typography>
                        <RequistOtp>Requist OTP</RequistOtp>
                        <CreateAccount>New To GrandBazar? Create An Account</CreateAccount>
                    </Wrapper>
                </Box>
            </Component>
        </Dialog>
    );
};

export default LoginDialog;