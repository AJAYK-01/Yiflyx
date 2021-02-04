import React from 'react';
import Carousel from 'react-multi-carousel';
import CarouselArrow from './CarouselArrow';

import "react-multi-carousel/lib/styles.css";


export default function BottomCarousel(props) {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1100 },
          items: 9,
          slidesToSlide: 1
        },
        desktopmin: {
          breakpoint: { max: 1100, min: 800 },
          items: 6,
          slidesToSlide: 1
        },
        tablet: {
          breakpoint: { max: 800, min: 480 },
          items: 4,
          slidesToSlide: 1
        },
        mobile: {
          breakpoint: { max: 480, min: 250 },
          items: 2,
          slidesToSlide: 1
        },
        toosmall: {
            breakpoint: { max: 250, min: 0 },
            items: 1,
            slidesToSlide: 1
          }
      };

      return(
        <Carousel 
            draggable='true'
            swipeable='true'
            responsive={responsive}
            ssr={true}
            // customRightArrow={<CarouselArrow />}
        >
            {props.children}
        </Carousel>

      );
}