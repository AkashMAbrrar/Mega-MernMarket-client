import { Box, styled, Typography, Button } from '@mui/material';
import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Component = styled(Box)`
   margin-top: 10px;
   background: #ffffff;
`;

const Deal = styled(Box)`
    padding: 15px 20px;
    display: flex;
`;

const Timer = styled(Box)`
  display: flex;
  margin-left: 10px;
  align-items: center;
  color: #7f7f7f;
`;

const DealText = styled(Typography)`
   font-size: 22px;
   font-weight: 600;
   margin-right: 25px;
   line-height: 32px;
`;

const SeeAllButton = styled(Button)`
   margin-left: auto;  
`;

const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
const renderer = ({ hours, minutes, seconds }) => {
    return <Box variant="span">{hours}: {minutes}: {seconds} Left</Box>;
}

const Slide = ({ products }) => {
    return (
        <Component>
            <Deal>
                <DealText>Deal Of The Day</DealText>
                <Timer>
                    <img src={timerURL} alt="timer" style={{ width: 24 }} />
                    <Countdown date={Date.now() + 5.0e+7} renderer={renderer} />
                </Timer>
                <SeeAllButton variant="contained">See All</SeeAllButton>
            </Deal>
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                centerMode={true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {
                    products.map(product => (
                        <img src={product.url} alt="productA" />
                    ))
                }
            </Carousel>
        </Component>
    );
};

export default Slide;