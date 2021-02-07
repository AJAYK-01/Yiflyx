import axios from 'axios';
import React from 'react';
import Head from 'next/head';
import { server } from '../../../config';
import DetailsCard from '../../../components/DetailsCard';
import BottomCarousel from '../../../components/BottomCarousel';
import CastCard from '../../../components/CastCard';


function Details({ data }) {

    const cast = data['imdb']['cast'];
    console.log(cast);

    const container = {
        display: 'flex',
        margin: 'auto', 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        padding: '25px 0px 25px 0px',
        backgroundColor: '#ffffff28',
        maxWidth: '1100px',
        borderRadius: '20px',
        boxShadow: '8px 6px 8px #00000080',       
    }

    const rowcontainer = {
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        padding: '15px',
        paddingBottom: '10px',
        flexWrap: 'wrap',        
    }

    const image = {
        borderRadius: '50px' ,  
        display: 'flex',
        marginBottom: '10px',
        justifyContent: 'center',
        maxWidth: '400px',
        maxHeight: '32vw',
        minHeight: '220px'
        // height: '20%'
    }

    const title = {
        fontSize: '18px',
        fontFamily: 'poppins',
        color: 'white',
        marginBottom: '10px',
        marginLeft: '8px'
    }

    return(
        <div style={{padding: '10px'}} >
            <Head>
                <title>{`${data['title']} (${data['year']}) - Yiflyx`}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="title" content="Yiflyx" key="title" />
                <meta property="description" content="Find and share all your favourite movies and shows at Yiflyx" key="description" />
            </Head>
            <div style={container} >
                <div style={rowcontainer} >
                    <div style={image} >
                        <img 
                            src={data['poster']}
                            style={{objectFit: 'scale-down'}}
                        />
                    </div>
                    <DetailsCard data={data} />
                </div>

                {cast.length !==0 ? <p style={title} >Cast</p> : <div />}
                <BottomCarousel >
                    {cast.map((e) => {
                        return(
                            <CastCard poster={e['image']} name={e['name']} 
                                role={e['role']}  link={e['id']} />
                        )
                    })}
                </BottomCarousel>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {

    const id = context.query['id'];
    const type = context.query['type'];

    const result = await axios.get(`${server}/d/${type}/${id}`);
    const data = await result.data;

    return { props: { data } }
}

export default Details;