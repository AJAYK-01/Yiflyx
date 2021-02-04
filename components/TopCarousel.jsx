import React from 'react';
import Carousel from 'react-multi-carousel';

import "react-multi-carousel/lib/styles.css";


export default function TopCarousel(props) {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1100 },
          items: 1,
          slidesToSlide: 1
        },
        desktopmin: {
          breakpoint: { max: 1100, min: 800 },
          items: 1,
          slidesToSlide: 1
        },
        tablet: {
          breakpoint: { max: 800, min: 480 },
          items: 0,
          slidesToSlide: 0
        },
        mobile: {
          breakpoint: { max: 480, min: 250 },
          items: 0,
          slidesToSlide: 0
        },
        toosmall: {
            breakpoint: { max: 250, min: 0 },
            items: 0,
            slidesToSlide: 0
          }
      };

      return(
        <Carousel 
            autoPlay={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            removeArrowOnDeviceType={['desktop', 'tablet', 'mobile', 'desktopmin', 'toosmall']}
        >
            {props.children}
        </Carousel>

      );
}