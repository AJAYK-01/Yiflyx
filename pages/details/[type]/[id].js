import axios from 'axios';
import React from 'react';
import Head from 'next/head';
import { server } from '../../../config';
import DetailsCard from '../../../components/DetailsCard';


function Details({ data }) {

    const container = {
        display: 'flex',
        margin: 'auto', 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        paddingTop: '35px',
        paddingBottom: '35px',
        paddingLeft: '10px',
        paddingRight: '10px',
        backgroundColor: '#ffffff28',
        maxWidth: '1100px',
        borderRadius: '20px',
        boxShadow: '8px 6px 8px #00000080',
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

    return(
        <div>
            <Head>
                <title>{`${data['title']} (${data['year']}) - Yiflyx`}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="title" content="Yiflyx" key="title" />
                <meta property="description" content="Find and share all your favourite movies and shows at Yiflyx" key="description" />
            </Head>
            <div style={{padding: '15px'}} >
                <div style={container} >
                    <div style={image} >
                        <img 
                            src={data['poster']}
                            // height='50%'
                            // width={280}
                            style={{objectFit: 'scale-down'}}
                        />
                    </div>
                    <DetailsCard data={data} />
                </div>
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