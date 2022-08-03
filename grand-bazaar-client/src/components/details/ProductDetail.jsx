import { Box, Typography, styled, Table, TableBody, TableRow, TableCell } from '@mui/material';
import React from 'react';
import { LocalOffer as Badge } from '@mui/icons-material';

const SmallTxt = styled(Box)`
   font-size: 14px;
   vertical-align: baseline;
   & > p{
    font-size: 14px;
    margin: 10px 10px;
   }
`;

const BadgeIcon = styled(Badge)`
    margin-right: 10px;
    color: #00cc00;
    font-size: 16px;
`;

const ColumnText = styled(TableRow)`
  font-size: 14px;
  vertical-align: baseline;
  & > td: {
    font-size: 14px;
    margin-top: 10px;
    border : none;
  }
`;

const ProductDetail = ({ product }) => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));

    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography
                style={{ marginTop: 5, color: '#878787', fontSize: 14 }}
            >8 Rattings & 1 Review
                <Box component='span'><img src={fassured} alt="fas-img" style={{ width: 77, marginLeft: 20 }} /></Box>
            </Typography>
            <Typography>
                <Box component="span" style={{ fontSize: 28 }}>৳{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#878787' }}><strike>৳{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{ color: '#388e3c' }}>{product.price.discount}</Box>&nbsp;&nbsp;&nbsp;
            </Typography>
            <Typography>Available Offers</Typography>
            <SmallTxt>
                <Typography> <BadgeIcon />Get Extra 20% Off Up to ৳50 on 1 Item</Typography>
                <Typography> <BadgeIcon />Get Extra 13% Off Price Inclusive of Discount</Typography>
                <Typography> <BadgeIcon />Sign Up For Grand Bazaar Pay Later And Get Grand Gift Cart Worth ৳100 Know More</Typography>
                <Typography> <BadgeIcon />Buy 5 Items Save 5%: Buy 10 or More Save 100$ T&C </Typography>
                <Typography> <BadgeIcon />5% Cashback On Grand Bazaar Prime Bank Card T&C</Typography>
                <Typography> <BadgeIcon />No Cost EMI on Nexas Finserv Card on Cart Value Above ৳29999 T&C</Typography>
            </SmallTxt>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 'bold' }}>Delivery By {date.toDateString()} | 45৳</TableCell>
                    </ColumnText>

                    <ColumnText>
                        <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: "#878787" }}>Seller</TableCell>
                        <TableCell>
                            <Box component="span" style={{ color: "#2870f0" }}>Supper ComNet</Box>
                            <Typography>GST Invoice Available</Typography>
                            <Typography>View Sellers Starting From ৳{product.price.cost}</Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2}>
                            <img src={adURL} alt="img-sort" style={{ width: 390 }} />
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell style={{ color: '#878787' }}>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    );
};

export default ProductDetail;