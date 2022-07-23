import { Box, Button, Typography, styled } from '@mui/material';
import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
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
    return (
        <Wrapper>
            <LoginButton variant="contained">Login</LoginButton>
            <Typography style={{ marginTop: 3, width: 135 }}>Become a seller</Typography>
            <Typography style={{ marginTop: 3, }}>More</Typography>
            <Container>
                <AddShoppingCartIcon></AddShoppingCartIcon>
                <Typography>Cart</Typography>
            </Container>
        </Wrapper>
    );
};

export default CustomButtons;