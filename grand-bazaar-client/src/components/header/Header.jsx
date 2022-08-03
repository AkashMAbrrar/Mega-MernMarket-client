import React from 'react';
import { AppBar, Toolbar, styled, Box, Typography, IconButton, Drawer, List, ListItem, } from '@mui/material';
import logo from '../../assets/logo/bag.png'
import Search from './Search';
import CustomButtons from './CustomButtons';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import { useState } from 'react';

const StyledHeader = styled(AppBar)`
    background:#000059;
    height:55px;
`;

const Component = styled(Link)`
margin-left: 3%;
margin-top: 8px;
padding: 10px;
line-height: 0;
text-decoration: none;
`;
const PlusLogo = styled('img')(({ theme }) => ({
    width: 20,
    heightL: 20,
    marginBottom: 20,
    marginLeft: 5,
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));

const CustomButtonWrap = styled(Box)(({ theme }) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));

const TitleTag = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));

const LogoTitle = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));

const MenuIcon = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block',
        color: '#ffffff'
    }
}))


const Header = () => {

    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const [open, setOpen] = useState(false);

    const handlOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const list = () => (
        <Box style={{ width: 200 }}>
            <List>
                <ListItem button>
                    <CustomButtons></CustomButtons>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            <StyledHeader>
                <Toolbar style={{ minHeight: 55 }}>
                    <MenuIcon onClick={handlOpen}>
                        <Menu />
                    </MenuIcon>

                    <Drawer open={open} onClose={handleClose}>
                        {list()}
                    </Drawer>

                    <Component to="/">
                        <img src={logo} alt="Brand-Bazaar" style={{ width: 40, height: 40 }} />
                        <Box style={{ display: 'flex' }}>
                            <LogoTitle style={{ marginBottom: 15, fontWeight: 500, fontSize: 16, fontStyle: 'italic', color: '#FFA07A' }}>Grand Bazaar&nbsp; <TitleTag component="span" style={{ color: '#FFD700' }}>Plus</TitleTag>
                            </LogoTitle>
                            <PlusLogo src={subURL} alt="plus-img" />
                        </Box>
                    </Component>
                    <Search>
                    </Search>
                    <CustomButtonWrap>
                        <CustomButtons></CustomButtons>
                    </CustomButtonWrap>
                </Toolbar>
            </StyledHeader>
        </div>
    );
};

export default Header;