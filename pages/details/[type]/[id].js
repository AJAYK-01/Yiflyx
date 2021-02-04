import axios from 'axios';
import React from 'react';
import Image from 'next/image';
import { server } from '../../../config';
import DetailsCard from '../../../components/DetailsCard';


function Details({ data }) {

    // console.log(data);

    const container = {
        display: 'flex',
        margin: 'auto', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        paddingTop: '22px',
        paddingBottom: '55px',
        paddingLeft: '10px',
        paddingRight: '10px',
        backgroundColor: '#ffffff28',
        maxWidth: '1100px',
        borderRadius: '20px',
        boxShadow: '8px 6px 8px #00000080'

    }

    const image = {
        borderRadius: '50px' ,  
        display: 'block'
    }

    return(
        <div >
            <div style={container} >
                <div style={image} >
                    <Image 
                        src={data['poster']}
                        height={400}
                        width={280}
                    />
                </div>
                <DetailsCard data={data} />
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