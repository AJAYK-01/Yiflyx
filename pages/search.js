import React from 'react';


function Search({ data }) {

    console.log(data['items']);

    return(
        <div>hello</div>
    );
}

export async function getServerSideProps(context) {

    const data = context.query;
    return { props: { data } }
}

export default Search;