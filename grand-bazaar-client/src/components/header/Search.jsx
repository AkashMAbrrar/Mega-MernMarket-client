import { InputBase, List, ListItem, styled } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction';
import { Link } from 'react-router-dom';


const SearchContianer = styled(Box)`
 background: #fff;
width: 35%;
border-radius: 5px;
margin-left: 5px;
display: flex;
`;
const InputSearchBase = styled(InputBase)(({ theme }) => ({
    paddingLeft: '20px',
    width: '100%',
    fontSize: 'unset',
    [theme.breakpoints.down('sm')]: {

    }
}));

const SearchIconWrap = styled(Box)`
  color: Navy;
  padding: 5px;
  cursor: pointer;
  display: flex;
`;

const ListWrapper = styled(List)`
   position: absolute;
   background: white;
   color: black;
   margin-top: 36px;
`;

const Search = () => {
    const [text, setText] = useState('');

    const { products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);

    const getText = (text) => {
        setText(text);
    };

    return (
        <SearchContianer>
            <InputSearchBase
                placeholder='Search Your Products,Brands and More '
                onChange={(e) => getText(e.target.value)}
                value={text}
            />
            <SearchIconWrap>
                <SearchIcon />
            </SearchIconWrap>
            {
                text &&
                <ListWrapper>
                    {
                        products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                            <ListItem>
                                <Link to={`/product/${product.id}`}
                                    onClick={() => setText('')}
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >{product.title.longTitle}</Link></ListItem>
                        ))
                    }
                </ListWrapper>
            }
        </SearchContianer>
    );
};

export default Search;