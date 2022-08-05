import { Box, Button, styled, Typography } from '@mui/material';
import React from 'react';
import { addEllipsis } from '../../utilis/commonUtils';
import GroupedButton from './ButtonGroup';

const Component = styled(Box)`
    border-top: 2px solid #f0f0f0;
    display: flex;
    background: #fff;
`;
const LefComponent = styled(Box)`
    margin: 20px;
    font-size: 14px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
`;

const SmallText = styled(Typography)`
   color: #878787;
`;

const RemoveBtn = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    color: black;
    font-weight: bold;
`;

const CartItems = ({ item }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    return (
        <Component>
            <LefComponent>
                <img src={item.url} alt="item-img" style={{ width: 100, height: 100 }} />
                <GroupedButton></GroupedButton>
            </LefComponent>
            <Box style={{ margin: 20 }}>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <SmallText>Seller:RetailNet
                    <Box component="span"><img src={fassured} alt="img-fsr" style={{ width: '50px', marginLeft: 10 }} /></Box>
                </SmallText>
                <Typography style={{ margin: '20px 0' }}>
                    <Box component="span" style={{ fontWeight: 700, fontSize: 18 }}>৳{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: '#878787' }}><strike>৳{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: '#388e3c' }}>{item.price.discount}</Box>&nbsp;&nbsp;&nbsp;
                </Typography>
                <RemoveBtn>Remove</RemoveBtn>
            </Box>
        </Component>
    );
};

export default CartItems;