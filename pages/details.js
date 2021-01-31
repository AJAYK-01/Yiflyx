import React from 'react';


function Details({ data }) {

    console.log(data);

    return(
        <h1>hello</h1>
    );
}

export async function getServerSideProps(context) {

    const data = context.query;
    return { props: { data } }
}

export default Details;