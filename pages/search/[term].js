import axios from 'axios';
import React from 'react';
import ResultCard from '../../components/ResultCard';
import { server } from '../../config';
import Head from 'next/head';


function Search({ data, term }) {

    const results = data['items'];

    return(
        <div>
            <Head>
                <title>{`"${term}" - Yiflyx Search`}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="description" content="Find and share all your favourite movies and shows at Yiflyx" key="description" />
            </Head>
            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                {results.map((result) => {
                    return(
                        <div >
                            <ResultCard {...result} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {

    const term = context.query['term'];

    const result = await axios.get(`${server}/s/${term}`);
    const data = await result.data;

    return { props: { data, term } }
}

export default Search;