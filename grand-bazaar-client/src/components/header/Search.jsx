import { InputBase, styled } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';


const SearchContianer = styled(Box)`
 background: #fff;
width: 35%;
border-radius: 5px;
margin-left: 5px;
display: flex;
`;
const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;

const SearchIconWrap = styled(Box)`
  color: Navy;
  padding: 5px;
  cursor: pointer;
  display: flex;
`;

const Search = () => {
    return (
        <SearchContianer>
            <InputSearchBase
                placeholder='Search Your Products,Brands and More '
            />
            <SearchIconWrap>
                <SearchIcon />
            </SearchIconWrap>
        </SearchContianer>
    );
};

export default Search;