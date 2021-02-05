import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { server } from '../config';
import Head from 'next/head';

import CarouselCard from '../components/CarouselCard';
import BottomCarousel from '../components/BottomCarousel';
import TopCarousel from '../components/TopCarousel';
import TrendingCard from '../components/TrendingCard';


function Trending({ data }) {

    const movies = data['movies'];
    const shows = data['shows'];
    const trend = data['trending'];
    
    const [mediaStyle, setStyle] = useState({fontSize: '35px', textAlign: 'left'}) 

    useEffect(() => {
        const mq = window.matchMedia( "(max-width: 545px)" );
        if(mq.matches) {
            console.log('works');
            setStyle({fontSize: '20px', textAlign:  'center'});
        }
    }, []);

    const margins = {
        margin: '10px', 
        marginBottom: '25px'
    }

    const toprow = {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        flexWrap: 'wrap'
    }

    const topcarousel = {
        width: '600px', 
        maxWidth: '50%'
    }

    const title = {
        color: '#E7D7C1',
        fontSize: mediaStyle.fontSize,
        fontWeight: '900',
        margin: '20px',
        fontFamily: 'poppins',
        width: '600px',
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
        <div>
            <Head>
                <title>Yiflyx - Discover latest movies and shows</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="description" content="Find and share all your favourite movies and shows at Yiflyx" key="description" />
            </Head>

            <div style={margins} >
                <div style={toprow} >

                    <div style={title}>Discover latest movies and shows ,
                    and find where to watch them, all from one place.</div>

                    <div style={topcarousel}>
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
        </div>
    );
}

export async function getStaticProps(context) {

    const result = await axios.get(`${server}/trending`);
    const data = await result.data;

    return { props: { data }, revalidate: 10000, }
}

export default Trending;