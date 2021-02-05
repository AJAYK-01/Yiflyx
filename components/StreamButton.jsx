import React from 'react';

export default function StreamButton(props) {

    const { id, url } = props;
    var provider;

    if(id === 3) {
        provider = 'play'
    }
    else if(id === 8) {
        provider = 'netflix'
    }
    else if(id === 119) {
        provider = 'prime'
    }
    else if(id === 192) {
        provider = 'youtube'
    }
    else if(id === 122) {
        provider = 'hotstar'
    }
    else if(id === 2) {
        provider = 'itunes'
    }
    else if(id === 437) {
        provider = 'hungama'
    }
    else if(id === 502) {
        provider = 'tata'
    }
    else {
        provider = 'other'
    }

    return(
        <a href={url} target='_blank' rel="noopener noreferrer" style={{marginRight: '30px'}} >
            <img 
                src={`/assets/${provider}.jpg`}
                width={50}
                height={50}
                style={{borderRadius: '8px', marginBottom: '15px'}}
            />
        </a>
    )
}