import axios from 'axios';
import React from 'react';
import { server } from '../../config';


function Details({ data }) {

    // console.log(data);

    return(
        <h1>{JSON.stringify(data)}</h1>
    );
}

export async function getServerSideProps(context) {

    const id = context.query['id'];

    const result = await axios.get(`${server}/d/${id}`);
    const data = await result.data;

    return { props: { data } }
}

export default Details;