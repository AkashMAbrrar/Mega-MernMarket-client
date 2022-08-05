import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Grid, Typography, styled, Button } from '@mui/material';
import CartItems from './CartItems';
import TotalView from './TotalView';

const Container = styled(Grid)`
   padding: 30px 135px;
`;

const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
`;

const OrderButton = styled(Box)`
 padding: 16px 20px;
 background: #fff;
 box-shadow: 0 -2px 10px 0 rgba(0 0 0 / 10%);
 border-top: 1px solid #f0f0f0;
`;

const StyleButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: orange;
    color: black;
    font-weight: bold;
    width: 250px;
    height: 40px;
`;

const Cart = () => {
    const { cartItems } = useSelector(state => state.cart)
    return (
        <>
            {
                cartItems.length ?
                    <Container container>
                        <Grid item lg={9} md={9} sm={12} xs={12}>
                            <Header>
                                <Typography>My Cart List({cartItems.length})</Typography>
                            </Header>
                            {

                                cartItems.map(item => (
                                    <CartItems item={item}></CartItems>
                                ))
                            }
                            <OrderButton>
                                <StyleButton>Order Now</StyleButton>
                            </OrderButton>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalView cartItems={cartItems}></TotalView>
                        </Grid>
                    </Container>
                    : <div>Empty</div>


            }
        </>
    );
};

export default Cart;