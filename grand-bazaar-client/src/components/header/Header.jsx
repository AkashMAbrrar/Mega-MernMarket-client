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


const Header = () => {



    return (
        <div>
            <StyledHeader>
                <Toolbar>
                    <Component>
                        <img src={logo} alt="Brand-Bazaar" style={{ width: 40, height: 40 }} />
                        <Box>
                            <Typography style={{ marginBottom: 15, fontWeight: 700, fontSize: 18, fontStyle: 'italic' }}>Grand Bazaar</Typography>
                        </Box>
                    </Component>
                </Toolbar>
            </StyledHeader>
        </div>
    );
};

export default Header;