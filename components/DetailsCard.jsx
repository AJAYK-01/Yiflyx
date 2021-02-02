import React from 'react';
import StreamButton from './StreamButton';

export default function DetailsCard(props) {

    const { data } = props;

    const container = {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'flex-start',
        // height: '100%', 
        maxWidth: '50%', 
        paddingLeft: '30px'   
    }

    const title = {
        fontSize: '30px',
        marginTop: '10px',
        marginBottom: '10px'
    }

    const desc = {
        fontSize: '15px'
    }

    const subtitle = {
        fontSize: '20px'
    }

    const streambuttons = {
        marginRight: '20px',
        marginBottom: '20px'
    }

    return(
        <div 
            style={container} >
            <p style={title} >{data['title']+` (${data['year']})`}</p>
            
            <p style={desc} >{data['desc']}</p>
            
            {data['links'].length !== 0 
                ? (
                    <p style={subtitle} >Where to Watch</p>
                )
                : (<div />)
            }

            <div style={streambuttons} >
                {data['links'].map((link) => {
                    return(
                        <StreamButton id={link['id']} url={link['url']} />
                    )
                })}
            </div>
            
            {data['trailer'] !== '' 
                ? (
                    <a href={data['trailer']} target='_blank' rel='noopener noreferrer' >
                        <p style={subtitle} >Watch Trailer</p>
                    </a>        
                ) 
                : (
                    <div />
                )
            }
            
            
        </div>
    )
}