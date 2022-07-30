import { Box } from '@mui/material';
import Banner from './Banner';
import Navbar from './Navbar';
import { styled } from '@mui/material';
import { useEffect } from 'react';
import { getProducts } from '../../redux/actions/productAction';
import Slide from './Slide';
import { useDispatch, useSelector } from 'react-redux';

const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2
`;

const Home = () => {

    const { products } = useSelector(state => state.getProducts);
    console.log(products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    return (
        <>
            <Navbar></Navbar>
            <Component>
                <Banner></Banner>
                <Slide products={products}></Slide>
            </Component>
        </>
    );
};

export default Home;