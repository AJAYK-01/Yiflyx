import { faShare, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import SnackBar from './SnackBar';
import StreamButton from './StreamButton';

export default function DetailsCard(props) {

    const { data } = props;

    const container = {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'flex-start',
        maxWidth: '560px', 
        paddingLeft: '10px',
        paddingRight: '10px'
    }

    const titleBar = {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
    }

    const title = {
        fontFamily: 'poppins',
        fontSize: '28px',
        fontWeight: '500',
        marginBottom: '10px',
        color: 'white'
    }

    const desc = {
        fontSize: '15px',
        color: 'white',
        marginBottom: '15px'
    }

    const subtitle = {
        fontSize: '18px',
        fontFamily: 'poppins',
        color: 'white',
        marginBottom: '10px',
    }

    const streambuttons = {
        marginRight: '20px',
        marginBottom: '20px'
    }


    const [ isOpen, setOpen ] = useState(false);

    const toggle = () => {
        setOpen(!isOpen);
    }

    const share = () => {
        const url = window.location.href;
        const title = data['title']+' ('+data['year']+')\n';

        if(navigator.share) {
            navigator.share({
                title,
                url
            })
        }
        else {
            navigator.clipboard.writeText(url);
            setOpen(!isOpen);
        }
    }

    return(
        <div style={container} >

            <SnackBar isOpen={isOpen} toggle={toggle} />
            
            <div style={titleBar} >
                
                <p style={title} >{data['title']+` (${data['year']})`}</p>
                
                <FontAwesomeIcon icon={faShareAlt} color={'white'} size={'2x'} onClick={share}
                    style={{padding: '4px', cursor: 'pointer'}} />

            </div>
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
                    <div>
                        <p style={subtitle} >Watch Trailer</p>
                        <div style={streambuttons} >
                            <StreamButton id={192} url={data['trailer']} />
                        </div>
                    </div>
                ) 
                : (
                    <div />
                )
            }
        </div>
    )
}