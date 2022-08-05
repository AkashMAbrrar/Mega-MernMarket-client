import { Box, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';

const Header = styled(Box)`
  padding: 15px 24px;
  background: #FFF;
  border-bottom: 2px solid #f0f0f0;
  `;

const Heading = styled(Typography)`
     color: #878787;
  `;

const Container = styled(Box)`
       padding: 15px 24px;
       background: white;
       & > p{
        margin-bottom: 20px;
        font-size: 14px;
       }
       & > h6 {
        margin-bottom: 20px;
       }
  `;

const Price = styled(Box)`
     float: right;
  `;

const Discount = styled(Typography)`
   color: green;
   font-size: 14px;
   font-weight: bold;
  `;

const TotalView = ({ cartItems }) => {

    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        totalAmount()
    }, [cartItems]);

    const totalAmount = () => {

        let price = 0, discount = 0;
        cartItems.map(item => {
            price += item.price.mrp;
            discount += (item.price.mrp - item.price.cost)
        });
        setPrice(price);
        setDiscount(discount);
    }

    return (
        <Box>
            <Header>
                <Heading>Total Prices</Heading>
            </Header>
            <Container>
                <Typography>Price ({cartItems.length} Items)
                    <Price component="span">৳{price}</Price>
                </Typography>
                <Typography>Discount
                    <Price component="span">৳{discount}</Price>
                </Typography>
                <Typography>Delivery Charges
                    <Price component="span">৳33</Price>
                </Typography>
                <Typography variant="h6">Total Amount
                    <Price component="span">৳{price - discount + 33}</Price>
                </Typography>
                <Discount>You Will Save ৳{discount - 33} On This Order</Discount>
            </Container>
        </Box>
    );
};

export default TotalView;