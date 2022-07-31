import { Box } from '@mui/material';
import Banner from './Banner';
import Navbar from './Navbar';
import { styled } from '@mui/material';
import { useEffect } from 'react';
import { getProducts } from '../../redux/actions/productAction';
import Slide from './Slide';
import { useDispatch, useSelector } from 'react-redux';
import MidSlide from './MidSlide';
import MidSection from './MidSection';

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
                <MidSlide products={products} title="Deal Of The Day" timer={true}></MidSlide>
                <MidSection></MidSection>
                <Slide products={products} title="Discounts For You" timer={false}></Slide>
                <Slide products={products} title="Suggesting Items" timer={false}></Slide>
                <Slide products={products} title="Top Section" timer={false}></Slide>
                <Slide products={products} title="Recomended Items" timer={false}></Slide>
                <Slide products={products} title="Trending Offers" timer={false}></Slide>
                <Slide products={products} title="Summer's Offer" timer={false}></Slide>
                <Slide products={products} title="Top's Deals on Accessories" timer={false}></Slide>
            </Component>
        </>
    );
};

export default Home;