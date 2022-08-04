import { Box, Button, styled } from '@mui/material';
import React from 'react';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';
import { useState } from 'react';

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    width: '90%',
    padding: '15px'
});

const StyleButton = styled(Button)(({ theme }) => ({
    width: '46%',
    height: '50px',
    borderRadius: '2px',
    [theme.breakpoints.down('lg')]: {
        width: '44%',
        fontSize: '10px',
        fontWeight: 'bold',
        marginTop: '10px'
    },
    [theme.breakpoints.down('sm')]: {
        width: '46%',
    }
}));

const ActionItem = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const { id } = product;

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }

    return (
        <LeftContainer>
            <Box style={{
                padding: '15px 20px', border: '3px solid #f0f0f0f0',
            }}>
                <Image src={product.detailUrl} alt="img" />
            </Box>
            <StyleButton variant='contained' onClick={() => addItemToCart()} style={{ marginRight: 10, background: '#ff9f00' }}><Cart></Cart>Add To Cart</StyleButton>
            <StyleButton variant='contained'><Flash></Flash>Buy Now</StyleButton>
        </LeftContainer>
    );
};

export default ActionItem;