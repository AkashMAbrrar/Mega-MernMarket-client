import React from 'react';
import { AppBar, Toolbar, styled, Box, Typography, } from '@mui/material';
import logo from '../../assets/logo/bag.png'

const StyledHeader = styled(AppBar)`
    background:#000059;
    height:55px;
`;

const Component = styled(Box)`
margin-left: 12%;
margin-top: 8px;
padding: 10px;
line-height: 0;
`;
const PlusLogo = styled('img')({
    width: 15,
    heightL: 10,
    marginBottom: 20,
    marginLeft: 5
});


const Header = () => {

    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (
        <div>
            <StyledHeader>
                <Toolbar>
                    <Component>
                        <img src={logo} alt="Brand-Bazaar" style={{ width: 40, height: 40 }} />
                        <Box style={{ display: 'flex' }}>
                            <Typography style={{ marginBottom: 15, fontWeight: 700, fontSize: 18, fontStyle: 'italic', color: '#FFA07A' }}>Grand Bazaar&nbsp; <Box component="span" style={{ color: '#FFD700' }}>Plus</Box>
                            </Typography>
                            <PlusLogo src={subURL} alt="" />
                        </Box>
                    </Component>
                </Toolbar>
            </StyledHeader>
        </div>
    );
};

export default Header;