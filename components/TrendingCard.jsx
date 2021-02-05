import React from 'react';
import Image from 'next/image';

import { useRouter } from 'next/router';
import { server } from '../config';

export default function TrendingCard(props) {

  const router = useRouter();

  const { poster, title, id, year, type, desc } = props;

  const container = {
      marginLeft: '24px', 
      display: 'flex',
      flexDirection: 'row', 
      width: '560px',
      maxWidth: '90%',
      height: '280px',
      cursor: 'pointer',
      justifyContent: 'flex-start',
      backgroundColor: '#ffffff28',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '-3px -3px 10px #00000036'
  }

  const stackedbox = {
    position: 'absolute', 
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '560px',
    height: '280px',
    overflow: 'hidden'
  }

  const details = {
    display: 'flex',
    flexDirection: 'column',
    width: '55%'
  }

  const text = {
    color: 'white', 
    fontWeight: '600',
    fontSize: '22px',
    fontFamily: 'poppins',
    width: '100%',
    paddingLeft: '5px',
    paddingRight: '5px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }

  const subtext = {
    color: 'white', 
    fontWeight: '400',
    fontSize: '12px',
    paddingLeft: '5px',
    paddingRight: '5px'
  }

  return (
    <span title={`${server}/details/${type}/${id}`}>
      <div style={container} className='grow'
        onClick={()=>router.push(`/details/${type}/${id}`)}  >
          <img 
              src={poster}
              alt={(<div style={{color: 'red'}} />)}
              height='100%'
              width='100%'
              style={{opacity: 0.15, objectFit: 'cover'}}
          />
          <div style={stackedbox} >
              <img 
                src={poster}
                height='80%'
                style={{boxShadow: '6px 6px 8px #00000050'}}
              />
              <div style={details} >
                <p style={text} >{title}</p>
                <p style={subtext} >{desc}</p>
              </div>
          </div>
      </div>
    </span>
  );
}