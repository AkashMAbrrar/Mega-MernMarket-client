import { Box } from '@mui/material';
import Banner from './Banner';
import Navbar from './Navbar';
import { styled } from '@mui/material';

const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2
`;

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Component>
                <Banner></Banner>
            </Component>
        </>
    );
};

export default Home;