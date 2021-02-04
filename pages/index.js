import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { server } from '../config';
import CarouselCard from '../components/CarouselCard';
import Carousel from 'react-multi-carousel';

import "react-multi-carousel/lib/styles.css";
import BottomCarousel from '../components/BottomCarousel';
import TopCarousel from '../components/TopCarousel';
import TrendingCard from '../components/TrendingCard';

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


function Trending({ data }) {

    // console.log(data['items']);
    const movies = data['movies'];
    const shows = data['shows'];
    const trend = data['trending'];
    
    const [mediaStyle, setStyle] = useState({fontSize: '35px', textAlign: 'left'}) 

    useEffect(() => {
        const mq = window.matchMedia( "(max-width: 768px)" );
        if(mq.matches) {
            console.log('works');
            setStyle({fontSize: '20px', textAlign:  'center'});
        }
    }, []);

    const title = {
      color: '#E7D7C1',
      fontSize: mediaStyle.fontSize,
      fontWeight: 900,
      margin: '20px',
      fontFamily: 'poppins',
      maxWidth: '100%',
      justifyContent: 'center',
      textAlign: mediaStyle.textAlign
    }

    const subtitle = {
        color: '#E8E3E6',
        fontSize: '20px',
        fontWeight: '200',
        fontFamily: 'poppins',
        margin: '14px',
        marginTop: '18px',
        marginLeft: '18px'
    }

    return(
        <div style={{margin: '10px', marginBottom: '25px'}} >

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} >
                <div style={title}>Find and share all your favourite movies and shows from one place,
                and watch them legally :)</div>

                <div style={{width: '50%'}}>
                    <TopCarousel>
                        {trend.map((result) => {
                            return(
                                <div >
                                    <TrendingCard {...result} />
                                </div>
                            )
                        })}
                    </TopCarousel>
                </div>
            </div>

            <div style={subtitle} >Popular Movies</div>

            <BottomCarousel>
                {movies.map((result) => {
                    return(
                        <div >
                            <CarouselCard {...result} />
                        </div>
                    )
                })}
            </BottomCarousel>
            

            <div style={subtitle} >Popular Shows</div>
            
            <BottomCarousel>
                {shows.map((result) => {
                    return(
                        <div >
                            <CarouselCard {...result} />
                        </div>
                    )
                })}
            </BottomCarousel>
        </div>
   
    );
}

export async function getServerSideProps(context) {

    const result = await axios.get(`${server}/trending`);
    const data = await result.data;

    return { props: { data } }
}

export default Trending;