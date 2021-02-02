import { Button } from '@material-ui/core';
import React from 'react';

export default function StreamButton(props) {

    const { id, url } = props;
    var provider;

    if(id === 3) {
        provider = 'Play Movies'
    }
    else if(id === 8) {
        provider = 'Netflix'
    }
    else if(id === 119) {
        provider = 'Amazon Prime'
    }
    else if(id === 192) {
        provider = 'Youtube Movies'
    }
    else if(id === 122) {
        provider = 'Disney+ Hotstar'
    }
    else if(id === 2) {
        provider = 'Itunes'
    }
    else if(id === 437) {
        provider = 'Hungama'
    }
    else if(id === 502) {
        provider = 'TataSky'
    }
    else {
        provider = 'Other'
    }

    return(
        <a href={url} target='_blank' rel="noopener noreferrer" >
            <Button >
                {provider}
            </Button>
        </a>
        
    )
}