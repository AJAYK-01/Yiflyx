import axios from 'axios';
import React from 'react';
import ResultCard from '../../components/ResultCard';
import { server } from '../../config';
// import Layout from '../components/Layout';


function Search({ data }) {

    const results = data['items'];

    return(
        <div style={{display: 'flex', alignContent: 'center', flexWrap: 'wrap'}}>
            {results.map((result) => {
                return(
                    <div >
                        <ResultCard {...result} />
                    </div>
                )
            })}
        </div>
    );
}

export async function getServerSideProps(context) {

    const term = context.query['term'];

    const result = await axios.get(`${server}/s/${term}`);
    const data = await result.data;

    return { props: { data } }
}

export default Search;