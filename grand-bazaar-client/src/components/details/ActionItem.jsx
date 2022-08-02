import { Box, Button, styled } from '@mui/material';
import React from 'react';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

const LeftContainer = styled(Box)`
  min-width: 40%;
  padding: 40px 0 0 80px;
`;

const Image = styled('img')({
    width: '90%',
    padding: '15px'
});

const StyleButton = styled(Button)`
    width: 46%;
    height: 50px;
    border-radius: 2px;
`;

const ActionItem = ({ product }) => {
    return (
        <LeftContainer>
            <Box style={{
                padding: '15px 20px', border: '3px solid #f0f0f0f0',
            }}>
                <Image src={product.detailUrl} alt="img" />
            </Box>
            <StyleButton variant='contained' style={{ marginRight: 10, background: '#ff9f00' }}><Cart></Cart>Add To Cart</StyleButton>
            <StyleButton variant='contained'><Flash></Flash>Buy Now</StyleButton>
        </LeftContainer>
    );
};

export default ActionItem;