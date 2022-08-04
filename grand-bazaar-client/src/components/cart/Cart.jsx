import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Grid, Typography, styled } from '@mui/material';
import CartItems from './CartItems';
import TotalView from './TotalView';

const Container = styled(Grid)`
   padding: 30px 135px;
`;

const Header = styled(Box)`
    padding: 15px 24px;
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
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalView></TotalView>
                        </Grid>
                    </Container>
                    : <div>Empty</div>


            }
        </>
    );
};

export default Cart;