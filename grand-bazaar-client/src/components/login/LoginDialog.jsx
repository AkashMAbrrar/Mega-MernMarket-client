import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material';
import React from 'react';
import { useState, useContext } from 'react';
import { authenticateSignup, authenticateLogin } from '../../service/api';
import { DataContex } from '../../context/DataProvider';

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

const Error = styled(Typography)`
  font-size: 13px;
  color: red;
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
};

const signUpInitialValue = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};

const loginInitalValue = {
    username: '',
    password: ''
}

const LoginDialog = ({ open, setOpen }) => {

    const [account, toggleAccount] = useState(accountInitialValue.login);
    const [signup, setSignup] = useState(signUpInitialValue);
    const [login, setLogin] = useState(loginInitalValue);
    const [error, setError] = useState(false);

    const { setAccount } = useContext(DataContex);

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValue.login);
        setError(false);
    }

    const toggleSignup = () => {
        toggleAccount(accountInitialValue.signup);
    };

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    };

    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if (!response) return;
        handleClose();
        setAccount(signup.firstname);
    };

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        console.log(response);
        if (response.status === 200) {
            handleClose();
            setAccount(response.data.data.firstname);
        } else {
            setError(true);
        }
    };




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
                            <TextField variant="standard" name='username' onChange={(e) => onValueChange(e)} label="Enter Your User Name"></TextField>
                            {error &&
                                <Error>Please Enter Valid Username Or Password</Error>
                            }
                            <TextField variant="standard" name='password' onChange={(e) => onValueChange(e)} label="Enter Your Password"></TextField>
                            <Text>By Continuing, You Agree To Grand Bazaar Terms of Use and Privecy Policy</Text>
                            <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                            <Typography style={{ textAlign: 'center' }}>Or</Typography>
                            <RequistOtp>Requist OTP</RequistOtp>
                            <CreateAccount onClick={() => toggleSignup()}>New To GrandBazar? Create An Account</CreateAccount>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField variant="standard" name='firstname' onChange={(e) => onInputChange(e)} label="Enter Your First Name"></TextField>
                            <TextField variant="standard" name='lastname' onChange={(e) => onInputChange(e)} label="Enter Your Last Name"></TextField>
                            <TextField variant="standard" name='username' onChange={(e) => onInputChange(e)} label="Enter Your User Name"></TextField>
                            <TextField variant="standard" name='email' onChange={(e) => onInputChange(e)} label="Enter Your Eamil"></TextField>
                            <TextField variant="standard" name='password' onChange={(e) => onInputChange(e)} label="Enter Your Password"></TextField>
                            <TextField variant="standard" name='phone' onChange={(e) => onInputChange(e)} label="Enter Your Phone"></TextField>
                            <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
                        </Wrapper>}
                </Box>
            </Component>
        </Dialog>
    );
};

export default LoginDialog;