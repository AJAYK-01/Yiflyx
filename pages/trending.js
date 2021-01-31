import React from 'react';


function Trending({ data }) {

    console.log(data['items']);

    return(
        <h1>hello</h1>
    );
}

export async function getServerSideProps(context) {

    const data = context.query;
    return { props: { data } }
}

export default Trending;