import axios from 'axios';
import React from 'react';
import { server } from '../config';
import ResultCard from '../components/ResultCard';


function Trending({ data }) {

    // console.log(data['items']);
    const results = data['items'];

    return(
      
            // <div>            
            // {JSON.stringify(data['items'])} </div>
            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
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

    const result = await axios.get(`${server}/trending`);
    const data = await result.data;

    return { props: { data } }
}

export default Trending;